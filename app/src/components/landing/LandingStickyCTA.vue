<template>
    <div class="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom">
        <div class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-800/50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
            <div class="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between gap-4">
                <div class="hidden sm:block">
                    <p class="font-semibold text-gray-900 dark:text-white">Ready to get started?</p>
                    <p class="text-sm text-gray-500">Join thousands of investors using AI-powered insights.</p>
                </div>
                
                <div class="flex items-center gap-3 w-full sm:w-auto">
                    <router-link to="/auth/signup" class="flex-1 sm:flex-none">
                        <Button 
                            label="Join Waitlist" 
                            icon="pi pi-arrow-right" 
                            iconPos="right"
                            class="w-full !py-3 sm:!py-2 !bg-gradient-to-r !from-indigo-600 !to-purple-600 !border-0 !shadow-lg hover:!shadow-indigo-500/25"
                        />
                    </router-link>
                    <router-link to="/auth/login" class="hidden sm:block">
                        <Button 
                            label="Login" 
                            outlined
                            class="!border-2 !border-indigo-400/60 dark:!border-indigo-400/40 !text-indigo-600 dark:!text-indigo-300 hover:!bg-indigo-600 hover:!text-white hover:!border-indigo-600 dark:hover:!bg-indigo-500 dark:hover:!border-indigo-500 !transition-all !duration-200"
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

<style scoped>
/* Safe area for devices with home indicator (iPhone X+) */
.safe-area-bottom {
    padding-bottom: env(safe-area-inset-bottom, 0);
}
</style>
