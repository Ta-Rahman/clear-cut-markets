<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { formatMarketCap, formatVolume, getDisplaySymbol, isCryptoSymbol } from '@/utils/formatters';

const { t } = useI18n();
const emit = defineEmits(['view-details']);
const props = defineProps({
    module: {
        type: Object,
        required: true
    },
    isSelected: {
        type: Boolean,
        default: false
    }
});

const displaySymbol = computed(() => getDisplaySymbol(props.module.asset_symbol));

// Use asset_type from module data (set by useModuleManager or API)
const assetType = computed(() => {
    // Priority: API response assetType > module asset_type > fallback detection
    if (props.module.assetType) return props.module.assetType;
    if (props.module.asset_type) return props.module.asset_type;
    if (props.module.isCrypto) return 'crypto';
    if (props.module.isEtf) return 'etf';
    return 'stock';
});

const isCrypto = computed(() => assetType.value === 'crypto');
const isEtf = computed(() => assetType.value === 'etf');

const formattedPrice = computed(() => {
    const price = props.module.lastPrice;
    if (!price) return { whole: '...', decimal: '' };
    
    let priceStr;
    if (isCrypto.value && price < 1) {
        priceStr = price.toFixed(6);
    } else if (isCrypto.value && price < 100) {
        priceStr = price.toFixed(4);
    } else {
        priceStr = price.toFixed(2);
    }
    
    const parts = priceStr.split('.');
    return { whole: parts[0], decimal: parts[1] || '00' };
});

const getSentimentColor = (sentiment) => {
    if (sentiment >= 70) return '#22c55e';
    if (sentiment >= 30) return '#f59e0b';
    return '#ef4444';
};

// Generate SVG chart path from chart data
const chartPath = computed(() => {
    const data = props.module.chart || [];
    if (data.length < 2) return { line: '', area: '' };
    
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    
    const points = data.map((price, i) => {
        const x = (i / (data.length - 1)) * 100;
        const y = 35 - ((price - min) / range) * 30;
        return `${x},${y}`;
    });
    
    const line = `M${points.join(' L')}`;
    const area = `${line} L100,40 L0,40 Z`;
    
    return { line, area };
});

const chartColor = computed(() => {
    const change = props.module.percentChange || 0;
    return change >= 0 ? '#22c55e' : '#ef4444';
});
</script>

<template>
    <div 
        @click="emit('view-details', module)" 
        :class="['demo-card', assetType, 'group h-full cursor-pointer', { 'is-selected': isSelected }]"
    >
        <!-- Asset type indicator - smaller on mobile -->
        <div class="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
            <span v-if="isCrypto" class="inline-flex items-center px-1.5 py-0.5 rounded-full bg-amber-100/90 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 text-[8px] sm:text-[10px] font-semibold backdrop-blur-sm">
                Crypto
            </span>
            <span v-else-if="isEtf" class="inline-flex items-center px-1.5 py-0.5 rounded-full bg-teal-100/90 dark:bg-teal-900/50 text-teal-700 dark:text-teal-400 text-[8px] sm:text-[10px] font-semibold backdrop-blur-sm">
                ETF
            </span>
            <span v-else class="inline-flex items-center px-1.5 py-0.5 rounded-full bg-indigo-100/90 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 text-[8px] sm:text-[10px] font-semibold backdrop-blur-sm">
                Stock
            </span>
        </div>
        
        <!-- Header - tighter for mobile -->
        <div class="mb-1 sm:mb-2 pr-12 sm:pr-14">
            <h3 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-tight">{{ displaySymbol }}</h3>
            <p class="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 truncate">{{ module.name }}</p>
        </div>
        
        <!-- Price - compact -->
        <div class="mb-1.5 sm:mb-2">
            <div class="flex items-baseline gap-0.5">
                <span class="text-[10px] sm:text-xs text-gray-500">$</span>
                <span class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{{ formattedPrice.whole }}</span>
                <span class="text-xs sm:text-sm text-gray-500">.{{ formattedPrice.decimal }}</span>
            </div>
            <span 
                v-if="typeof module.percentChange === 'number'"
                :class="[
                    'inline-flex items-center px-1 py-0.5 rounded text-[9px] sm:text-[10px] font-semibold mt-0.5',
                    module.percentChange >= 0 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                ]"
            >
                <i :class="['pi text-[7px] sm:text-[8px] mr-0.5', module.percentChange >= 0 ? 'pi-arrow-up' : 'pi-arrow-down']"></i>
                {{ Math.abs(module.percentChange).toFixed(2) }}%
            </span>
        </div>
        
        <!-- Mini chart - smaller on mobile -->
        <div class="h-10 sm:h-12 mb-1.5 sm:mb-2 bg-gray-50/50 dark:bg-gray-800/30 rounded p-0.5 sm:p-1">
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" class="w-full h-full">
                <defs>
                    <linearGradient :id="'grad-' + module.id" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" :style="`stop-color:${chartColor};stop-opacity:0.3`" />
                        <stop offset="100%" :style="`stop-color:${chartColor};stop-opacity:0`" />
                    </linearGradient>
                </defs>
                <path :d="chartPath.area" :fill="`url(#grad-${module.id})`" />
                <path :d="chartPath.line" fill="none" :stroke="chartColor" stroke-width="2" stroke-linecap="round" />
            </svg>
        </div>
        
        <!-- Stats - 2 cols on mobile, 3 on larger -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5 py-1.5 sm:py-2 border-t border-gray-200/50 dark:border-gray-700/50 mb-2 sm:mb-2.5">
            <div class="text-center">
                <div class="text-[8px] sm:text-[9px] text-gray-500 mb-0.5">{{ isCrypto ? 'Vol' : 'Cap' }}</div>
                <div class="text-[10px] sm:text-[11px] font-semibold text-gray-900 dark:text-white">
                    {{ isCrypto ? formatVolume(module.volume) : formatMarketCap(module.marketCap) }}
                </div>
            </div>
            <div class="hidden sm:block text-center">
                <div class="text-[8px] sm:text-[9px] text-gray-500 leading-tight">{{ isCrypto ? 'High' : 'P/E' }}</div>
                <div class="text-[10px] sm:text-[11px] font-semibold text-gray-900 dark:text-white">
                    {{ isCrypto ? (module.dayHigh ? '$' + module.dayHigh.toFixed(0) : '...') : (module.peRatio ? module.peRatio.toFixed(1) : '...') }}
                </div>
            </div>
            <div class="text-center">
                <div class="text-[8px] sm:text-[9px] text-gray-500 leading-tight">{{ isCrypto ? 'Low' : 'Vol' }}</div>
                <div class="text-[10px] sm:text-[11px] font-semibold text-gray-900 dark:text-white">
                    {{ isCrypto ? (module.dayLow ? '$' + module.dayLow.toFixed(0) : '...') : formatVolume(module.volume) }}
                </div>
            </div>
        </div>
        
        <!-- Sentiment bar - simplified on mobile -->
        <div class="mt-auto">
            <div class="p-1.5 sm:p-2 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg">
                <div class="flex justify-between text-[8px] sm:text-[9px] mb-1 sm:mb-1.5">
                    <span class="text-gray-500">Sentiment</span>
                    <span class="font-semibold text-gray-900 dark:text-white">{{ module.sentiment }}%</span>
                </div>
                <div class="h-1 sm:h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                        class="h-full rounded-full transition-all duration-500"
                        :style="{ width: module.sentiment + '%', backgroundColor: getSentimentColor(module.sentiment) }"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.demo-card {
    position: relative;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 0.875rem;
    padding: 0.5rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

@media (min-width: 576px) {
    .demo-card {
        border-radius: 1.25rem;
        padding: 0.75rem;
    }
}

@media (min-width: 992px) {
    .demo-card {
        padding: 1rem;
    }
}

.demo-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}

.demo-card.stock::before { background: linear-gradient(90deg, #6366f1, #8b5cf6); }
.demo-card.crypto::before { background: linear-gradient(90deg, #f59e0b, #ea580c); }
.demo-card.etf::before { background: linear-gradient(90deg, #14b8a6, #06b6d4); }

/* Only apply hover effects on devices that support hover (not touch) */
@media (hover: hover) and (pointer: fine) {
    .demo-card:hover::before {
        transform: scaleX(1);
    }

    .demo-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
    }

    .demo-card.stock:hover { border-color: rgba(99, 102, 241, 0.3); }
    .demo-card.crypto:hover { border-color: rgba(245, 158, 11, 0.3); }
    .demo-card.etf:hover { border-color: rgba(20, 184, 166, 0.3); }
}

/* Selected state - shows light bar when detail modal is open */
.demo-card.is-selected::before {
    transform: scaleX(1);
}

.demo-card.is-selected.stock { border-color: rgba(99, 102, 241, 0.3); }
.demo-card.is-selected.crypto { border-color: rgba(245, 158, 11, 0.3); }
.demo-card.is-selected.etf { border-color: rgba(20, 184, 166, 0.3); }

/* Active state for touch devices */
.demo-card:active::before {
    transform: scaleX(1);
}

.demo-card:active {
    transform: scale(0.98);
}
</style>

<style>
.app-dark .demo-card {
    background: rgba(17, 24, 39, 0.8);
    border-color: rgba(255, 255, 255, 0.1);
}

.app-dark .demo-card:hover {
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.4);
}
</style>
