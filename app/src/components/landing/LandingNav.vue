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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-sm border-gray-200/50 dark:border-gray-800/50' 
            : 'bg-transparent border-transparent'
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
                    <button @click="scrollToSection('features')" class="nav-link">{{ t('nav.features') }}</button>
                    <button @click="scrollToSection('pricing')" class="nav-link">{{ t('nav.pricing') }}</button>
                    <button @click="scrollToSection('faq')" class="nav-link">{{ t('nav.faq') }}</button>
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
                    <div class="hidden md:flex items-center gap-3 ml-2">
                        <router-link to="/auth/login">
                            <Button :label="t('nav.login')" outlined class="!rounded-lg !border-2 !border-gray-300 dark:!border-gray-600 !text-gray-700 dark:!text-gray-300 hover:!border-indigo-500 hover:!text-indigo-600 dark:hover:!border-indigo-400 dark:hover:!text-indigo-400 !transition-all" />
                        </router-link>
                        <router-link to="/auth/signup">
                            <Button :label="t('nav.join_waitlist')" class="!bg-gradient-to-r !from-indigo-600 !to-purple-600 !border-0 !shadow-lg hover:!shadow-indigo-500/25" />
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
        <Sidebar 
            v-model:visible="sidebarVisible" 
            position="right" 
            class="mobile-sidebar !w-80"
            :pt="{
                root: { class: '!border-0' },
                header: { class: '!border-0 !pb-0' },
                content: { class: '!p-0' },
                closeButton: { class: '!text-gray-500 hover:!text-gray-900 dark:!text-gray-400 dark:hover:!text-white !w-10 !h-10 !rounded-xl hover:!bg-gray-100 dark:hover:!bg-gray-800' }
            }"
        >
            <template #header>
                <div class="flex items-center gap-3 px-2">
                    <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                        <i class="pi pi-chart-line text-white text-sm"></i>
                    </div>
                    <span class="font-bold text-gray-900 dark:text-white">{{ t('nav.menu') }}</span>
                </div>
            </template>
            
            <div class="flex flex-col h-full">
                <!-- Navigation Links -->
                <nav class="flex-1 px-4 py-6">
                    <div class="space-y-1">
                        <button @click="scrollToSection('features')" class="mobile-nav-link group">
                            <div class="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                                <i class="pi pi-bolt text-purple-600 dark:text-purple-400"></i>
                            </div>
                            <div class="flex-1 text-left">
                                <span class="font-medium text-gray-900 dark:text-white">{{ t('nav.features') }}</span>
                                <p class="text-xs text-gray-500 dark:text-gray-400">{{ t('nav.features_desc') || 'Discover what we offer' }}</p>
                            </div>
                            <i class="pi pi-chevron-right text-gray-400 text-sm"></i>
                        </button>
                        
                        <button @click="scrollToSection('pricing')" class="mobile-nav-link group">
                            <div class="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                                <i class="pi pi-tag text-green-600 dark:text-green-400"></i>
                            </div>
                            <div class="flex-1 text-left">
                                <span class="font-medium text-gray-900 dark:text-white">{{ t('nav.pricing') }}</span>
                                <p class="text-xs text-gray-500 dark:text-gray-400">{{ t('nav.pricing_desc') || 'Simple, transparent pricing' }}</p>
                            </div>
                            <i class="pi pi-chevron-right text-gray-400 text-sm"></i>
                        </button>
                        
                        <button @click="scrollToSection('faq')" class="mobile-nav-link group">
                            <div class="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                                <i class="pi pi-question-circle text-amber-600 dark:text-amber-400"></i>
                            </div>
                            <div class="flex-1 text-left">
                                <span class="font-medium text-gray-900 dark:text-white">{{ t('nav.faq') }}</span>
                                <p class="text-xs text-gray-500 dark:text-gray-400">{{ t('nav.faq_desc') || 'Common questions answered' }}</p>
                            </div>
                            <i class="pi pi-chevron-right text-gray-400 text-sm"></i>
                        </button>
                    </div>
                    
                    <!-- Settings Section -->
                    <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <p class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3 px-2">{{ t('nav.settings') || 'Settings' }}</p>
                        
                        <div class="flex items-center justify-between px-2 py-3">
                            <div class="flex items-center gap-3">
                                <i class="pi pi-globe text-gray-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-300">{{ t('nav.language') || 'Language' }}</span>
                            </div>
                            <Dropdown 
                                v-model="selectedLanguage" 
                                :options="languages" 
                                optionLabel="name" 
                                class="!border-0 !bg-gray-100 dark:!bg-gray-800 !rounded-lg !shadow-none"
                            >
                                <template #value="slotProps">
                                    <span v-if="slotProps.value" class="text-sm font-medium">{{ slotProps.value.code.toUpperCase() }}</span>
                                </template>
                                <template #option="slotProps">
                                    <span class="text-sm">{{ slotProps.option.name }}</span>
                                </template>
                            </Dropdown>
                        </div>
                        
                        <div class="flex items-center justify-between px-2 py-3">
                            <div class="flex items-center gap-3">
                                <i :class="['pi', isDark ? 'pi-moon' : 'pi-sun', 'text-gray-500']"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-300">{{ t('nav.dark_mode') || 'Dark Mode' }}</span>
                            </div>
                            <button 
                                @click="toggleDarkMode"
                                :class="[
                                    'relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0',
                                    isDark ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-600'
                                ]"
                            >
                                <span 
                                    :class="[
                                        'absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200',
                                        isDark ? 'translate-x-5' : 'translate-x-0'
                                    ]"
                                ></span>
                            </button>
                        </div>
                    </div>
                </nav>
                
                <!-- Bottom CTA Section -->
                <div class="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                    <div class="space-y-3">
                        <router-link to="/auth/signup" @click="sidebarVisible = false" class="block">
                            <Button 
                                :label="t('nav.join_waitlist')" 
                                icon="pi pi-arrow-right"
                                iconPos="right"
                                class="w-full !py-3 !rounded-xl !bg-gradient-to-r !from-indigo-600 !to-purple-600 !border-0 !shadow-lg" 
                            />
                        </router-link>
                        <router-link to="/auth/login" @click="sidebarVisible = false" class="block">
                            <Button 
                                :label="t('nav.login')" 
                                icon="pi pi-user"
                                outlined 
                                class="w-full !py-3 !rounded-xl !border-2 !border-indigo-200 dark:!border-indigo-800 !text-indigo-600 dark:!text-indigo-400 hover:!bg-indigo-50 dark:hover:!bg-indigo-900/30" 
                            />
                        </router-link>
                    </div>
                    
                    <p class="text-xs text-center text-gray-400 dark:text-gray-500 mt-4">
                        {{ t('nav.sidebar_footer') || '© 2026 Clear Cut Markets' }}
                    </p>
                </div>
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
    @apply flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all w-full active:scale-[0.98];
}
</style>

<style>
/* Mobile sidebar styling - unscoped for PrimeVue overrides */
.mobile-sidebar.p-sidebar {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
}

.app-dark .mobile-sidebar.p-sidebar {
    background: rgba(17, 24, 39, 0.98);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-sidebar .p-sidebar-header {
    padding: 1rem 1.5rem;
}

.mobile-sidebar .p-sidebar-content {
    padding: 0;
    display: flex;
    flex-direction: column;
    height: calc(100% - 4rem);
}
</style>
