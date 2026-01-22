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
const isScrolled = ref(false);

// Dark Mode Logic
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

// Language Switcher
const languages = ref([
    { name: 'English', code: 'en' },
    { name: 'Deutsch', code: 'de' }
]);
const selectedLanguage = ref();

const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    sidebarVisible.value = false;
};

const handleScroll = () => {
    isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
    isDark.value = document.documentElement.classList.contains('app-dark');
    const currentLangCode = locale.value;
    selectedLanguage.value = languages.value.find(lang => lang.code === currentLangCode) || languages.value[0];
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

watch(selectedLanguage, (newLang) => {
    if (newLang) {
        locale.value = newLang.code;
        localStorage.setItem('user-locale', newLang.code);
    }
});
</script>

<template>
    <nav :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-sm border-b border-gray-200/50 dark:border-gray-800/50' 
            : 'bg-transparent'
    ]">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <router-link to="/" class="flex items-center gap-2 group">
                    <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
                        <i class="pi pi-chart-line text-white text-sm"></i>
                    </div>
                    <span class="text-gray-900 dark:text-white font-bold text-lg">Clear Cut Markets</span>
                </router-link>

                <!-- Desktop Nav -->
                <div class="hidden md:flex items-center gap-1">
                    <button @click="scrollToSection('features')" class="nav-link">Features</button>
                    <button @click="scrollToSection('pricing')" class="nav-link">Pricing</button>
                    <button @click="scrollToSection('faq')" class="nav-link">FAQ</button>
                </div>

                <!-- Right section -->
                <div class="flex items-center gap-2">
                    <!-- Language dropdown -->
                    <Dropdown 
                        v-model="selectedLanguage" 
                        :options="languages" 
                        optionLabel="name" 
                        class="!border-0 !bg-transparent !shadow-none w-auto"
                    >
                        <template #value="slotProps">
                            <div v-if="slotProps.value" class="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                <i class="pi pi-globe text-sm"></i>
                                <span class="text-sm font-medium">{{ slotProps.value.code.toUpperCase() }}</span>
                            </div>
                        </template>
                        <template #option="slotProps">
                            <span class="text-sm">{{ slotProps.option.name }}</span>
                        </template>
                    </Dropdown>
                    
                    <!-- Dark mode toggle -->
                    <button 
                        @click="toggleDarkMode" 
                        class="w-9 h-9 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all"
                    >
                        <i :class="['pi', isDark ? 'pi-sun' : 'pi-moon']"></i>
                    </button>
                    
                    <!-- Login/Signup (Desktop) -->
                    <div class="hidden md:flex items-center gap-2 ml-2">
                        <router-link to="/auth/login">
                            <Button label="Login" class="p-button-text !text-gray-600 dark:!text-gray-400 hover:!text-gray-900 dark:hover:!text-white" />
                        </router-link>
                        <router-link to="/auth/signup">
                            <Button label="Get Started" class="!bg-gradient-to-r !from-indigo-600 !to-purple-600 !border-0 !shadow-lg hover:!shadow-indigo-500/25" />
                        </router-link>
                    </div>
                    
                    <!-- Mobile menu button -->
                    <button 
                        @click="sidebarVisible = true"
                        class="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                    >
                        <i class="pi pi-bars"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Sidebar -->
        <Sidebar v-model:visible="sidebarVisible" position="right" class="!w-72">
            <template #header>
                <span class="font-bold text-gray-900 dark:text-white">Menu</span>
            </template>
            
            <div class="flex flex-col gap-2 p-2">
                <button @click="scrollToSection('features')" class="mobile-nav-link">
                    <i class="pi pi-bolt"></i>
                    Features
                </button>
                <button @click="scrollToSection('pricing')" class="mobile-nav-link">
                    <i class="pi pi-tag"></i>
                    Pricing
                </button>
                <button @click="scrollToSection('faq')" class="mobile-nav-link">
                    <i class="pi pi-question-circle"></i>
                    FAQ
                </button>
                
                <div class="border-t border-gray-200 dark:border-gray-700 my-4"></div>
                
                <router-link to="/auth/login" @click="sidebarVisible = false">
                    <Button label="Login" outlined class="w-full" />
                </router-link>
                <router-link to="/auth/signup" @click="sidebarVisible = false">
                    <Button label="Get Started" class="w-full !bg-gradient-to-r !from-indigo-600 !to-purple-600 !border-0" />
                </router-link>
            </div>
        </Sidebar>
    </nav>
    
    <!-- Spacer for fixed nav -->
    <div class="h-16"></div>
</template>

<style scoped>
.nav-link {
    @apply px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all;
}

.mobile-nav-link {
    @apply flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all w-full text-left;
}
</style>
