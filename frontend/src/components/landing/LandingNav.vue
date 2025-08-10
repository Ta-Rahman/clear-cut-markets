<script setup>
import { ref, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import Sidebar from 'primevue/sidebar';

const router = useRouter();
const { t, locale } = useI18n();

const sidebarVisible = ref(false);
const isDark = ref(false);

// This function remains the same. It toggles the state and saves the user's preference.
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

const languages = ref([
    { name: 'English', code: 'en' },
    { name: 'Deutsch', code: 'de' }
]);
const selectedLanguage = ref();

const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    sidebarVisible.value = false;
};

onMounted(() => {
    // FIX: The logic is now much simpler. It just checks the current state
    // that was set by App.vue to correctly display the button icon.
    isDark.value = document.documentElement.classList.contains('app-dark');

    // Language initialization remains the same
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = languages.value.find(lang => lang.code === browserLang) || languages.value[0];
    selectedLanguage.value = defaultLang;
    locale.value = defaultLang.code;
});

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

        <div class="hidden md:flex gap-3 items-center">
            <Button :label="t('nav.features')" class="p-button-text" @click="scrollToSection('features')" />
            <Button :label="t('nav.pricing')" class="p-button-text" @click="scrollToSection('pricing')" />
            <Button :label="t('nav.login')" class="p-button-outlined" @click="$router.push('/auth/login')" />
        </div>

        <div class="flex items-center gap-2">
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
            
            <Button :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'" class="p-button-rounded p-button-text" @click="toggleDarkMode" v-tooltip.bottom="isDark ? 'Light Mode' : 'Dark Mode'" />
            
            <div class="md:hidden">
                <Button icon="pi pi-bars" class="p-button-text" @click="sidebarVisible = true" />
            </div>
        </div>

        <Sidebar v-model:visible="sidebarVisible" position="right">
            <template #header>
                <h3 class="font-bold">Menu</h3>
            </template>
            <div class="flex flex-col gap-4 p-4">
                <Button :label="t('nav.features')" class="p-button-text" @click="scrollToSection('features')" />
                <Button :label="t('nav.pricing')" class="p-button-text" @click="scrollToSection('pricing')" />
                <div class="border-t pt-4">
                     <Button :label="t('nav.login')" class="p-button-outlined w-full" @click="$router.push('/auth/login')" />
                </div>
            </div>
        </Sidebar>
    </div>
</template>