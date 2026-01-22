<template>
    <section class="relative py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div class="relative max-w-6xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-16">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-sm font-medium mb-4 fade-up">
                    <i class="pi pi-play-circle"></i>
                    How It Works
                </div>
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 fade-up stagger-1">
                    Get Started in
                    <span class="text-gradient">3 Simple Steps</span>
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto fade-up stagger-2">
                    From sign-up to insights in under 2 minutes. No complex setup required.
                </p>
            </div>
            
            <!-- Steps -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <!-- Step 1 -->
                <div class="relative fade-up stagger-2">
                    <div class="step-card group">
                        <!-- Step number -->
                        <div class="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/30 z-10">
                            1
                        </div>
                        
                        <!-- Icon -->
                        <div class="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="pi pi-user-plus text-indigo-600 dark:text-indigo-400 text-2xl"></i>
                        </div>
                        
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Create Account</h3>
                        <p class="text-gray-600 dark:text-gray-400">
                            Sign up with your email in seconds. No credit card required to get started.
                        </p>
                    </div>
                    
                    <!-- Connector line (hidden on mobile) -->
                    <div class="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-gray-300 dark:border-gray-700"></div>
                </div>
                
                <!-- Step 2 -->
                <div class="relative fade-up stagger-3">
                    <div class="step-card group">
                        <div class="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/30 z-10">
                            2
                        </div>
                        
                        <div class="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="pi pi-plus-circle text-amber-600 dark:text-amber-400 text-2xl"></i>
                        </div>
                        
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Add Your Assets</h3>
                        <p class="text-gray-600 dark:text-gray-400">
                            Search and add any stocks, crypto, or ETFs you want to track.
                        </p>
                    </div>
                    
                    <div class="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-gray-300 dark:border-gray-700"></div>
                </div>
                
                <!-- Step 3 -->
                <div class="relative fade-up stagger-4">
                    <div class="step-card group">
                        <div class="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/30 z-10">
                            3
                        </div>
                        
                        <div class="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="pi pi-sparkles text-green-600 dark:text-green-400 text-2xl"></i>
                        </div>
                        
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Get AI Insights</h3>
                        <p class="text-gray-600 dark:text-gray-400">
                            Receive personalized analysis and stay ahead of market movements.
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- Demo Preview -->
            <div class="fade-up stagger-5">
                <div class="demo-preview-wrapper relative rounded-2xl overflow-hidden p-1 shadow-2xl">
                    <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-x"></div>
                    
                    <div class="demo-preview-inner relative rounded-xl p-6 md:p-8">
                        <!-- Fake browser header -->
                        <div class="flex items-center gap-2 mb-6">
                            <div class="flex gap-1.5">
                                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div class="flex-1 mx-4">
                                <div class="demo-url-bar rounded-lg px-4 py-1.5 text-sm text-center">
                                    app.clearcutmarkets.com/dashboard
                                </div>
                            </div>
                        </div>
                        
                        <!-- Dashboard preview -->
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div v-for="asset in previewAssets" :key="asset.symbol" class="demo-asset-card rounded-xl p-4">
                                <div class="flex items-center gap-2 mb-2">
                                    <div :class="['w-8 h-8 rounded-lg flex items-center justify-center', asset.bgClass]">
                                        <i :class="['text-white text-xs', asset.icon]"></i>
                                    </div>
                                    <span class="demo-asset-symbol font-bold text-sm">{{ asset.symbol }}</span>
                                </div>
                                <div class="demo-asset-price font-bold">{{ asset.price }}</div>
                                <div :class="['text-xs font-medium', asset.change > 0 ? 'text-green-500' : 'text-red-500']">
                                    {{ asset.change > 0 ? '+' : '' }}{{ asset.change }}%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const previewAssets = ref([
    { symbol: 'AAPL', price: '$195.89', change: 2.48, icon: 'pi pi-building', bgClass: 'bg-gradient-to-br from-indigo-500 to-purple-600' },
    { symbol: 'BTC', price: '$104.5K', change: 3.21, icon: 'pi pi-bitcoin', bgClass: 'bg-gradient-to-br from-amber-500 to-orange-600' },
    { symbol: 'SPY', price: '$598.43', change: 0.85, icon: 'pi pi-chart-pie', bgClass: 'bg-gradient-to-br from-teal-500 to-cyan-600' },
    { symbol: 'NVDA', price: '$142.65', change: -1.24, icon: 'pi pi-building', bgClass: 'bg-gradient-to-br from-indigo-500 to-purple-600' },
]);
</script>

<style scoped>
.text-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.step-card {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 1.5rem;
    padding: 2rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.step-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);
}

@keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 15s ease infinite;
}
</style>

<style>
/* Dark mode styles - unscoped to work with global .app-dark class */
.app-dark .step-card {
    background: rgba(17, 24, 39, 0.6);
    border-color: rgba(255, 255, 255, 0.1);
}

/* Demo preview theme styles */
.demo-preview-wrapper {
    background: linear-gradient(to bottom right, #f3f4f6, #e5e7eb);
}

.app-dark .demo-preview-wrapper {
    background: linear-gradient(to bottom right, #1f2937, #111827);
}

.demo-preview-inner {
    background: #ffffff;
}

.app-dark .demo-preview-inner {
    background: #111827;
}

.demo-url-bar {
    background: #f3f4f6;
    color: #6b7280;
}

.app-dark .demo-url-bar {
    background: #1f2937;
    color: #9ca3af;
}

.demo-asset-card {
    background: rgba(243, 244, 246, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.app-dark .demo-asset-card {
    background: rgba(31, 41, 55, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
}

.demo-asset-symbol {
    color: #111827;
}

.app-dark .demo-asset-symbol {
    color: #ffffff;
}

.demo-asset-price {
    color: #111827;
}

.app-dark .demo-asset-price {
    color: #ffffff;
}
</style>
