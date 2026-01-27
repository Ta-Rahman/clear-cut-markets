<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { supabase } from '@/supabase';
import Menu from 'primevue/menu';
import Sidebar from 'primevue/sidebar';
import { useUser } from '@/composables/useUser';

const router = useRouter();
const { t, locale } = useI18n();
const { profile } = useUser();

// --- State for Mobile Sidebar ---
const sidebarVisible = ref(false);

// --- User Profile Menu Logic ---
const menu = ref();
const items = computed(() => [
    {
        label: t('topbar.settings'),
        icon: 'pi pi-cog',
        command: () => { router.push('/app/settings'); }
    },
    {
        separator: true
    },
    {
        label: t('topbar.logout'),
        icon: 'pi pi-sign-out',
        command: async () => {
            await supabase.auth.signOut();
            router.push('/');
        }
    }
]);
const toggleMenu = (event) => {
    menu.value.toggle(event);
};

// --- Dark Mode Logic ---
const isDark = ref(false);
const toggleDarkMode = () => {
    const newValue = !isDark.value;
    isDark.value = newValue;
    if (newValue) {
        document.documentElement.classList.add('app-dark');
        localStorage.setItem('app-dark-mode', 'true');
    } else {
        document.documentElement.classList.remove('app-dark');
        localStorage.setItem('app-dark-mode', 'false');
    }
};

// --- Language Switcher Logic ---
const languages = [
    { name: 'English', code: 'en', flag: '🇺🇸' },
    { name: 'Deutsch', code: 'de', flag: '🇩🇪' }
];
const setLanguage = (langCode) => {
    locale.value = langCode;
    localStorage.setItem('user-locale', langCode);
};

// Handle logout
const handleLogout = async () => {
    sidebarVisible.value = false;
    await supabase.auth.signOut();
    router.push('/');
};

// --- Lifecycle Hook ---
onMounted(() => {
    isDark.value = document.documentElement.classList.contains('app-dark');
});
</script>

<template>
    <header class="topbar-glass sticky top-0 z-50 px-4 py-3">
        <div class="max-w-[1600px] mx-auto flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center gap-3 cursor-pointer" @click="router.push('/app/dashboard')">
                <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <i class="pi pi-chart-line text-white text-lg"></i>
                </div>
                <span class="hidden sm:block text-lg font-bold text-gray-900 dark:text-white">Clear Cut</span>
            </div>

            <!-- Desktop Actions -->
            <div class="hidden md:flex items-center gap-3">
                <!-- Dark mode toggle -->
                <button 
                    @click="toggleDarkMode" 
                    class="w-10 h-10 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all"
                >
                    <i :class="['pi text-lg', isDark ? 'pi-sun' : 'pi-moon']"></i>
                </button>
                
                <!-- User menu -->
                <button 
                    @click="toggleMenu" 
                    class="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all"
                >
                    <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                        <i class="pi pi-user text-white text-sm"></i>
                    </div>
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ profile?.first_name || 'User' }}</span>
                    <i class="pi pi-chevron-down text-xs text-gray-400"></i>
                </button>
                <Menu ref="menu" :model="items" :popup="true" class="!mt-2" />
            </div>

            <!-- Mobile hamburger -->
            <button 
                @click="sidebarVisible = true"
                class="md:hidden w-10 h-10 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center"
            >
                <i class="pi pi-bars text-lg text-gray-700 dark:text-gray-300"></i>
            </button>
        </div>
    </header>

    <!-- Mobile Sidebar -->
    <Sidebar 
        v-model:visible="sidebarVisible" 
        position="right" 
        :showCloseIcon="false"
        class="!w-full sm:!w-80 !bg-white/95 dark:!bg-gray-900/95 !backdrop-blur-xl !border-l !border-gray-200/50 dark:!border-gray-700/50"
    >
        <template #header>
            <div class="flex items-center justify-between w-full">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                        <i class="pi pi-user text-white"></i>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-900 dark:text-white">{{ profile?.first_name || 'User' }}</p>
                        <p class="text-xs text-gray-500">{{ profile?.subscription_tier || 'Essential' }} Plan</p>
                    </div>
                </div>
                <button 
                    @click="sidebarVisible = false"
                    class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                    <i class="pi pi-times text-gray-500"></i>
                </button>
            </div>
        </template>

        <div class="flex flex-col h-full">
            <!-- Navigation -->
            <div class="flex-1 py-3">
                <button 
                    @click="router.push('/app/dashboard'); sidebarVisible = false"
                    class="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    <div class="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                        <i class="pi pi-th-large text-sm text-indigo-600 dark:text-indigo-400"></i>
                    </div>
                    <span class="font-medium text-gray-900 dark:text-white">{{ t('topbar.dashboard') }}</span>
                </button>

                <button 
                    @click="router.push('/app/settings'); sidebarVisible = false"
                    class="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    <div class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <i class="pi pi-cog text-sm text-gray-600 dark:text-gray-400"></i>
                    </div>
                    <span class="font-medium text-gray-900 dark:text-white">{{ t('topbar.settings') }}</span>
                </button>
            </div>

            <!-- Settings Section -->
            <div class="border-t border-gray-200 dark:border-gray-700 py-3">
                <!-- Theme Toggle -->
                <div class="px-4 mb-3">
                    <div class="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                        <div class="flex items-center gap-2">
                            <i :class="['pi', isDark ? 'pi-moon text-indigo-500' : 'pi-sun text-amber-500']" style="font-size: 14px;"></i>
                            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('topbar.theme') }}</span>
                        </div>
                        <button 
                            @click="toggleDarkMode"
                            class="relative w-10 h-5 rounded-full transition-colors duration-200"
                            :class="isDark ? 'bg-indigo-600' : 'bg-gray-300'"
                        >
                            <span 
                                class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-200"
                                :class="{ 'translate-x-5': isDark }"
                            ></span>
                        </button>
                    </div>
                </div>

                <!-- Language Selector -->
                <div class="px-4">
                    <div class="flex gap-2">
                        <button 
                            v-for="lang in languages" 
                            :key="lang.code"
                            @click="setLanguage(lang.code)"
                            class="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-lg border transition-all text-sm"
                            :class="locale === lang.code 
                                ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300' 
                                : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400'"
                        >
                            <span>{{ lang.flag }}</span>
                            <span class="font-medium">{{ lang.code.toUpperCase() }}</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Logout -->
            <div class="border-t border-gray-200 dark:border-gray-700 p-3">
                <button 
                    @click="handleLogout"
                    class="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors font-medium text-sm"
                >
                    <i class="pi pi-sign-out" style="font-size: 14px;"></i>
                    {{ t('topbar.logout') }}
                </button>
            </div>
        </div>
    </Sidebar>
</template>

<style scoped>
.topbar-glass {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
</style>

<style>
.app-dark .topbar-glass {
    background: rgba(17, 24, 39, 0.8);
    border-bottom-color: rgba(255, 255, 255, 0.1);
}
</style>