<template>
    <div class="relative overflow-x-hidden sticky-bar-padding" :style="{ paddingBottom: showStickyBar ? '96px' : '0' }">
        <!-- Animated Background -->
        <div class="fixed inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-5 -z-10"></div>
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <!-- Aurora-like gradient bands -->
            <div class="absolute inset-0">
                <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-violet-500/[0.07] via-transparent to-transparent"></div>
                <div class="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-500/[0.07] via-transparent to-transparent"></div>
                <div class="absolute top-1/4 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-violet-600/[0.05] to-transparent rounded-full blur-3xl transform rotate-45"></div>
                <div class="absolute bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-purple-600/[0.05] to-transparent rounded-full blur-3xl transform -rotate-45"></div>
            </div>
        </div>
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute inset-0" 
                 style="background-image: radial-gradient(circle, #667eea 1px, transparent 1px);
                        background-size: 50px 50px;
                        opacity: 0.3;">
            </div>
        </div>

        <!-- Components -->
        <LandingNav />
        <LandingHero 
            :animatedWaitlist="animatedWaitlist"
            :animatedSaved="animatedSaved"
            :animatedModules="animatedModules"
            :animatedSources="animatedSources"
        />
        <LandingModulesDemo />
        <LandingFeatures />
        <LandingPricing />
        <LandingFAQ />
        <!-- Wrap LandingStickyCTA in a Transition -->
        <Transition name="sticky-slide">
            <LandingStickyCTA v-if="showStickyBar" />
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useDarkMode } from '@/composables/useDarkMode';
import LandingNav from '@/components/landing/LandingNav.vue';
import LandingHero from '@/components/landing/LandingHero.vue';
import LandingModulesDemo from '@/components/landing/LandingModulesDemo.vue';
import LandingFeatures from '@/components/landing/LandingFeatures.vue';
import LandingPricing from '@/components/landing/LandingPricing.vue';
import LandingFAQ from '@/components/landing/LandingFAQ.vue';
import LandingStickyCTA from '@/components/landing/LandingStickyCTA.vue';

// Initialize dark mode
const { initDarkMode } = useDarkMode();

// State for animated counters
const animatedWaitlist = ref(0);
const animatedSaved = ref(0);
const animatedModules = ref(0);
const animatedSources = ref(0);

// State for sticky bar
const showStickyBar = ref(false);

// Animation function
const animateValue = (ref, start, end, duration) => {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            ref.value = end;
            clearInterval(timer);
        } else {
            ref.value = Math.floor(current);
        }
    }, 16);
};

// Check if sticky bar should be shown
const checkStickyBar = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Multiple conditions for showing sticky bar
    const hasScrolledEnough = scrollY > windowHeight * 2; // Scrolled 2 viewports
    const nearBottom = scrollY > documentHeight - windowHeight * 1.5; // Near bottom
    const pastPricing = document.getElementById('pricing') && 
                        scrollY > document.getElementById('pricing').offsetTop;
    
    showStickyBar.value = (hasScrolledEnough && pastPricing) || nearBottom;
};

onMounted(() => {
    // Initialize dark mode on component mount
    initDarkMode();
    // Animate counters
    animateValue(animatedWaitlist, 0, 234, 2000);
    animateValue(animatedSaved, 0, 23, 2000);
    animateValue(animatedModules, 0, 9, 1500);
    animateValue(animatedSources, 0, 15, 1800);
    
    // Add scroll listener
    window.addEventListener('scroll', checkStickyBar);
    
    // Set page title
    document.title = 'Clear Cut Markets - Professional Investment Tracking for 95% Less';
});

onUnmounted(() => {
    window.removeEventListener('scroll', checkStickyBar);
});
</script>

<style scoped>
/* Sticky bar transition */
.sticky-slide-enter-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.sticky-slide-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sticky-slide-enter-from {
    transform: translateY(100%);
}

.sticky-slide-leave-to {
    transform: translateY(100%);
}

/* Smooth padding transition */
.sticky-bar-padding {
    transition: padding-bottom 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Text gradient effect */
.text-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Custom animations */
.animate-fade-in-down {
    animation: fadeInDown 1s ease-out both;
}

.animate-fade-in-up {
    animation: fadeInUp 1s ease-out both;
}

.animate-fade-in {
    animation: fadeIn 0.5s ease-out both;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translate3d(0, -20px, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translate3d(0, 20px, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Animation delays */
.animation-delay-0 { animation-delay: 0s; }
.animation-delay-100 { animation-delay: 0.1s; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-500 { animation-delay: 0.5s; }
.animation-delay-600 { animation-delay: 0.6s; }
</style>