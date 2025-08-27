<script setup>
import { ref, computed, onMounted } from 'vue';
import { useUser } from '@/composables/useUser';
import { supabase } from '@/supabase';
import Button from 'primevue/button';
import DashboardModuleCard from '@/components/dashboard/DashboardModuleCard.vue';
import DashboardAddModuleCard from '@/components/dashboard/DashboardAddModuleCard.vue';
import ModuleConfiguratorModal from '@/components/dashboard/ModuleConfiguratorModal.vue';
import DashboardDetailModal from '@/components/dashboard/DashboardDetailModal.vue';
import { useI18n } from 'vue-i18n';
import { useModuleManager } from '@/composables/useModuleManager';

const { t } = useI18n();
const { profile } = useUser();

const { modules, isLoading, fetchAllModuleData } = useModuleManager();

const isConfigModalVisible = ref(false);
const isDetailModalVisible = ref(false);
const selectedModuleForDetail = ref(null);

const moduleLimit = computed(() => {
    if (profile.value?.subscription_tier === 'professional') return 9;
    if (profile.value?.subscription_tier === 'advanced') return 6;
    return 3;
});

const canAddModule = computed(() => modules.value.length < moduleLimit.value);

const openDetailModal = (moduleData) => {
    selectedModuleForDetail.value = moduleData;
    isDetailModalVisible.value = true;
};

const addPlaceholderMetrics = (module) => ({
    ...module,
    sentiment: Math.floor(Math.random() * 100),
    insight: 'This is a placeholder AI insight for the module.'
});

const handleModuleAdded = () => {
    fetchAllModuleData(supabase, addPlaceholderMetrics);
    isConfigModalVisible.value = false;
};

const handleRemoveModule = async (moduleToRemove) => {
    const { error } = await supabase.from('user_modules').delete().eq('id', moduleToRemove.id);
    if (error) {
        console.error('Error removing module:', error);
    } else {
        modules.value = modules.value.filter(m => m.id !== moduleToRemove.id);
    }
};

onMounted(() => {
    fetchAllModuleData(supabase, addPlaceholderMetrics);
});
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
                <Button :label="t('dashboard.module_configurator')" icon="pi pi-cog" severity="secondary" outlined @click="isConfigModalVisible = true" />
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <DashboardModuleCard 
                    v-for="(module, index) in modules" 
                    :key="index" 
                    :module="module"
                    @view-details="openDetailModal" 
                />
                <DashboardAddModuleCard v-if="canAddModule" @click="isConfigModalVisible = true" />
            </div>

            <div v-if="modules.length === 0 && canAddModule && !isLoading" class="text-center p-8">
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

        <DashboardDetailModal 
            :visible="isDetailModalVisible" 
            :module="selectedModuleForDetail" 
            @close="isDetailModalVisible = false" 
        />

        <ModuleConfiguratorModal 
            :visible="isConfigModalVisible" 
            :current-modules="modules" 
            :module-limit="moduleLimit" 
            @close="isConfigModalVisible = false"
            @add-module="handleModuleAdded"
            @remove-module="handleRemoveModule"
        />
    </div>
</template>