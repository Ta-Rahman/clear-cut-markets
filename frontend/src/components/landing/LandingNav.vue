<template>
    <!-- Navigation Bar -->
    <div class="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-md px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between">
        <div class="flex items-center">
            <i class="pi pi-chart-line text-primary text-3xl mr-2"></i>
            <span class="text-gray-900 dark:text-gray-100 font-bold text-2xl">Clear Cut Markets</span>
        </div>
        <div class="flex gap-3 items-center">
            <Button label="Features" class="p-button-text" @click="scrollToSection('features')" />
            <Button label="Pricing" class="p-button-text" @click="scrollToSection('pricing')" />
            
            <!-- Dark Mode Toggle -->
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

<script setup>
import { ref, computed, onMounted } from 'vue';
import Button from 'primevue/button';
import { useRouter } from 'vue-router';

const router = useRouter();

// Check if we're in dark mode by checking for the app-dark class
const isDark = computed(() => {
    return document.documentElement.classList.contains('app-dark');
});

const toggleDarkMode = () => {
    const element = document.documentElement;
    
    if (element.classList.contains('app-dark')) {
        element.classList.remove('app-dark');
        localStorage.setItem('app-dark-mode', 'false');
    } else {
        element.classList.add('app-dark');
        localStorage.setItem('app-dark-mode', 'true');
    }
};

const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

// Initialize theme on mount
onMounted(() => {
    const savedTheme = localStorage.getItem('app-dark-mode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply theme based on saved preference or system preference
    if (savedTheme !== null) {
        // User has a saved preference
        if (savedTheme === 'true') {
            document.documentElement.classList.add('app-dark');
        } else {
            document.documentElement.classList.remove('app-dark');
        }
    } else if (prefersDark) {
        // No saved preference, use system preference
        document.documentElement.classList.add('app-dark');
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only apply if user hasn't set a manual preference
        if (localStorage.getItem('app-dark-mode') === null) {
            if (e.matches) {
                document.documentElement.classList.add('app-dark');
            } else {
                document.documentElement.classList.remove('app-dark');
            }
        }
    });
});
</script>

<style scoped>
/* Navigation-specific styles if needed */
</style>