<script setup>
import { ref, watch, onMounted, computed } from 'vue'; // Import 'computed'
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { supabase } from '@/supabase';
import Menu from 'primevue/menu';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';

const router = useRouter();
const { t, locale } = useI18n();

// --- State for Mobile Sidebar ---
const sidebarVisible = ref(false);

// --- User Profile Menu Logic ---
const menu = ref();
// This is now a computed property, so it will update when the language (locale) changes
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
const languages = ref([
    { name: 'English', code: 'en' },
    { name: 'Deutsch', code: 'de' }
]);
const selectedLanguage = ref();

watch(selectedLanguage, (newLang) => {
    if (newLang) {
        locale.value = newLang.code;
        localStorage.setItem('user-locale', newLang.code);
    }
});

// --- Lifecycle Hook ---
onMounted(() => {
    isDark.value = document.documentElement.classList.contains('app-dark');
    const currentLangCode = locale.value;
    selectedLanguage.value = languages.value.find(lang => lang.code === currentLangCode) || languages.value[0];
});
</script>

<template>
    <header class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md p-4 flex items-center justify-between sticky top-0 z-50">
        <div class="flex items-center gap-2 cursor-pointer" @click="router.push('/app/dashboard')">
            <img src="/layout/images/logo-dark.svg" alt="Logo" class="h-8" />
            <span class="text-xl font-semibold text-gray-800 dark:text-gray-100">Clear Cut Markets</span>
        </div>

        <div class="flex items-center gap-2">
            <button @click="toggleMenu" class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                <i class="pi pi-user text-xl"></i>
            </button>
            <Menu ref="menu" :model="items" :popup="true" />

            <Button icon="pi pi-bars" class="p-button-text" @click="sidebarVisible = true" />
        </div>

        <Sidebar v-model:visible="sidebarVisible" position="right" class="w-full sm:w-80">
            <template #header>
                <h3 class="font-bold">{{ t('topbar.display_options') }}</h3>
            </template>
            <div class="flex flex-col gap-4 p-4">
                <div class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <label class="font-semibold text-sm mb-2 block">{{ t('topbar.theme') }}</label>
                    <Button @click="toggleDarkMode" class="w-full text-left justify-start" :label="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'" :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'" />
                </div>
                <div class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <label for="language-select-sidebar" class="font-semibold text-sm mb-2 block">{{ t('topbar.language') }}</label>
                    <Dropdown inputId="language-select-sidebar" v-model="selectedLanguage" :options="languages" optionLabel="name" class="w-full" />
                </div>
            </div>
        </Sidebar>
    </header>
</template>