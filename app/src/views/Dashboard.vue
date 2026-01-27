<script setup>
import { ref, computed, onMounted } from 'vue';
import { useUser } from '@/composables/useUser';
import { supabase } from '@/supabase';
import Button from 'primevue/button';
import DashboardModuleCard from '@/components/dashboard/DashboardModuleCard.vue';
import DashboardAddModuleCard from '@/components/dashboard/DashboardAddModuleCard.vue';
import ModuleConfiguratorModal from '@/components/dashboard/ModuleConfiguratorModal.vue';
import DashboardDetailModal from '@/components/dashboard/DashboardDetailModal.vue';
import DashboardLoader from '@/components/shared/DashboardLoader.vue';
import { useI18n } from 'vue-i18n';
import { useModuleManager } from '@/composables/useModuleManager';

const { t } = useI18n();
const { profile } = useUser();
const { modules, isLoading, loadingProgress, fetchAllModuleData } = useModuleManager();

const isConfigModalVisible = ref(false);
const isDetailModalVisible = ref(false);
const selectedModuleForDetail = ref(null);
const activeTab = ref('portfolio');
const showLoader = ref(true);

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

const handleReorderModules = (reorderedModules) => {
    // Update local state with new order
    modules.value = reorderedModules;
};

const onLoaderComplete = () => {
    showLoader.value = false;
};

onMounted(() => {
    fetchAllModuleData(supabase, addPlaceholderMetrics);
});
</script>

<template>
    <!-- Loading Screen -->
    <DashboardLoader 
        :isLoading="isLoading" 
        :progress="loadingProgress"
        :minDisplayTime="1200"
        @complete="onLoaderComplete"
    />

    <div class="max-w-[1600px] mx-auto space-y-4 sm:space-y-6">
        <!-- Header -->
        <div class="flex items-center justify-between gap-3 py-2 sm:py-4">
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                {{ t('dashboard.welcome') }} <span class="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">{{ formattedUserName }}</span>
            </h1>
            
            <!-- Module count + config button -->
            <div class="flex items-center gap-2 sm:gap-3">
                <div class="flex items-center gap-0.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                    <i class="pi pi-th-large text-sm text-indigo-500 mr-1.5"></i>
                    <span class="text-base sm:text-lg font-bold text-gray-900 dark:text-white">{{ modules.length }}</span>
                    <span class="text-base sm:text-lg text-gray-400 mx-0.5">/</span>
                    <span class="text-base sm:text-lg text-gray-400">{{ moduleLimit }}</span>
                </div>
                <button 
                    @click="isConfigModalVisible = true"
                    class="flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                >
                    <i class="pi pi-cog text-base sm:text-lg"></i>
                </button>
            </div>
        </div>

        <!-- Dashboard Tabs -->
        <div class="flex items-center gap-1 p-1 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 w-fit">
            <button 
                @click="activeTab = 'portfolio'"
                :class="[
                    'px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all',
                    activeTab === 'portfolio' 
                        ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                ]"
            >
                <i class="pi pi-chart-line mr-1.5"></i>
                Portfolio
            </button>
            <button 
                @click="activeTab = 'news'"
                :class="[
                    'px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5',
                    activeTab === 'news' 
                        ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                ]"
            >
                <i class="pi pi-megaphone mr-1"></i>
                News
                <span class="px-1.5 py-0.5 text-[10px] rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 font-semibold">Soon</span>
            </button>
            <button 
                v-if="profile?.subscription_tier === 'advanced' || profile?.subscription_tier === 'professional'"
                @click="activeTab = 'insights'"
                :class="[
                    'px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5',
                    activeTab === 'insights' 
                        ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                ]"
            >
                <i class="pi pi-sparkles mr-1"></i>
                Insights
                <span class="px-1.5 py-0.5 text-[10px] rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-400 font-semibold">Pro</span>
            </button>
        </div>
        
        <!-- Portfolio Tab Content -->
        <div v-show="activeTab === 'portfolio'">
            <!-- Grid: 2 columns on mobile, scales up -->
            <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
                <DashboardModuleCard 
                    v-for="(module, index) in modules" 
                    :key="index" 
                    :module="module"
                    :isSelected="selectedModuleForDetail?.id === module.id && isDetailModalVisible"
                    @view-details="openDetailModal" 
                />
                <DashboardAddModuleCard v-if="canAddModule" @click="isConfigModalVisible = true" />
            </div>

            <div v-if="modules.length === 0 && canAddModule && !isLoading" class="text-center py-8 sm:py-12">
                <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 flex items-center justify-center mx-auto mb-3">
                    <i class="pi pi-th-large text-xl sm:text-2xl text-indigo-500 dark:text-indigo-400"></i>
                </div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">{{ t('dashboard.no_modules_title') || 'No modules yet' }}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm max-w-xs mx-auto">{{ t('dashboard.no_modules') }}</p>
                <Button 
                    :label="t('dashboard.add_first_module') || 'Add Your First Module'" 
                    icon="pi pi-plus" 
                    class="!bg-gradient-to-r !from-indigo-600 !to-purple-600 !border-0 !shadow-lg !shadow-indigo-500/25"
                    @click="isConfigModalVisible = true"
                />
            </div>
        </div>

        <!-- News Tab Content (Coming Soon) -->
        <div v-show="activeTab === 'news'" class="min-h-[300px]">
            <div class="info-card p-6 sm:p-8 text-center">
                <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center mx-auto mb-4">
                    <i class="pi pi-megaphone text-2xl sm:text-3xl text-amber-600 dark:text-amber-400"></i>
                </div>
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">AI News Intelligence</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-md mx-auto mb-4">
                    Get real-time news alerts filtered by AI that directly impact your tracked assets. No noise, just actionable insights.
                </p>
                <div class="flex flex-wrap items-center justify-center gap-2 mb-6">
                    <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium">Real-time alerts</span>
                    <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium">Sentiment analysis</span>
                    <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium">Source credibility</span>
                </div>
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-medium">
                    <i class="pi pi-clock"></i>
                    Coming Q2 2026
                </div>
            </div>
        </div>

        <!-- Insights Tab Content (Pro Users) -->
        <div v-show="activeTab === 'insights'" class="min-h-[300px]">
            <div class="info-card p-6 sm:p-8 text-center">
                <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 flex items-center justify-center mx-auto mb-4">
                    <i class="pi pi-sparkles text-2xl sm:text-3xl text-violet-600 dark:text-violet-400"></i>
                </div>
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Cross-Asset Correlation Insights</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-md mx-auto mb-4">
                    AI-powered analysis showing how news and events affecting one asset might ripple across your entire portfolio.
                </p>
                <div class="flex flex-wrap items-center justify-center gap-2 mb-6">
                    <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium">Portfolio correlation</span>
                    <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium">Risk assessment</span>
                    <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium">Sector analysis</span>
                </div>
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 text-sm font-medium">
                    <i class="pi pi-clock"></i>
                    Coming Q2 2026
                </div>
            </div>
        </div>

        <!-- Upgrade CTA (Essential tier) - only show on portfolio tab -->
        <div v-if="profile?.subscription_tier === 'essential' && activeTab === 'portfolio'">
            <div class="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-3 sm:p-5">
                <div class="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                
                <div class="relative flex items-center justify-between gap-3">
                    <div class="min-w-0">
                        <h3 class="text-sm sm:text-lg font-bold text-white">{{ t('dashboard.unlock_title') }}</h3>
                        <p class="text-indigo-100 text-xs sm:text-sm truncate">{{ t('dashboard.unlock_subtitle') }}</p>
                    </div>
                    <Button 
                        :label="t('dashboard.upgrade_button')" 
                        size="small"
                        class="!bg-white !text-indigo-600 hover:!bg-indigo-50 !border-0 !font-semibold !text-xs sm:!text-sm flex-shrink-0" 
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
            @reorder-modules="handleReorderModules"
        />
    </div>
</template>

<style scoped>
.text-gradient {
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.animate-gradient {
    animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
    0%, 100% { background-position: 0% center; }
    50% { background-position: 100% center; }
}

.info-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 1rem;
}
</style>

<style>
.app-dark .info-card {
    background: rgba(17, 24, 39, 0.7);
    border-color: rgba(255, 255, 255, 0.1);
}
</style>
