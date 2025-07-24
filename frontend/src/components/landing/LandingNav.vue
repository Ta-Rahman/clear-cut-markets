<script setup>
import { ref, onMounted } from 'vue';
import { useScrollAnimation } from '@/composables/useScrollAnimation'; // Restored this line
import { useRouter } from 'vue-router';
import Button from 'primevue/button';

const router = useRouter();
const isDark = ref(false);

// Initialize scroll animations - Restored this line
const { observeElements } = useScrollAnimation();

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

const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

// Initialize theme on mount
onMounted(() => {
    const savedTheme = localStorage.getItem('app-dark-mode');
    if (savedTheme !== null) {
        isDark.value = savedTheme === 'true';
    } else {
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    if(isDark.value) {
        document.documentElement.classList.add('app-dark');
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (localStorage.getItem('app-dark-mode') === null) {
            isDark.value = e.matches;
            if (e.matches) {
                document.documentElement.classList.add('app-dark');
            } else {
                document.documentElement.classList.remove('app-dark');
            }
        }
    });
});
</script>

<template>
    <div class="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-md px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between">
        <div class="flex items-center">
            <i class="pi pi-chart-line text-primary text-3xl mr-2"></i>
            <span class="text-gray-900 dark:text-gray-100 font-bold text-2xl">Clear Cut Markets</span>
        </div>
        <div class="flex gap-3 items-center">
            <Button label="Features" class="p-button-text" @click="scrollToSection('features')" />
            <Button label="Pricing" class="p-button-text" @click="scrollToSection('pricing')" />
            
            <Button 
                :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
                class="p-button-rounded p-button-text"
                @click="toggleDarkMode"
                v-tooltip.bottom="isDark ? 'Light Mode' : 'Dark Mode'"
            />
            
            <Button label="Login" class="p-button-outlined" @click="$router.push('/auth/login')" />
        </div>
    </div>
</template>