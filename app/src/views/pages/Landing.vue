<template>
    <div class="relative overflow-x-hidden" :style="{ paddingBottom: showStickyBar ? '80px' : '0' }">
        <!-- Global background with floating orbs -->
        <GradientBackground :showOrbs="true" />

        <!-- Navigation -->
        <LandingNav />
        
        <!-- Hero Section -->
        <LandingHero />
        
        <!-- Modules Demo -->
        <LandingModulesDemo />
        
        <!-- How It Works -->
        <LandingUsp />
        
        <!-- Features -->
        <LandingFeatures />
        
        <!-- Use Cases -->
        <LandingUseCases />
        
        <!-- Pricing -->
        <LandingPricing />
        
        <!-- FAQ -->
        <LandingFAQ />
        
        <!-- Footer -->
        <LandingFooter />

        <!-- Sticky CTA -->
        <Transition name="sticky-slide">
            <LandingStickyCTA v-if="showStickyBar" />
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useScrollAnimation } from '@/composables/useScrollAnimation';
import GradientBackground from '@/components/shared/GradientBackground.vue';
import LandingNav from '@/components/landing/LandingNav.vue';
import LandingHero from '@/components/landing/LandingHero.vue';
import LandingUsp from '@/components/landing/LandingUsp.vue';
import LandingModulesDemo from '@/components/landing/LandingModulesDemo.vue';
import LandingFeatures from '@/components/landing/LandingFeatures.vue';
import LandingUseCases from '@/components/landing/LandingUseCases.vue';
import LandingPricing from '@/components/landing/LandingPricing.vue';
import LandingFAQ from '@/components/landing/LandingFAQ.vue';
import LandingFooter from '@/components/landing/LandingFooter.vue';
import LandingStickyCTA from '@/components/landing/LandingStickyCTA.vue';

useScrollAnimation();

const showStickyBar = ref(false);

const checkStickyBar = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const hasScrolledEnough = scrollY > windowHeight * 1.5;
    const nearBottom = scrollY > documentHeight - windowHeight * 2;
    showStickyBar.value = hasScrolledEnough && !nearBottom;
};

onMounted(() => {
    window.addEventListener('scroll', checkStickyBar);
    document.title = 'Clear Cut Markets - AI-Powered Market Intelligence';
});

onUnmounted(() => {
    window.removeEventListener('scroll', checkStickyBar);
});
</script>

<style scoped>
/* Sticky bar transition */
.sticky-slide-enter-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.sticky-slide-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sticky-slide-enter-from,
.sticky-slide-leave-to {
    transform: translateY(100%);
    opacity: 0;
}
</style>
