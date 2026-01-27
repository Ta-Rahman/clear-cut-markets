<template>
    <footer class="relative py-16 px-4 md:px-6 lg:px-8 bg-gray-900 dark:bg-black border-t border-gray-800">
        <div class="max-w-6xl mx-auto">
            <!-- Main footer content -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <!-- Brand -->
                <div class="md:col-span-2">
                    <div class="flex items-center gap-2 mb-4">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                            <i class="pi pi-chart-line text-white text-lg"></i>
                        </div>
                        <span class="text-xl font-bold text-white">Clear Cut Markets</span>
                    </div>
                    <p class="text-gray-400 mb-6 max-w-md">
                        {{ t('footer.tagline') }}
                    </p>
                    
                    <!-- Social links -->
                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                            <i class="pi pi-twitter"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                            <i class="pi pi-linkedin"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                            <i class="pi pi-github"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Links -->
                <div>
                    <h4 class="text-white font-semibold mb-4">{{ t('footer.product.title') }}</h4>
                    <ul class="space-y-2">
                        <li><a href="#features" class="text-gray-400 hover:text-white transition-colors">{{ t('footer.product.features') }}</a></li>
                        <li><a href="#pricing" class="text-gray-400 hover:text-white transition-colors">{{ t('footer.product.pricing') }}</a></li>
                        <li><a href="#faq" class="text-gray-400 hover:text-white transition-colors">{{ t('footer.product.faq') }}</a></li>
                        <li><router-link to="/login" class="text-gray-400 hover:text-white transition-colors">{{ t('footer.product.login') }}</router-link></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-white font-semibold mb-4">{{ t('footer.company.title') }}</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">{{ t('footer.company.about') }}</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">{{ t('footer.company.blog') }}</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">{{ t('footer.company.careers') }}</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">{{ t('footer.company.contact') }}</a></li>
                    </ul>
                </div>
            </div>
            
            <!-- Bottom bar -->
            <div class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-gray-500 text-sm">
                    © {{ currentYear }} Clear Cut Markets. {{ t('footer.copyright') }}
                </p>
                
                <div class="flex gap-6 text-sm">
                    <a href="#" class="text-gray-500 hover:text-gray-400 transition-colors">{{ t('footer.legal.privacy') }}</a>
                    <a href="#" class="text-gray-500 hover:text-gray-400 transition-colors">{{ t('footer.legal.terms') }}</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const currentYear = computed(() => new Date().getFullYear());
</script>
