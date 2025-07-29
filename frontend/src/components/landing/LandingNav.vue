<script setup>
import { ref, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';

// --- Core Functionality ---
const router = useRouter();
const { t, locale } = useI18n(); // For translations

// --- Dark Mode Logic ---
const isDark = ref(false);
const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    if (isDark.value) {
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

// --- General Functions ---
const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

// --- Lifecycle Hook ---
onMounted(() => {
    // Initialize Dark Mode
    const savedTheme = localStorage.getItem('app-dark-mode');
    if (savedTheme !== null) {
        isDark.value = savedTheme === 'true';
    } else {
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    if(isDark.value) {
        document.documentElement.classList.add('app-dark');
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (localStorage.getItem('app-dark-mode') === null) {
            isDark.value = e.matches;
            if (e.matches) document.documentElement.classList.add('app-dark');
            else document.documentElement.classList.remove('app-dark');
        }
    });

    // Initialize Language
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = languages.value.find(lang => lang.code === browserLang) || languages.value[0];
    selectedLanguage.value = defaultLang;
    locale.value = defaultLang.code;
});

// Watch for language changes
watch(selectedLanguage, (newLang) => {
    if (newLang) {
        locale.value = newLang.code;
    }
});
</script>

<template>
    <div class="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-md px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between">
        <div class="flex items-center">
            <i class="pi pi-chart-line text-primary text-3xl mr-2"></i>
            <span class="text-gray-900 dark:text-gray-100 font-bold text-2xl">Clear Cut Markets</span>
        </div>
        <div class="flex gap-3 items-center">
            <Button :label="t('nav.features')" class="p-button-text" @click="scrollToSection('features')" />
            <Button :label="t('nav.pricing')" class="p-button-text" @click="scrollToSection('pricing')" />

            <Dropdown v-model="selectedLanguage" :options="languages" optionLabel="name" class="p-button-text p-button-sm w-auto">
                 <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex items-center gap-2">
                        <i class="pi pi-globe"></i>
                        <div>{{ slotProps.value.code.toUpperCase() }}</div>
                    </div>
                </template>
                <template #option="slotProps">
                    <div class="flex items-center">
                        <div>{{ slotProps.option.name }}</div>
                    </div>
                </template>
            </Dropdown>
            
            <Button
                :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
                class="p-button-rounded p-button-text"
                @click="toggleDarkMode"
                v-tooltip.bottom="isDark ? 'Light Mode' : 'Dark Mode'"
            />
            
            <Button :label="t('nav.login')" class="p-button-outlined" @click="$router.push('/auth/login')" />
        </div>
    </div>
</template>