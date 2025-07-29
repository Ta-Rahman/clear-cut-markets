<template>
    <footer class="px-4 py-8 md:px-6 lg:px-8 text-center">
        <div class="max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-800 pt-8">
            <div class="flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-4 mb-4">
                <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors duration-200">Impressum (Legal Notice)</a>
                <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors duration-200">Privacy Policy</a>
                <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors duration-200">Terms & Conditions</a>
                <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors duration-200">Cancellation Policy</a>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-500">
                © {{ new Date().getFullYear() }} Clear Cut Markets. All Rights Reserved.
            </p>
            <p class="text-xs text-gray-400 dark:text-gray-600 mt-2">
                This website is for informational purposes only and does not constitute financial advice.
            </p>
        </div>
    </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n(); // This line ensures the component is i18n-aware
</script>