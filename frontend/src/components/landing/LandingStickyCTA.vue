<template>
    <!-- Sticky CTA Bar with smooth animation -->
    <Transition name="sticky-slide">
        <div class="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4 shadow-lg z-40">
            <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div class="text-center md:text-left">
                    <p class="font-semibold">Ready to start tracking smarter?</p>
                    <p class="text-sm opacity-90">Join 234+ investors • 14-day free trial</p>
                </div>
                <Button 
                    label="Start Free Trial"
                    class="bg-white text-violet-600 hover:bg-gray-100 border-0 font-semibold"
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
/* Smooth slide animation */
.sticky-slide-enter-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.sticky-slide-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sticky-slide-enter-from {
    transform: translateY(100%);
    opacity: 0;
}

.sticky-slide-leave-to {
    transform: translateY(100%);
    opacity: 0;
}
</style>