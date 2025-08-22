<script setup>
import { ref, computed, onMounted } from 'vue';
import { useUser } from '@/composables/useUser';
import { supabase } from '@/supabase';
import Button from 'primevue/button';
import DashboardModuleCard from '@/components/dashboard/DashboardModuleCard.vue';
import DashboardAddModuleCard from '@/components/dashboard/DashboardAddModuleCard.vue';
import ModuleConfiguratorModal from '@/components/dashboard/ModuleConfiguratorModal.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const { profile } = useUser();

const userModules = ref([]);
const isModalVisible = ref(false);

const moduleLimit = computed(() => {
    if (profile.value?.subscription_tier === 'professional') return 9;
    if (profile.value?.subscription_tier === 'advanced') return 6;
    return 3;
});

const canAddModule = computed(() => userModules.value.length < moduleLimit.value);

// This helper function now only adds placeholder data for metrics we don't have yet,
// like price and sentiment. The core asset info comes directly from the database.
const addPlaceholderMetrics = (module) => {
    return {
        ...module,
        price: (Math.random() * 1000).toFixed(2),
        change: (Math.random() * 5 - 2.5).toFixed(2),
        simpleChart: '0,30 10,25 20,27 30,22 40,18 50,20 60,15 70,12 80,10 90,8 100,5',
        sentiment: Math.floor(Math.random() * 100),
        insight: 'This is a placeholder AI insight for the module.'
    };
};

// --- REFACTORED FUNCTION ---
// This function now fetches the user's modules and JOINS them with the assets table
// to get the real symbol, name, and region for each module.
const fetchModules = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data, error } = await supabase
        .from('user_modules')
        // This is the key change: 'assets(*)' tells Supabase to fetch all
        // related data from the 'assets' table for each user module.
        .select('id, user_id, assets(*)')
        .eq('user_id', user.id);

    if (error) {
        console.error('Error fetching modules:', error);
    } else {
        // We now map over the results, shaping them into the format the component expects.
        userModules.value = data.map(module => addPlaceholderMetrics({
            id: module.id, // This is the user_modules ID, crucial for deleting
            asset_symbol: module.assets.symbol,
            name: module.assets.name,
            region: module.assets.exchange
        }));
    }
};

// --- UPDATED FUNCTION ---
// This function now correctly handles the data returned by our RPC call.
const handleModuleAdded = (newModuleData) => {
    if (newModuleData) {
        // The RPC returns { id, asset_symbol, name, region }
        const newModule = addPlaceholderMetrics(newModuleData);
        userModules.value.push(newModule);
        isModalVisible.value = false; // Close the modal on success
    }
};

// --- CORRECTED FUNCTION ---
// This function now correctly uses the module's unique ID to delete.
const handleRemoveModule = async (moduleToRemove) => {
    // The moduleToRemove object now has the correct `id` from the `user_modules` table.
    const { error } = await supabase
        .from('user_modules')
        .delete()
        .eq('id', moduleToRemove.id);

    if (error) {
        console.error('Error removing module:', error);
    } else {
        userModules.value = userModules.value.filter(m => m.id !== moduleToRemove.id);
    }
};

onMounted(fetchModules);
</script>

<template>
    <div class="max-w-7xl mx-auto space-y-8">
        <div>
            <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
                {{ t('dashboard.welcome', { name: profile?.first_name || 'User' }) }}
            </h1>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
                {{ t('dashboard.subtitle') }}
            </p>
        </div>
        
        <div>
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">{{ t('dashboard.your_modules') }}</h2>
                <Button :label="t('dashboard.module_configurator')" icon="pi pi-cog" severity="secondary" outlined @click="isModalVisible = true" />
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <DashboardModuleCard v-for="module in userModules" :key="module.id" :module="module" />
                <DashboardAddModuleCard v-if="canAddModule" @click="isModalVisible = true" />
            </div>

            <div v-if="userModules.length === 0 && canAddModule" class="text-center p-8">
                <p class="text-gray-500">{{ t('dashboard.no_modules') }}</p>
            </div>
        </div>

        <div v-if="profile?.subscription_tier === 'advanced' || profile?.subscription_tier === 'professional'">
             <div class="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg border border-black/5 dark:border-white/10">
                <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">{{ t('dashboard.correlation_insights') }}</h2>
                <p class="text-gray-500">
                    {{ t('dashboard.correlation_placeholder') }}
                </p>
            </div>
        </div>

        <div v-if="profile?.subscription_tier === 'essential'">
            <div class="p-6 bg-violet-100/90 dark:bg-violet-900/30 backdrop-blur-md rounded-2xl flex items-center justify-between">
                <div>
                    <h3 class="font-bold text-violet-800 dark:text-violet-200">{{ t('dashboard.unlock_title') }}</h3>
                    <p class="text-violet-700 dark:text-violet-300">{{ t('dashboard.unlock_subtitle') }}</p>
                </div>
                <Button :label="t('dashboard.upgrade_button')" severity="primary" />
            </div>
        </div>

        <ModuleConfiguratorModal 
            :visible="isModalVisible" 
            :current-modules="userModules" 
            :module-limit="moduleLimit" 
            @close="isModalVisible = false"
            @add-module="handleModuleAdded"
            @remove-module="handleRemoveModule"
        />
    </div>
</template>