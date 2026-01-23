<template>
    <section class="relative py-16 sm:py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
        <!-- Section header -->
        <div class="text-center mb-16 max-w-3xl mx-auto">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-sm font-medium mb-4 fade-up">
                <i class="pi pi-th-large"></i>
                Personalized Dashboard
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 fade-up stagger-1">
                All Your Assets.
                <span class="text-gradient">One View.</span>
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 fade-up stagger-2">
                Track stocks, crypto, and ETFs side by side with AI-powered insights tailored to each asset type.
            </p>
        </div>
        
        <!-- Bento Grid -->
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Stock Card -->
                <div class="fade-up stagger-2">
                    <div class="demo-card stock group h-full">
                        <!-- Asset type indicator -->
                        <div class="absolute top-4 right-4 z-10">
                            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-100/90 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 text-xs font-semibold backdrop-blur-sm">
                                <i class="pi pi-building text-[10px]"></i>
                                Stock
                            </span>
                        </div>
                        
                        <!-- Header -->
                        <div class="mb-4 pr-16">
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">AAPL</h3>
                            <p class="text-sm text-gray-600 dark:text-gray-400">Apple Inc.</p>
                        </div>
                        
                        <!-- Price -->
                        <div class="mb-4">
                            <div class="flex items-baseline gap-1">
                                <span class="text-lg text-gray-500">$</span>
                                <span class="text-4xl font-bold text-gray-900 dark:text-white">195</span>
                                <span class="text-xl text-gray-500">.89</span>
                            </div>
                            <div class="flex items-center gap-2 mt-1">
                                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                                    <i class="pi pi-arrow-up text-[10px] mr-1"></i>
                                    2.48%
                                </span>
                                <span class="text-sm text-gray-500">+$4.73 today</span>
                            </div>
                        </div>
                        
                        <!-- Mini chart -->
                        <div class="h-20 mb-4 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg p-2">
                            <svg viewBox="0 0 100 40" preserveAspectRatio="none" class="w-full h-full">
                                <defs>
                                    <linearGradient id="stockGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style="stop-color:#6366f1;stop-opacity:0.3" />
                                        <stop offset="100%" style="stop-color:#6366f1;stop-opacity:0" />
                                    </linearGradient>
                                </defs>
                                <path d="M0,30 Q10,28 20,25 T40,18 T60,15 T80,10 T100,5 L100,40 L0,40 Z" fill="url(#stockGrad)" />
                                <polyline points="0,30 20,25 40,18 60,15 80,10 100,5" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>
                        
                        <!-- Stats -->
                        <div class="grid grid-cols-3 gap-3 py-3 border-t border-gray-200/50 dark:border-gray-700/50 mb-4">
                            <div class="text-center">
                                <div class="text-xs text-gray-500 mb-1">Mkt Cap</div>
                                <div class="text-sm font-semibold text-gray-900 dark:text-white">$3.04T</div>
                            </div>
                            <div class="text-center">
                                <div class="text-xs text-gray-500 mb-1">P/E</div>
                                <div class="text-sm font-semibold text-gray-900 dark:text-white">32.1</div>
                            </div>
                            <div class="text-center">
                                <div class="text-xs text-gray-500 mb-1">Volume</div>
                                <div class="text-sm font-semibold text-gray-900 dark:text-white">52.3M</div>
                            </div>
                        </div>
                        
                        <!-- AI Insight -->
                        <div class="mt-auto">
                            <div class="flex items-center gap-2 mb-2">
                                <i class="pi pi-sparkles text-indigo-500"></i>
                                <span class="text-sm font-semibold text-gray-900 dark:text-white">AI Analysis</span>
                            </div>
                            <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                Strong earnings momentum with services revenue growing 14% YoY. iPhone 16 cycle showing above-average demand.
                            </p>
                            <div class="mt-3 p-2 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg">
                                <div class="flex justify-between text-xs mb-1">
                                    <span class="text-gray-500">Sentiment</span>
                                    <span class="font-semibold text-gray-900 dark:text-white">78% Bullish</span>
                                </div>
                                <div class="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div class="h-full bg-green-500 rounded-full" style="width: 78%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Crypto Card -->
                <div class="fade-up stagger-3">
                    <div class="demo-card crypto group h-full">
                        <!-- Asset type indicator -->
                        <div class="absolute top-4 right-4 z-10">
                            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100/90 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 text-xs font-semibold backdrop-blur-sm">
                                <i class="pi pi-bitcoin text-[10px]"></i>
                                Crypto
                            </span>
                        </div>
                        
                        <!-- Header -->
                        <div class="mb-4 pr-16">
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">BTC</h3>
                            <p class="text-sm text-gray-600 dark:text-gray-400">Bitcoin / USD</p>
                        </div>
                        
                        <!-- Price -->
                        <div class="mb-4">
                            <div class="flex items-baseline gap-1">
                                <span class="text-lg text-gray-500">$</span>
                                <span class="text-4xl font-bold text-gray-900 dark:text-white">104</span>
                                <span class="text-xl text-gray-500">.52K</span>
                            </div>
                            <div class="flex items-center gap-2 mt-1">
                                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                                    <i class="pi pi-arrow-up text-[10px] mr-1"></i>
                                    3.2%
                                </span>
                                <span class="flex items-center gap-1 text-xs text-gray-500">
                                    <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    24/7 Market
                                </span>
                            </div>
                        </div>
                        
                        <!-- Mini chart -->
                        <div class="h-20 mb-4 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg p-2">
                            <svg viewBox="0 0 100 40" preserveAspectRatio="none" class="w-full h-full">
                                <defs>
                                    <linearGradient id="cryptoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:0.3" />
                                        <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:0" />
                                    </linearGradient>
                                </defs>
                                <path d="M0,35 Q15,30 25,28 T50,20 T75,12 T100,8 L100,40 L0,40 Z" fill="url(#cryptoGrad)" />
                                <polyline points="0,35 25,28 50,20 75,12 100,8" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>
                        
                        <!-- Stats -->
                        <div class="grid grid-cols-3 gap-3 py-3 border-t border-gray-200/50 dark:border-gray-700/50 mb-4">
                            <div class="text-center">
                                <div class="text-xs text-gray-500 mb-1">24h Vol</div>
                                <div class="text-sm font-semibold text-gray-900 dark:text-white">$42.8B</div>
                            </div>
                            <div class="text-center">
                                <div class="text-xs text-gray-500 mb-1">24h High</div>
                                <div class="text-sm font-semibold text-green-600 dark:text-green-400">$105.2K</div>
                            </div>
                            <div class="text-center">
                                <div class="text-xs text-gray-500 mb-1">24h Low</div>
                                <div class="text-sm font-semibold text-red-600 dark:text-red-400">$101.8K</div>
                            </div>
                        </div>
                        
                        <!-- AI Insight -->
                        <div class="mt-auto">
                            <div class="flex items-center gap-2 mb-2">
                                <i class="pi pi-sparkles text-amber-500"></i>
                                <span class="text-sm font-semibold text-gray-900 dark:text-white">AI Analysis</span>
                            </div>
                            <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                Breaking above $100K resistance with strong institutional inflows. ETF volumes at record highs.
                            </p>
                            <div class="mt-3 p-2 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg">
                                <div class="flex justify-between text-xs mb-1">
                                    <span class="text-gray-500">Sentiment</span>
                                    <span class="font-semibold text-gray-900 dark:text-white">82% Bullish</span>
                                </div>
                                <div class="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div class="h-full bg-green-500 rounded-full" style="width: 82%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- ETF Card -->
                <div class="fade-up stagger-4">
                    <div class="demo-card etf group h-full">
                        <!-- Asset type indicator -->
                        <div class="absolute top-4 right-4 z-10">
                            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-100/90 dark:bg-teal-900/50 text-teal-700 dark:text-teal-400 text-xs font-semibold backdrop-blur-sm">
                                <i class="pi pi-chart-pie text-[10px]"></i>
                                ETF
                            </span>
                        </div>
                        
                        <!-- Header -->
                        <div class="mb-4 pr-16">
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">SPY</h3>
                            <p class="text-sm text-gray-600 dark:text-gray-400">S&P 500 ETF Trust</p>
                        </div>
                        
                        <!-- Price -->
                        <div class="mb-4">
                            <div class="flex items-baseline gap-1">
                                <span class="text-lg text-gray-500">$</span>
                                <span class="text-4xl font-bold text-gray-900 dark:text-white">598</span>
                                <span class="text-xl text-gray-500">.43</span>
                            </div>
                            <div class="flex items-center gap-2 mt-1">
                                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                                    <i class="pi pi-arrow-up text-[10px] mr-1"></i>
                                    0.85%
                                </span>
                                <span class="text-sm text-gray-500">+$5.04 today</span>
                            </div>
                        </div>
                        
                        <!-- Mini chart -->
                        <div class="h-20 mb-4 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg p-2">
                            <svg viewBox="0 0 100 40" preserveAspectRatio="none" class="w-full h-full">
                                <defs>
                                    <linearGradient id="etfGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style="stop-color:#14b8a6;stop-opacity:0.3" />
                                        <stop offset="100%" style="stop-color:#14b8a6;stop-opacity:0" />
                                    </linearGradient>
                                </defs>
                                <path d="M0,32 Q20,28 35,24 T60,18 T85,12 T100,10 L100,40 L0,40 Z" fill="url(#etfGrad)" />
                                <polyline points="0,32 35,24 60,18 85,12 100,10" fill="none" stroke="#14b8a6" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>
                        
                        <!-- Stats -->
                        <div class="grid grid-cols-3 gap-3 py-3 border-t border-gray-200/50 dark:border-gray-700/50 mb-4">
                            <div class="text-center">
                                <div class="text-xs text-gray-500 mb-1">AUM</div>
                                <div class="text-sm font-semibold text-gray-900 dark:text-white">$562B</div>
                            </div>
                            <div class="text-center">
                                <div class="text-xs text-gray-500 mb-1">Exp. Ratio</div>
                                <div class="text-sm font-semibold text-gray-900 dark:text-white">0.09%</div>
                            </div>
                            <div class="text-center">
                                <div class="text-xs text-gray-500 mb-1">52W Range</div>
                                <div class="text-sm font-semibold text-gray-900 dark:text-white">$480-$605</div>
                            </div>
                        </div>
                        
                        <!-- AI Insight -->
                        <div class="mt-auto">
                            <div class="flex items-center gap-2 mb-2">
                                <i class="pi pi-sparkles text-teal-500"></i>
                                <span class="text-sm font-semibold text-gray-900 dark:text-white">AI Analysis</span>
                            </div>
                            <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                Broad market rally continues with tech leading gains. Fed rate cut expectations driving positive sentiment.
                            </p>
                            <div class="mt-3 p-2 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg">
                                <div class="flex justify-between text-xs mb-1">
                                    <span class="text-gray-500">Sentiment</span>
                                    <span class="font-semibold text-gray-900 dark:text-white">72% Bullish</span>
                                </div>
                                <div class="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div class="h-full bg-green-500 rounded-full" style="width: 72%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- CTA -->
            <div class="text-center mt-12 fade-up stagger-5">
                <router-link to="/signup">
                    <Button label="Start Tracking Your Assets" icon="pi pi-arrow-right" iconPos="right" class="!bg-gradient-to-r !from-indigo-600 !to-purple-600 !border-0 !shadow-lg !text-lg !px-8 !py-3" />
                </router-link>
                <p class="text-sm text-gray-500 mt-3">Free to start • No credit card required</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import Button from 'primevue/button';
</script>

<style scoped>
.text-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.demo-card {
    position: relative;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 1.5rem;
    padding: 1.5rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

/* Asset-specific accent colors */
.demo-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}

.demo-card.stock::before { background: linear-gradient(90deg, #6366f1, #8b5cf6); }
.demo-card.crypto::before { background: linear-gradient(90deg, #f59e0b, #ea580c); }
.demo-card.etf::before { background: linear-gradient(90deg, #14b8a6, #06b6d4); }

.demo-card:hover::before {
    transform: scaleX(1);
}

.demo-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}

.demo-card.stock:hover { border-color: rgba(99, 102, 241, 0.3); }
.demo-card.crypto:hover { border-color: rgba(245, 158, 11, 0.3); }
.demo-card.etf:hover { border-color: rgba(20, 184, 166, 0.3); }

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>

<style>
/* Dark mode styles - unscoped to work with global .app-dark class */
.app-dark .demo-card {
    background: rgba(17, 24, 39, 0.8);
    border-color: rgba(255, 255, 255, 0.1);
}
</style>
