<script setup>
import { ref, defineProps, watch } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import AutoComplete from 'primevue/autocomplete';
import Dropdown from 'primevue/dropdown';

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

watch(() => props.visible, (newValue) => {
    isVisible.value = newValue;
});

const searchAssets = async (event) => {
    if (!isVisible.value) {
        searchResults.value = [];
        return;
    }
    if (!event.query.trim().length) {
        searchResults.value = [];
        return;
    }
    try {
        const response = await fetch(`/api/search-assets?query=${event.query}&type=${newAssetType.value.code}`);
        const data = await response.json();
        searchResults.value = data;
    } catch (error) {
        console.error("Error searching assets:", error);
        searchResults.value = [];
    }
};

const handleAddModule = () => {
    if (!selectedAsset.value || typeof selectedAsset.value !== 'object') {
        return; 
    }
    
    emit('addModule', {
        asset_type: newAssetType.value.code,
        asset_symbol: selectedAsset.value.symbol,
    });

    selectedAsset.value = null;
};

const canAddMore = () => {
    return props.currentModules.length < props.moduleLimit;
};
</script>

<template>
    <Dialog v-model:visible="isVisible" modal header="Module Configurator" class="w-[90vw] md:w-[40rem]" :dismissableMask="true" @hide="$emit('close')">
        <template #header>
            <div class="flex items-center gap-3">
                <i class="pi pi-cog text-2xl text-primary"></i>
                <div>
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 m-0">Module Configurator</h2>
                </div>
            </div>
        </template>

        <div class="p-4 space-y-6">
            <div>
                <div class="flex justify-between items-center mb-2">
                    <span class="font-semibold text-gray-700 dark:text-gray-300">Modules Used</span>
                    <span class="font-bold text-primary">{{ currentModules.length }} / {{ moduleLimit }}</span>
                </div>
                <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div class="h-full bg-primary rounded-full transition-all duration-500"
                         :style="{ width: (currentModules.length / moduleLimit) * 100 + '%' }">
                    </div>
                </div>
            </div>

            <div>
                <h3 class="font-semibold mb-2 text-base sm:text-xl text-gray-700 dark:text-gray-300">Current Modules</h3>
                <div v-if="currentModules.length > 0" class="space-y-2">
                    <div v-for="module in currentModules" :key="module.id"
                         class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span class="font-semibold">{{ module.asset_symbol }}</span>
                        <Button icon="pi pi-trash" severity="danger" text rounded @click="$emit('removeModule', module.id)" />
                    </div>
                </div>
                <div v-else class="text-center text-gray-500 p-4">
                    You haven't added any modules yet.
                </div>
            </div>
            
            <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 class="font-semibold mb-2 text-base sm:text-xl text-gray-700 dark:text-gray-300">Add New Module</h3>
                <div v-if="canAddMore()" class="flex gap-2">
                    <Dropdown v-model="newAssetType" :options="assetTypes" optionLabel="name" placeholder="Type" class="w-[120px]" />
                    
                    <AutoComplete 
                        v-model="selectedAsset" 
                        :suggestions="searchResults" 
                        @complete="searchAssets" 
                        optionLabel="name" 
                        placeholder="Search for a stock..." 
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
                        <span class="hidden sm:inline ml-2">Add</span>
                    </Button>
                </div>
                <div v-else class="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <p class="text-yellow-700 dark:text-yellow-300">You've reached your module limit. Upgrade your plan to add more.</p>
                </div>
            </div>
        </div>
    </Dialog>
</template>