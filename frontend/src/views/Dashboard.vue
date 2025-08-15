<script setup>
import { ref, computed, onMounted } from 'vue';
import { useUser } from '@/composables/useUser';
import { supabase } from '@/supabase';
import Button from 'primevue/button';
import DashboardModuleCard from '@/components/dashboard/DashboardModuleCard.vue';
import DashboardAddModuleCard from '@/components/dashboard/DashboardAddModuleCard.vue';
import ModuleConfiguratorModal from '@/components/dashboard/ModuleConfiguratorModal.vue';

const { profile } = useUser();

// This will now hold the modules fetched from your database
const userModules = ref([]);
const isModalVisible = ref(false);

const moduleLimit = computed(() => {
    if (profile.value?.subscription_tier === 'professional') return 9;
    if (profile.value?.subscription_tier === 'advanced') return 6;
    return 3;
});

const canAddModule = computed(() => userModules.value.length < moduleLimit.value);

// Function to fetch modules from Supabase
const fetchModules = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data, error } = await supabase
        .from('user_modules')
        .select('*')
        .eq('user_id', user.id);
    
    if (error) {
        console.error('Error fetching modules:', error);
    } else {
        userModules.value = data;
    }
};

// Function to add a new module
const addModule = async (moduleData) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data, error } = await supabase
        .from('user_modules')
        .insert({
            user_id: user.id,
            asset_type: moduleData.asset_type,
            asset_symbol: moduleData.asset_symbol
        })
        .select();
    
    if (error) {
        console.error('Error adding module:', error);
    } else if (data) {
        userModules.value.push(data[0]);
    }
};

// Function to remove a module
const removeModule = async (moduleId) => {
    const { error } = await supabase
        .from('user_modules')
        .delete()
        .eq('id', moduleId);

    if (error) {
        console.error('Error removing module:', error);
    } else {
        userModules.value = userModules.value.filter(m => m.id !== moduleId);
    }
};

// Fetch modules when the component is first loaded
onMounted(fetchModules);

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
                <Button label="Module Configurator" icon="pi pi-cog" severity="secondary" outlined @click="isModalVisible = true" />
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <DashboardModuleCard v-for="module in userModules" :key="module.id" :module="module" />
                <DashboardAddModuleCard v-if="canAddModule" @click="isModalVisible = true" />
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

        <ModuleConfiguratorModal 
            :visible="isModalVisible" 
            :current-modules="userModules" 
            :module-limit="moduleLimit" 
            @close="isModalVisible = false"
            @add-module="addModule"
            @remove-module="removeModule"
        />
    </div>
</template>