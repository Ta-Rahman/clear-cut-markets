<script setup>
import { ref, computed } from 'vue';
import { useUser } from '@/composables/useUser';
import Button from 'primevue/button';
import DashboardModuleCard from '@/components/dashboard/DashboardModuleCard.vue';
import DashboardAddModuleCard from '@/components/dashboard/DashboardAddModuleCard.vue';

const { profile } = useUser();

const userModules = ref([
    {
        symbol: 'TSLA', name: 'Tesla Inc.', price: '238.45', change: 3.8,
        simpleChart: '0,25 10,20 20,18 30,15 40,12 50,10 60,8 70,6 80,5 90,3 100,2',
        sentiment: 85, insight: 'Q4 delivery beats driving bullish sentiment. China demand remains strong.'
    },
    {
        symbol: 'BTC', name: 'Bitcoin', price: '43,250', change: -1.2,
        simpleChart: '0,5 10,8 20,10 30,15 40,12 50,18 60,20 70,25 80,23 90,28 100,30',
        sentiment: 45, insight: 'Key support at $42,000. Watch for breakout above $45,000 resistance.'
    }
]);

const moduleLimit = computed(() => {
    if (profile.value?.subscription_tier === 'professional') return 9;
    if (profile.value?.subscription_tier === 'advanced') return 6;
    return 3;
});

const canAddModule = computed(() => userModules.value.length < moduleLimit.value);

</script>

<template>
    <div class="space-y-8">
        <div>
            <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Welcome, {{ profile?.first_name || 'User' }}
            </h1>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
                Here is your investment dashboard overview.
            </p>
        </div>
        
        <div>
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">Your Modules</h2>
                <Button label="Module Configurator" icon="pi pi-cog" severity="secondary" outlined />
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <DashboardModuleCard v-for="module in userModules" :key="module.symbol" :module="module" />
                
                <DashboardAddModuleCard v-if="canAddModule" />
            </div>
            
            <div v-if="userModules.length === 0" class="text-center p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl">
                <p class="text-gray-500">You haven't added any modules yet.</p>
            </div>
        </div>

        <div v-if="profile?.subscription_tier === 'advanced' || profile?.subscription_tier === 'professional'">
             <div class="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg border border-black/5 dark:border-white/10">
                <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Cross-Investment Correlation Insights</h2>
                <p class="text-gray-500">
                    Your AI-powered correlation insights will appear here.
                </p>
            </div>
        </div>

        <div v-if="profile?.subscription_tier === 'essential'">
            <div class="p-6 bg-violet-100/90 dark:bg-violet-900/30 backdrop-blur-md rounded-2xl flex items-center justify-between">
                <div>
                    <h3 class="font-bold text-violet-800 dark:text-violet-200">Unlock a Powerful Edge</h3>
                    <p class="text-violet-700 dark:text-violet-300">Upgrade to the Advanced plan to get Cross-Investment Correlation Alerts.</p>
                </div>
                <Button label="Upgrade Now" severity="primary" />
            </div>
        </div>
    </div>
</template>