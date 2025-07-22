<template>
    <!-- Sticky CTA Bar -->
    <Transition name="slide-up">
        <div class="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4 shadow-lg z-40">
            <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div class="text-center md:text-left">
                    <p class="font-semibold">Ready to start tracking smarter?</p>
                    <p class="text-sm opacity-90">Join 234+ investors • 14-day free trial</p>
                </div>
                    <Button 
                         label="Start Free Trial"
                         class="bg-white dark:bg-white text-violet-600 dark:text-violet-600 hover:bg-gray-100 dark:hover:bg-gray-100 border-0 font-semibold shadow-lg"
                         @click="$router.push('/auth/register')"
                    />
            </div>
        </div>
    </Transition>
</template>

<script setup>
import Button from 'primevue/button';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
/* Sticky bar transition */
.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%);
}
</style>