<template>
    <div class="fixed bottom-0 left-0 right-0 z-50">
        <div class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-800/50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
            <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
                <div class="hidden sm:block">
                    <p class="font-semibold text-gray-900 dark:text-white">Ready to get started?</p>
                    <p class="text-sm text-gray-500">Join thousands of investors using AI-powered insights.</p>
                </div>
                
                <div class="flex items-center gap-3 w-full sm:w-auto">
                    <router-link to="/auth/signup" class="flex-1 sm:flex-none">
                        <Button 
                            label="Get Early Access" 
                            icon="pi pi-arrow-right" 
                            iconPos="right"
                            class="w-full !bg-gradient-to-r !from-indigo-600 !to-purple-600 !border-0 !shadow-lg hover:!shadow-indigo-500/25"
                        />
                    </router-link>
                    <router-link to="/auth/login" class="hidden sm:block">
                        <Button 
                            label="Login" 
                            text
                            class="!text-gray-600 dark:!text-gray-300 hover:!text-indigo-600 dark:hover:!text-indigo-400 hover:!bg-indigo-50 dark:hover:!bg-indigo-900/20"
                        />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from 'primevue/button';
</script>
