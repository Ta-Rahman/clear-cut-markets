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

const formattedUserName = computed(() => {
    const name = profile.value?.first_name || 'User';
    return name.charAt(0).toUpperCase() + name.slice(1);
});

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
    <div class="max-w-[1600px] mx-auto space-y-6">
        <!-- Header -->
        <div>
            <h1 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {{ t('dashboard.welcome') }} <span class="text-gradient">{{ formattedUserName }}</span>
            </h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {{ t('dashboard.subtitle') }}
            </p>
        </div>
        
        <!-- Modules Section -->
        <div>
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-bold text-gray-800 dark:text-gray-200">{{ t('dashboard.your_modules') }}</h2>
                <Button 
                    :label="t('dashboard.module_configurator')" 
                    icon="pi pi-cog" 
                    size="small"
                    class="!bg-white/60 dark:!bg-gray-800/60 !backdrop-blur-sm !border-gray-200/50 dark:!border-gray-700/50 !text-gray-700 dark:!text-gray-300 hover:!border-indigo-300 dark:hover:!border-indigo-600" 
                    @click="isConfigModalVisible = true" 
                />
            </div>
            
            <!-- Grid: 2 cols on sm, 3 on md, 4 on lg, 5 on xl -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                <DashboardModuleCard 
                    v-for="(module, index) in modules" 
                    :key="index" 
                    :module="module"
                    @view-details="openDetailModal" 
                />
                <DashboardAddModuleCard v-if="canAddModule" @click="isConfigModalVisible = true" />
            </div>

            <div v-if="modules.length === 0 && canAddModule && !isLoading" class="text-center py-12">
                <div class="w-16 h-16 rounded-2xl bg-gray-100/80 dark:bg-gray-800/80 flex items-center justify-center mx-auto mb-4">
                    <i class="pi pi-th-large text-2xl text-gray-400"></i>
                </div>
                <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm">{{ t('dashboard.no_modules') }}</p>
                <Button 
                    label="Add Your First Module" 
                    icon="pi pi-plus" 
                    size="small"
                    class="!bg-gradient-to-r !from-indigo-600 !to-purple-600 !border-0"
                    @click="isConfigModalVisible = true"
                />
            </div>
        </div>

        <!-- Correlation Insights (Advanced/Pro) -->
        <div v-if="profile?.subscription_tier === 'advanced' || profile?.subscription_tier === 'professional'">
            <div class="info-card p-5">
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                        <i class="pi pi-chart-scatter text-white text-sm"></i>
                    </div>
                    <h2 class="text-base font-bold text-gray-800 dark:text-gray-200">{{ t('dashboard.correlation_insights') }}</h2>
                </div>
                <p class="text-gray-500 dark:text-gray-400 text-sm">
                    {{ t('dashboard.correlation_placeholder') }}
                </p>
            </div>
        </div>

        <!-- Upgrade CTA (Essential tier) -->
        <div v-if="profile?.subscription_tier === 'essential'">
            <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-5">
                <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div class="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                        <h3 class="text-base font-bold text-white mb-0.5">{{ t('dashboard.unlock_title') }}</h3>
                        <p class="text-indigo-100 text-sm">{{ t('dashboard.unlock_subtitle') }}</p>
                    </div>
                    <Button 
                        :label="t('dashboard.upgrade_button')" 
                        size="small"
                        class="!bg-white !text-indigo-600 hover:!bg-indigo-50 !border-0 !font-semibold flex-shrink-0" 
                    />
                </div>
            </div>
        </div>

        <!-- Modals -->
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

<style scoped>
.text-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.info-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 1.25rem;
}
</style>

<style>
.app-dark .info-card {
    background: rgba(17, 24, 39, 0.7);
    border-color: rgba(255, 255, 255, 0.1);
}
</style>
