<script setup>
import { ref, watch, computed } from 'vue';
import { supabase } from '@/supabase'; // Your Supabase client
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import AutoComplete from 'primevue/autocomplete';
import Dropdown from 'primevue/dropdown';
import { useI18n } from 'vue-i18n';
import Message from 'primevue/message'; // Import the Message component

const { t } = useI18n();

const props = defineProps({
    visible: { type: Boolean, default: false },
    currentModules: { type: Array, default: () => [] },
    moduleLimit: { type: Number, default: 3 }
});

const emit = defineEmits(['close', 'addModule', 'removeModule']);

const isVisible = ref(props.visible);
const selectedAsset = ref(null);
const searchResults = ref([]);
const newAssetType = ref({ name: 'Stock', code: 'stock' });
const assetTypes = ref([
    { name: 'Stock', code: 'stock' },
    { name: 'Crypto', code: 'crypto' },
    { name: 'ETF', code: 'etf' }
]);
const searchError = ref(''); // Ref to hold search error messages

watch(() => props.visible, (newValue) => {
    isVisible.value = newValue;
    if (!newValue) {
        selectedAsset.value = null; // Clear selection when modal closes
        searchError.value = ''; // Clear errors when modal closes
    }
});

const searchAssets = async (event) => {
    if (!isVisible.value || !event.query.trim().length) {
        searchResults.value = [];
        return;
    }
    searchError.value = ''; // Clear previous errors
    try {
        const response = await fetch(`/api/search-assets?query=${event.query}`);
        
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
    <Dialog v-model:visible="isVisible" modal :header="t('dashboard.configurator.title')" class="w-[90vw] md:w-[40rem]" :dismissableMask="true" @hide="$emit('close')">
        <template #header>
            <div class="flex items-center gap-3">
                <i class="pi pi-cog text-2xl text-primary"></i>
                <div>
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 m-0">{{ t('dashboard.configurator.title') }}</h2>
                </div>
            </div>
        </template>

        <div class="p-4 space-y-6">
            <div>
                <div class="flex justify-between items-center mb-2">
                    <span class="font-semibold text-gray-700 dark:text-gray-300">{{ t('dashboard.configurator.modules_used') }}</span>
                    <span class="font-bold text-primary">{{ currentModules.length }} / {{ moduleLimit }}</span>
                </div>
                <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div class="h-full bg-primary rounded-full transition-all duration-500"
                         :style="{ width: (currentModules.length / moduleLimit) * 100 + '%' }">
                    </div>
                </div>
            </div>

            <div>
                <h3 class="font-semibold mb-2 text-base sm:text-xl text-gray-700 dark:text-gray-300">{{ t('dashboard.configurator.current_modules') }}</h3>
                <div v-if="currentModules.length > 0" class="space-y-2 max-h-48 overflow-y-auto">
                    <div v-for="module in currentModules" :key="module.id"
                         class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span class="font-semibold">{{ module.asset_symbol }}</span>
                        <Button icon="pi pi-trash" severity="danger" text rounded @click="handleRemoveModule(module)" />
                    </div>
                </div>
                <div v-else class="text-center text-gray-500 p-4">
                    {{ t('dashboard.configurator.no_modules_added') }}
                </div>
            </div>
            
            <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 class="font-semibold mb-2 text-base sm:text-xl text-gray-700 dark:text-gray-300">{{ t('dashboard.configurator.add_new_module') }}</h3>
                <div v-if="canAddMore" class="flex flex-col gap-2">
                    <div class="flex gap-2">
                        <Dropdown v-model="newAssetType" :options="assetTypes" optionLabel="name" placeholder="Type" class="w-[120px]" />
                        
                        <AutoComplete 
                            v-model="selectedAsset" 
                            :suggestions="searchResults" 
                            @complete="searchAssets" 
                            optionLabel="name" 
                            :placeholder="t('dashboard.configurator.search_placeholder')" 
                            class="flex-grow"
                        >
                            <template #option="slotProps">
                                <div class="flex items-center justify-between w-full">
                                    <div class="flex-1 overflow-hidden">
                                        <div class="font-bold truncate">{{ slotProps.option.symbol }}</div>
                                        <div class="text-sm truncate">{{ slotProps.option.name }}</div>
                                    </div>
                                    <span class="text-xs text-gray-500 ml-4 flex-shrink-0">{{ slotProps.option.region }}</span>
                                </div>
                            </template>
                        </AutoComplete>
                        
                        <Button @click="handleAddModule" :disabled="!selectedAsset || typeof selectedAsset !== 'object'">
                            <i class="pi pi-plus"></i>
                            <span class="hidden sm:inline ml-2">{{ t('dashboard.configurator.add_button') }}</span>
                        </Button>
                    </div>
                    <div v-if="searchError" class="mt-2">
                        <Message severity="error" :closable="false">{{ searchError }}</Message>
                    </div>
                </div>
                <div v-else class="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <p class="text-yellow-700 dark:text-yellow-300">{{ t('dashboard.configurator.limit_reached') }}</p>
                </div>
            </div>
        </div>
    </Dialog>
</template>