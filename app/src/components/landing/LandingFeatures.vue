<template>
    <section id="features" class="relative py-16 sm:py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div class="relative max-w-7xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-16">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-medium mb-4 fade-up">
                    <i class="pi pi-bolt"></i>
                    Powerful Features
                </div>
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 fade-up stagger-1">
                    Everything You Need to
                    <span class="text-gradient">Stay Ahead</span>
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto fade-up stagger-2">
                    Powerful tools designed for modern investors who demand more from their market intelligence.
                </p>
            </div>
            
            <!-- Bento Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Feature 1: AI Insights (Large) -->
                <div class="lg:col-span-2 fade-up stagger-2">
                    <div class="feature-card h-full p-8 group">
                        <div class="flex flex-col md:flex-row gap-6 items-start">
                            <div class="flex-shrink-0">
                                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/25 group-hover:scale-110 transition-transform duration-300">
                                    <i class="pi pi-sparkles text-white text-2xl"></i>
                                </div>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">AI-Powered Insights</h3>
                                <p class="text-gray-600 dark:text-gray-400 mb-4">
                                    Get personalized analysis for every asset in your portfolio. Our AI processes market data, news sentiment, and technical indicators to deliver actionable insights.
                                </p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 text-xs font-medium">Sentiment Analysis</span>
                                    <span class="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 text-xs font-medium">Pattern Recognition</span>
                                    <span class="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 text-xs font-medium">Risk Assessment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Feature 2: Real-time Data -->
                <div class="fade-up stagger-3">
                    <div class="feature-card h-full p-6 group">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/25 mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="pi pi-bolt text-white text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Real-time Updates</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm">
                            Live price feeds for stocks and 24/7 crypto tracking. Never miss a market move.
                        </p>
                    </div>
                </div>
                
                <!-- Feature 3: Multi-asset -->
                <div class="fade-up stagger-3">
                    <div class="feature-card h-full p-6 group">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25 mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="pi pi-th-large text-white text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Multi-Asset Support</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm">
                            Track stocks, crypto, and ETFs all in one unified dashboard.
                        </p>
                    </div>
                </div>
                
                <!-- Feature 4: Smart Alerts -->
                <div class="fade-up stagger-4">
                    <div class="feature-card h-full p-6 group">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/25 mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="pi pi-bell text-white text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Smart Alerts</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm">
                            Custom price and sentiment alerts that notify you when opportunities arise.
                        </p>
                    </div>
                </div>
                
                <!-- Feature 5: Cross-device -->
                <div class="fade-up stagger-4">
                    <div class="feature-card h-full p-6 group">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg shadow-rose-500/25 mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="pi pi-mobile text-white text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Cross-Device Sync</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm">
                            Access your dashboard from any device. Your data syncs seamlessly across desktop and mobile.
                        </p>
                    </div>
                </div>
                
                <!-- Feature 6: Portfolio Analytics -->
                <div class="fade-up stagger-5">
                    <div class="feature-card h-full p-6 group">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="pi pi-chart-bar text-white text-xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Portfolio Analytics</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm">
                            Track performance over time with detailed charts, gain/loss analysis, and portfolio allocation insights.
                        </p>
                    </div>
                </div>
                
                <!-- Feature 7: Security (Large) -->
                <div class="lg:col-span-2 fade-up stagger-6">
                    <div class="feature-card h-full p-8 group">
                        <div class="flex flex-col md:flex-row gap-6 items-start">
                            <div class="flex-shrink-0">
                                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/25 group-hover:scale-110 transition-transform duration-300">
                                    <i class="pi pi-shield text-white text-2xl"></i>
                                </div>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Bank-Grade Security</h3>
                                <p class="text-gray-600 dark:text-gray-400 mb-4">
                                    Your data is protected with enterprise-level encryption. We never store sensitive financial information or connect to your brokerage accounts.
                                </p>
                                <div class="flex items-center gap-4">
                                    <div class="flex items-center gap-2 text-sm text-gray-500">
                                        <i class="pi pi-lock text-teal-500"></i>
                                        <span>256-bit encryption</span>
                                    </div>
                                    <div class="flex items-center gap-2 text-sm text-gray-500">
                                        <i class="pi pi-check-circle text-teal-500"></i>
                                        <span>SOC 2 compliant</span>
                                    </div>
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
</script>

<style scoped>
.text-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.feature-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 1.5rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);
    border-color: rgba(99, 102, 241, 0.2);
}
</style>

<style>
/* Dark mode styles - unscoped to work with global .app-dark class */
.app-dark .feature-card {
    background: rgba(17, 24, 39, 0.6);
    border-color: rgba(255, 255, 255, 0.1);
}

.app-dark .feature-card:hover {
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.3);
}
</style>
