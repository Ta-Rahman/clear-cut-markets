<template>
    <!-- Features Section with Icons -->
    <div id="features" class="px-4 py-8 md:px-6 lg:px-8 bg-gray-50">
        <h2 class="text-center text-gray-900 text-3xl font-bold mb-6 fade-up">Why Choose Clear Cut Markets?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <div v-for="(feature, index) in features" :key="index" 
                 :class="[
                     'text-center p-6 bg-white rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105',
                     'fade-up',
                     `stagger-${(index % 3) + 1}`
                 ]"
                 @mouseenter="hoveredFeature = index"
                 @mouseleave="hoveredFeature = null">
                <div class="mb-4">
                    <i :class="[`pi ${feature.icon} text-5xl transition-colors duration-300`, 
                       hoveredFeature === index ? 'text-primary' : 'text-gray-400']"></i>
                </div>
                <h3 class="text-gray-900 text-xl mb-3 font-semibold">{{ feature.title }}</h3>
                <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const hoveredFeature = ref(null);

// Features data
const features = ref([
    {
        icon: 'pi-chart-line',
        title: 'Module-Based Tracking',
        description: 'Focus on 3-9 investments that matter most to your portfolio'
    },
    {
        icon: 'pi-bolt',
        title: 'AI-Powered Insights',
        description: 'Get sentiment analysis and smart alerts on your investments'
    },
    {
        icon: 'pi-shield',
        title: 'Bank-Level Security',
        description: 'Your data is encrypted and secure with enterprise-grade protection'
    },
    {
        icon: 'pi-mobile',
        title: 'Access Anywhere',
        description: 'Monitor your investments from any device, anytime'
    },
    {
        icon: 'pi-sync',
        title: 'Real-Time Updates',
        description: 'Live market data and instant notifications'
    },
    {
        icon: 'pi-dollar',
        title: '95% Cost Savings',
        description: 'Professional tools without the enterprise price tag'
    }
]);
</script>

<style scoped>
/* No component-specific styles needed - all using Tailwind */
</style>