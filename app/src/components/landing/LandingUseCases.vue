<template>
    <section class="relative py-16 sm:py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div class="relative max-w-6xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-16">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-sm font-medium mb-4 fade-up">
                    <i class="pi pi-users"></i>
                    Built for Everyone
                </div>
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 fade-up stagger-1">
                    Whether You're a
                    <span class="text-gradient">Beginner or Pro</span>
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto fade-up stagger-2">
                    Clear Cut Markets adapts to your investing style and experience level.
                </p>
            </div>
            
            <!-- Use Cases Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(useCase, index) in useCases" :key="index" 
                     :class="['fade-up', `stagger-${index + 2}`]">
                    <div class="use-case-card group h-full">
                        <div :class="['w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300', useCase.iconBg]">
                            <i :class="[useCase.icon, 'text-white text-xl']"></i>
                        </div>
                        
                        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{{ useCase.title }}</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">{{ useCase.description }}</p>
                        
                        <div class="flex flex-wrap gap-2">
                            <span v-for="tag in useCase.tags" :key="tag" 
                                  class="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Testimonial -->
            <div class="mt-16 fade-up stagger-6">
                <div class="relative bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5 rounded-3xl p-8 md:p-12 border border-indigo-500/10">
                    <div class="absolute top-6 left-8 text-6xl text-indigo-500/20 font-serif">"</div>
                    
                    <div class="relative">
                        <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            Finally, a platform that gives me a clear view of my entire portfolio without the noise. The AI insights have helped me make more informed decisions.
                        </p>
                        
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                JD
                            </div>
                            <div>
                                <div class="font-semibold text-gray-900 dark:text-white">Jordan Davis</div>
                                <div class="text-sm text-gray-500">Retail Investor, Early Adopter</div>
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

const useCases = ref([
    {
        icon: 'pi pi-user',
        iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
        title: 'Casual Investors',
        description: 'Check your portfolio once a day without getting overwhelmed by data. Get clear, simple insights.',
        tags: ['Simple UI', 'Daily Summary', 'Mobile Friendly']
    },
    {
        icon: 'pi pi-chart-line',
        iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
        title: 'Active Traders',
        description: 'Real-time data and alerts to help you spot opportunities and manage risk effectively.',
        tags: ['Real-time Data', 'Price Alerts', 'Technical Analysis']
    },
    {
        icon: 'pi pi-wallet',
        iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
        title: 'Crypto Enthusiasts',
        description: '24/7 crypto tracking with sentiment analysis. Stay on top of volatile markets.',
        tags: ['24/7 Markets', 'DeFi Tokens', 'Market Sentiment']
    },
    {
        icon: 'pi pi-briefcase',
        iconBg: 'bg-gradient-to-br from-purple-500 to-pink-600',
        title: 'Long-term Investors',
        description: 'Focus on fundamentals with P/E ratios, market caps, and trend analysis over time.',
        tags: ['Fundamentals', '52-Week Range', 'Dividend Tracking']
    },
    {
        icon: 'pi pi-globe',
        iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-600',
        title: 'Diversified Portfolios',
        description: 'Track stocks, ETFs, and crypto in one place. See correlations across asset classes.',
        tags: ['Multi-Asset', 'ETF Analysis', 'Portfolio View']
    },
    {
        icon: 'pi pi-graduation-cap',
        iconBg: 'bg-gradient-to-br from-rose-500 to-red-600',
        title: 'Learning Investors',
        description: 'Understand market movements with AI explanations that teach as they inform.',
        tags: ['Educational', 'AI Explanations', 'Market Context']
    }
]);
</script>

<style scoped>
.text-gradient {
    background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.use-case-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 1.5rem;
    padding: 1.5rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.use-case-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);
}
</style>

<style>
/* Dark mode styles - unscoped to work with global .app-dark class */
.app-dark .use-case-card {
    background: rgba(17, 24, 39, 0.6);
    border-color: rgba(255, 255, 255, 0.1);
}
</style>
