<script setup>
import { defineProps, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { formatMarketCap, formatVolume, getDisplaySymbol, isCryptoSymbol } from '@/utils/formatters';

const { t } = useI18n();
const emit = defineEmits(['view-details']);
const props = defineProps({
    module: {
        type: Object,
        required: true
    }
});

const displaySymbol = computed(() => getDisplaySymbol(props.module.asset_symbol));
const isCrypto = computed(() => isCryptoSymbol(props.module.asset_symbol));

const assetType = computed(() => {
    if (isCrypto.value) return 'crypto';
    return 'stock';
});

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
        :class="['demo-card', assetType, 'group h-full cursor-pointer']"
    >
        <!-- Asset type indicator -->
        <div class="absolute top-3 right-3 z-10">
            <span v-if="isCrypto" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100/90 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 text-[10px] font-semibold backdrop-blur-sm">
                <i class="pi pi-bitcoin text-[8px]"></i>
                Crypto
            </span>
            <span v-else class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-100/90 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 text-[10px] font-semibold backdrop-blur-sm">
                <i class="pi pi-building text-[8px]"></i>
                Stock
            </span>
        </div>
        
        <!-- Header -->
        <div class="mb-3 pr-14">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ displaySymbol }}</h3>
            <p class="text-xs text-gray-600 dark:text-gray-400 truncate">{{ module.name }}</p>
        </div>
        
        <!-- Price -->
        <div class="mb-3">
            <div class="flex items-baseline gap-0.5">
                <span class="text-sm text-gray-500">$</span>
                <span class="text-2xl font-bold text-gray-900 dark:text-white">{{ formattedPrice.whole }}</span>
                <span class="text-base text-gray-500">.{{ formattedPrice.decimal }}</span>
            </div>
            <div class="flex items-center gap-2 mt-0.5">
                <span 
                    v-if="typeof module.percentChange === 'number'"
                    :class="[
                        'inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold',
                        module.percentChange >= 0 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                            : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    ]"
                >
                    <i :class="['pi text-[8px] mr-0.5', module.percentChange >= 0 ? 'pi-arrow-up' : 'pi-arrow-down']"></i>
                    {{ Math.abs(module.percentChange).toFixed(2) }}%
                </span>
            </div>
        </div>
        
        <!-- Mini chart -->
        <div class="h-16 mb-3 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg p-1.5">
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
        
        <!-- Stats -->
        <div class="grid grid-cols-3 gap-2 py-2 border-t border-gray-200/50 dark:border-gray-700/50 mb-3">
            <div class="text-center">
                <div class="text-[10px] text-gray-500">{{ isCrypto ? '24h Vol' : 'Mkt Cap' }}</div>
                <div class="text-xs font-semibold text-gray-900 dark:text-white">
                    {{ isCrypto ? formatVolume(module.volume) : formatMarketCap(module.marketCap) }}
                </div>
            </div>
            <div class="text-center">
                <div class="text-[10px] text-gray-500">{{ isCrypto ? '24h High' : 'P/E' }}</div>
                <div class="text-xs font-semibold text-gray-900 dark:text-white">
                    {{ isCrypto ? (module.dayHigh ? '$' + module.dayHigh.toFixed(0) : '...') : (module.peRatio ? module.peRatio.toFixed(1) : '...') }}
                </div>
            </div>
            <div class="text-center">
                <div class="text-[10px] text-gray-500">{{ isCrypto ? '24h Low' : 'Volume' }}</div>
                <div class="text-xs font-semibold text-gray-900 dark:text-white">
                    {{ isCrypto ? (module.dayLow ? '$' + module.dayLow.toFixed(0) : '...') : formatVolume(module.volume) }}
                </div>
            </div>
        </div>
        
        <!-- Sentiment bar (compact) -->
        <div class="mt-auto">
            <div class="p-2 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg">
                <div class="flex justify-between text-[10px] mb-1">
                    <span class="text-gray-500 flex items-center gap-1">
                        <i :class="['pi pi-sparkles', isCrypto ? 'text-amber-500' : 'text-indigo-500']" style="font-size: 8px;"></i>
                        Sentiment
                    </span>
                    <span class="font-semibold text-gray-900 dark:text-white">{{ module.sentiment }}% Bullish</span>
                </div>
                <div class="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
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
    border-radius: 1.5rem;
    padding: 1rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
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
