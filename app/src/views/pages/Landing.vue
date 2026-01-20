<template>
    <div class="relative overflow-x-hidden sticky-bar-padding" :style="{ paddingBottom: showStickyBar ? '96px' : '0' }">
        <GradientBackground :showOrbs="true" />
        
        <!-- Additional dot pattern specific to landing page -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute inset-0"
                 style="background-image: radial-gradient(circle, #667eea 1px, transparent 1px);
                        background-size: 50px 50px;
                        opacity: 0.3;">
            </div>
        </div>

        <LandingNav />
        <LandingHero
            :animatedWaitlist="animatedWaitlist"
            :animatedSaved="animatedSaved"
            :animatedModules="animatedModules"
            :animatedSources="animatedSources"
        />
        <LandingModulesDemo />
        <LandingUsp />
        <LandingFeatures />
        <LandingUseCases />
        <LandingPricing />
        <LandingFAQ />
        <LandingFooter />

        <Transition name="sticky-slide">
            <LandingStickyCTA v-if="showStickyBar" />
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useScrollAnimation } from '@/composables/useScrollAnimation';
import { supabase } from '@/supabase';
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

// State for animated counters
const animatedWaitlist = ref(0);
const animatedSaved = ref(0);
const animatedModules = ref(0);
const animatedSources = ref(0);
const showStickyBar = ref(false);

const animateValue = (ref, start, end, duration) => {
    if (end === 0) return;
    const range = end - start;
    const increment = end > start ? range / (duration / 16) : -range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            ref.value = end;
            clearInterval(timer);
        } else {
            ref.value = Math.floor(current);
        }
    }, 16);
};

const checkStickyBar = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const hasScrolledEnough = scrollY > windowHeight * 2;
    const nearBottom = scrollY > documentHeight - windowHeight * 1.5;
    const pastPricing = document.getElementById('pricing') && scrollY > document.getElementById('pricing').offsetTop;
    showStickyBar.value = (hasScrolledEnough && pastPricing) || nearBottom;
};

const fetchWaitlistCount = async () => {
    try {
        const { data, error } = await supabase.rpc('get_waitlist_count');
        if (error) throw error;

        let displayCount = 0;
        if (data > 10) {
            displayCount = Math.floor(data / 10) * 10;
        } else if (data > 0) {
            displayCount = 10;
        }

        animateValue(animatedWaitlist, 0, displayCount, 2000);

    } catch (error) {
        console.error('Error fetching waitlist count:', error);
        animateValue(animatedWaitlist, 0, 230, 2000);
    }
};

onMounted(() => {
    fetchWaitlistCount();
    animateValue(animatedSaved, 0, 23, 2000);
    animateValue(animatedModules, 0, 9, 1500);
    animateValue(animatedSources, 0, 15, 1800);

    window.addEventListener('scroll', checkStickyBar);
    document.title = 'Clear Cut Markets - Smarter Insights on What Matters Most';
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
