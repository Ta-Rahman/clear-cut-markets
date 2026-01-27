<script setup>
import { ref, watch, computed } from 'vue';
import { supabase } from '@/supabase';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import AutoComplete from 'primevue/autocomplete';
import Dropdown from 'primevue/dropdown';
import { useI18n } from 'vue-i18n';
import Message from 'primevue/message';
import { getDisplaySymbol } from '@/utils/formatters';
import draggable from 'vuedraggable';

const { t } = useI18n();

const props = defineProps({
    visible: { type: Boolean, default: false },
    currentModules: { type: Array, default: () => [] },
    moduleLimit: { type: Number, default: 3 }
});

const emit = defineEmits(['close', 'addModule', 'removeModule', 'reorderModules']);

const isVisible = ref(props.visible);
const selectedAsset = ref(null);
const searchResults = ref([]);
const newAssetType = ref({ name: 'Stock', code: 'stock' });
const assetTypes = ref([
    { name: 'Stock', code: 'stock' },
    { name: 'Crypto', code: 'crypto' },
    { name: 'ETF', code: 'etf' }
]);
const searchError = ref('');
const searchTimer = ref(null);
const isDragging = ref(false);

// Local copy of modules for drag operations
const localModules = ref([]);

watch(() => props.visible, (newValue) => {
    isVisible.value = newValue;
    if (newValue) {
        // Sync local modules when modal opens
        localModules.value = [...props.currentModules];
    } else {
        selectedAsset.value = null;
        searchError.value = '';
    }
});

// Keep local modules in sync with prop changes
watch(() => props.currentModules, (newModules) => {
    if (!isDragging.value) {
        localModules.value = [...newModules];
    }
}, { deep: true });

// Ref for scroll container
const scrollContainer = ref(null);
let scrollInterval = null;

const onDragStart = (evt) => {
    isDragging.value = true;
    
    // Start listening for mouse/touch position to handle scroll outside container
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('touchmove', handleDragMove, { passive: false });
};

const handleDragMove = (evt) => {
    if (!scrollContainer.value || !isDragging.value) return;
    
    const container = scrollContainer.value;
    const rect = container.getBoundingClientRect();
    const clientY = evt.touches ? evt.touches[0].clientY : evt.clientY;
    
    const edgeThreshold = 15; // pixels from edge to trigger scroll inside
    const scrollSpeed = 6;
    
    // Clear any existing scroll interval
    if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
    }
    
    // Check if above container or near top edge
    if (clientY < rect.top + edgeThreshold) {
        scrollInterval = setInterval(() => {
            container.scrollTop -= scrollSpeed;
        }, 16);
    }
    // Check if below container or near bottom edge
    else if (clientY > rect.bottom - edgeThreshold) {
        scrollInterval = setInterval(() => {
            container.scrollTop += scrollSpeed;
        }, 16);
    }
};

const onDragEnd = async () => {
    isDragging.value = false;
    
    // Clean up scroll handling
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('touchmove', handleDragMove);
    if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
    }
    
    // Emit the new order to parent (local reorder works regardless of DB)
    emit('reorderModules', [...localModules.value]);
    
    // Try to persist order to database (will silently fail if column doesn't exist)
    try {
        const updates = localModules.value.map((module, index) => ({
            id: module.id,
            display_order: index
        }));
        
        for (const update of updates) {
            const { error } = await supabase
                .from('user_modules')
                .update({ display_order: update.display_order })
                .eq('id', update.id);
            
            // If column doesn't exist, stop trying
            if (error?.code === '42703') {
                console.info('display_order column not found - reorder is session-only');
                break;
            }
        }
    } catch (error) {
        console.warn('Could not persist module order:', error.message);
    }
};

const searchAssets = async (event) => {
    clearTimeout(searchTimer.value);

    searchTimer.value = setTimeout(async () => {
        if (!isVisible.value || !event.query.trim().length) {
            searchResults.value = [];
            return;
        }
        searchError.value = '';
        try {
            const assetType = newAssetType.value.code;
            const response = await fetch(`/api/search-assets?query=${event.query}&type=${assetType}`);
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'An unknown error occurred.');
            }

            const data = await response.json();
            searchResults.value = data;
        } catch (error) {
            console.error("Error searching assets:", error);
            searchError.value = error.message;
            searchResults.value = [];
        }
    }, 350);
};

const handleAddModule = async () => {
    if (!selectedAsset.value || typeof selectedAsset.value !== 'object') {
        return;
    }

    try {
        const { data, error } = await supabase.rpc('add_user_module', {
            p_asset_symbol: selectedAsset.value.symbol,
            p_asset_name: selectedAsset.value.name,
            p_asset_exchange: selectedAsset.value.region,
            p_asset_type: newAssetType.value.code
        });

        if (error) throw error;

        const newModule = data[0];
        emit('addModule', newModule);

    } catch (error) {
        console.error('Error adding module via RPC:', error);
    } finally {
        selectedAsset.value = null;
    }
};

const canAddMore = computed(() => {
    return props.currentModules.length < props.moduleLimit;
});

const handleRemoveModule = (module) => {
    emit('removeModule', module);
};
</script>

<template>
    <Dialog v-model:visible="isVisible" modal :header="t('dashboard.configurator.title')" class="configurator-modal w-[95vw] sm:w-[90vw] md:w-[40rem]" :dismissableMask="true" @hide="$emit('close')">
        <template #header>
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                    <i class="pi pi-cog text-lg text-white"></i>
                </div>
                <div>
                    <h2 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 m-0">{{ t('dashboard.configurator.title') }}</h2>
                    <p class="text-xs text-gray-500 dark:text-gray-400 m-0 hidden sm:block">Manage your tracked assets</p>
                </div>
            </div>
        </template>

        <div class="p-3 sm:p-4 space-y-5 sm:space-y-6">
            <!-- Usage meter -->
            <div class="p-3 sm:p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('dashboard.configurator.modules_used') }}</span>
                    <span class="font-bold text-indigo-600 dark:text-indigo-400">{{ currentModules.length }} / {{ moduleLimit }}</span>
                </div>
                <div class="h-2.5 bg-white/60 dark:bg-gray-800/60 rounded-full overflow-hidden shadow-inner">
                    <div class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500 relative"
                         :style="{ width: (currentModules.length / moduleLimit) * 100 + '%' }">
                        <div class="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                </div>
            </div>

            <!-- Current modules -->
            <div>
                <h3 class="font-semibold mb-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <i class="pi pi-list text-indigo-500" style="font-size: 12px;"></i>
                    {{ t('dashboard.configurator.current_modules') }}
                    <span v-if="localModules.length > 1" class="text-xs font-normal text-gray-400 ml-auto">
                        <i class="pi pi-arrows-v mr-1" style="font-size: 10px;"></i>
                        {{ t('dashboard.configurator.drag_to_reorder', 'Drag to reorder') }}
                    </span>
                </h3>
                <div v-if="localModules.length > 0" ref="scrollContainer" class="module-list-container max-h-72 overflow-y-auto">
                    <draggable 
                        v-model="localModules" 
                        item-key="id"
                        ghost-class="ghost-card"
                        fallback-class="drag-fallback-hidden"
                        :animation="200"
                        :forceFallback="true"
                        :scroll="false"
                        @start="onDragStart"
                        @end="onDragEnd"
                        tag="div"
                        class="space-y-2 pr-1"
                    >
                        <template #item="{ element: module, index }">
                            <div class="module-item flex items-center justify-between p-3 rounded-xl group cursor-grab active:cursor-grabbing">
                                <!-- Drag indicator -->
                                <div class="p-1 -ml-1 mr-2 text-gray-300 dark:text-gray-600 flex flex-col gap-0.5">
                                    <span class="w-4 h-0.5 bg-current rounded-full"></span>
                                    <span class="w-4 h-0.5 bg-current rounded-full"></span>
                                    <span class="w-4 h-0.5 bg-current rounded-full"></span>
                                </div>
                                <div class="flex items-center gap-3 flex-1 min-w-0">
                                    <div class="w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                                         :class="module.asset_type === 'crypto' ? 'from-amber-500 to-orange-500' : module.asset_type === 'etf' ? 'from-teal-500 to-cyan-500' : 'from-indigo-500 to-purple-500'">
                                        {{ getDisplaySymbol(module.asset_symbol).slice(0, 2) }}
                                    </div>
                                    <div class="flex flex-col min-w-0">
                                        <span class="font-semibold text-sm text-gray-900 dark:text-white">{{ getDisplaySymbol(module.asset_symbol) }}</span>
                                        <span class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ module.name }}</span>
                                    </div>
                                </div>
                                <Button icon="pi pi-trash" severity="danger" text rounded size="small" 
                                        class="opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0"
                                        @click="handleRemoveModule(module)" />
                            </div>
                        </template>
                    </draggable>
                </div>
                <div v-else class="text-center p-6 bg-gray-50 dark:bg-gray-800/30 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700">
                    <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <i class="pi pi-inbox text-xl text-gray-400"></i>
                    </div>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('dashboard.configurator.no_modules_added') }}</p>
                </div>
            </div>
            
            <!-- Add new module -->
            <div class="border-t border-gray-200 dark:border-gray-700 pt-5 sm:pt-6">
                <h3 class="font-semibold mb-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <i class="pi pi-plus-circle text-indigo-500" style="font-size: 12px;"></i>
                    {{ t('dashboard.configurator.add_new_module') }}
                </h3>
                <div v-if="canAddMore" class="flex flex-col gap-3">
                    <div class="flex flex-col sm:flex-row gap-2">
                        <Dropdown v-model="newAssetType" :options="assetTypes" optionLabel="name" placeholder="Type" 
                                  class="w-full sm:w-[120px] asset-dropdown" />
                        
                        <AutoComplete 
                            v-model="selectedAsset" 
                            :suggestions="searchResults" 
                            @complete="searchAssets" 
                            optionLabel="name" 
                            :placeholder="t('dashboard.configurator.search_placeholder')" 
                            class="flex-grow asset-search"
                        >
                            <template #option="slotProps">
                                <div class="flex items-center justify-between w-full py-1">
                                    <div class="flex-1 overflow-hidden">
                                        <div class="font-bold text-sm truncate">{{ slotProps.option.displaySymbol || slotProps.option.symbol }}</div>
                                        <div class="text-xs text-gray-500 truncate">{{ slotProps.option.name }}</div>
                                    </div>
                                    <span class="text-[10px] px-2 py-0.5 rounded-full ml-2 flex-shrink-0"
                                          :class="slotProps.option.type === 'crypto' 
                                              ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' 
                                              : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400'">
                                        {{ slotProps.option.type === 'crypto' ? 'Crypto' : slotProps.option.region }}
                                    </span>
                                </div>
                            </template>
                        </AutoComplete>
                    </div>
                    
                    <Button @click="handleAddModule" :disabled="!selectedAsset || typeof selectedAsset !== 'object'"
                            class="w-full sm:w-auto add-module-btn">
                        <i class="pi pi-plus mr-2"></i>
                        {{ t('dashboard.configurator.add_button') }}
                    </Button>
                    
                    <div v-if="searchError" class="mt-1">
                        <Message severity="error" :closable="false" class="text-sm">{{ searchError }}</Message>
                    </div>
                </div>
                <div v-else class="text-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-800/30">
                    <div class="w-10 h-10 mx-auto mb-2 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
                        <i class="pi pi-exclamation-triangle text-amber-600 dark:text-amber-400"></i>
                    </div>
                    <p class="text-sm text-amber-700 dark:text-amber-300 font-medium">{{ t('dashboard.configurator.limit_reached') }}</p>
                    <p class="text-xs text-amber-600 dark:text-amber-400 mt-1">Upgrade to track more assets</p>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<style scoped>
.module-item {
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.15s ease;
    user-select: none;
    -webkit-user-select: none;
}

.module-item:hover {
    background: rgba(255, 255, 255, 0.9);
    border-color: rgba(99, 102, 241, 0.2);
}

/* Ghost = the placeholder showing where item will drop */
.ghost-card {
    opacity: 1 !important;
    background: rgba(99, 102, 241, 0.05) !important;
    border: 2px dashed rgba(99, 102, 241, 0.5) !important;
    border-radius: 0.75rem !important;
}

/* Show content but faded */
.ghost-card > * {
    opacity: 0.4 !important;
}

/* Hide the drag indicator in ghost */
.ghost-card .flex-col.gap-0\.5 {
    opacity: 0 !important;
}

/* Hide the dragged clone completely - only show the ghost placeholder */
.sortable-fallback {
    opacity: 0 !important;
    position: fixed !important;
    pointer-events: none !important;
}
</style>

<style>
/* Global: Hide fallback clone (appended to body on touch devices) */
.drag-fallback-hidden {
    opacity: 0 !important;
    pointer-events: none !important;
}

.app-dark .module-item {
    background: rgba(31, 41, 55, 0.6);
    border-color: rgba(255, 255, 255, 0.05);
}

.app-dark .module-item:hover {
    background: rgba(31, 41, 55, 0.9);
    border-color: rgba(99, 102, 241, 0.3);
}

.app-dark .ghost-card {
    background: rgba(99, 102, 241, 0.1) !important;
    border-color: rgba(99, 102, 241, 0.6) !important;
}

.configurator-modal .p-dialog-content {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
}

.app-dark .configurator-modal .p-dialog-content {
    background: rgba(17, 24, 39, 0.95);
}

.configurator-modal .p-dialog-header {
    background: transparent;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.app-dark .configurator-modal .p-dialog-header {
    border-bottom-color: rgba(255, 255, 255, 0.05);
}

.add-module-btn {
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%) !important;
    border: none !important;
    font-weight: 600;
    transition: all 0.3s ease !important;
}

.add-module-btn:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px -6px rgba(99, 102, 241, 0.5);
}

.add-module-btn:disabled {
    opacity: 0.5;
    background: #9ca3af !important;
}
</style>
