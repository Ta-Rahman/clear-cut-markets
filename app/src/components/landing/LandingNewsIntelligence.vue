<template>
    <section class="relative py-16 sm:py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div class="relative max-w-6xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-16">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 text-sm font-medium mb-4 fade-up">
                    <i class="pi pi-sparkles"></i>
                    AI News Intelligence
                </div>
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 fade-up stagger-1">
                    See Connections
                    <span class="text-gradient">Others Miss</span>
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto fade-up stagger-2">
                    Our AI doesn't just aggregate news — it analyzes how global events impact <em>your specific holdings</em> and alerts you before the market catches on.
                </p>
            </div>
            
            <!-- Main Demo -->
            <div class="fade-up stagger-3">
                <div class="demo-container relative rounded-3xl overflow-hidden p-1">
                    <!-- Gradient border effect -->
                    <div class="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-indigo-500/20 animate-gradient-x"></div>
                    
                    <div class="demo-inner relative rounded-[22px] p-6 md:p-8">
                        <!-- Two column layout -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            
                            <!-- Left: News Event -->
                            <div>
                                <div class="flex items-center gap-2 mb-4">
                                    <div class="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                        <i class="pi pi-bolt text-red-600 dark:text-red-400 text-sm"></i>
                                    </div>
                                    <span class="text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide">Breaking News</span>
                                    <span class="text-xs text-gray-400 ml-auto">2 min ago</span>
                                </div>
                                
                                <!-- News Card -->
                                <div class="news-card rounded-2xl p-5 mb-4">
                                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                        Global Chip Shortage Deepens as TSMC Warns of Supply Constraints
                                    </h3>
                                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        Taiwan Semiconductor Manufacturing Company announced extended lead times for advanced chips, citing unprecedented demand from AI and automotive sectors...
                                    </p>
                                    <div class="flex items-center gap-3">
                                        <span class="text-xs text-gray-500">Reuters</span>
                                        <span class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                                        <span class="text-xs text-gray-500">Technology</span>
                                    </div>
                                </div>
                                
                                <!-- AI Processing indicator -->
                                <div class="flex items-center gap-3 text-sm text-gray-500">
                                    <div class="flex items-center gap-2">
                                        <div class="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                                            <i class="pi pi-spin pi-spinner text-indigo-600 dark:text-indigo-400 text-xs"></i>
                                        </div>
                                        <span>AI analyzing impact on your portfolio...</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Right: Portfolio Impact -->
                            <div>
                                <div class="flex items-center gap-2 mb-4">
                                    <div class="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                                        <i class="pi pi-exclamation-triangle text-amber-600 dark:text-amber-400 text-sm"></i>
                                    </div>
                                    <span class="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide">Portfolio Alert</span>
                                </div>
                                
                                <!-- Alert Card -->
                                <div class="alert-card rounded-2xl p-5">
                                    <div class="flex items-start gap-3 mb-4">
                                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                                            <i class="pi pi-sparkles text-white"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-gray-900 dark:text-white mb-1">Clear Cut Alert</h4>
                                            <p class="text-sm text-gray-600 dark:text-gray-400">
                                                This news may negatively impact <strong>3 assets</strong> in your portfolio
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <!-- Affected Assets -->
                                    <div class="space-y-3">
                                        <div class="affected-asset rounded-xl p-3 flex items-center justify-between">
                                            <div class="flex items-center gap-3">
                                                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                                    <i class="pi pi-building text-white text-xs"></i>
                                                </div>
                                                <div>
                                                    <div class="font-semibold text-gray-900 dark:text-white text-sm">NVDA</div>
                                                    <div class="text-xs text-gray-500">NVIDIA Corp</div>
                                                </div>
                                            </div>
                                            <div class="text-right">
                                                <div class="text-red-500 font-semibold text-sm">High Impact</div>
                                                <div class="text-xs text-gray-500">Supply chain exposure</div>
                                            </div>
                                        </div>
                                        
                                        <div class="affected-asset rounded-xl p-3 flex items-center justify-between">
                                            <div class="flex items-center gap-3">
                                                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                                    <i class="pi pi-building text-white text-xs"></i>
                                                </div>
                                                <div>
                                                    <div class="font-semibold text-gray-900 dark:text-white text-sm">TSLA</div>
                                                    <div class="text-xs text-gray-500">Tesla Inc</div>
                                                </div>
                                            </div>
                                            <div class="text-right">
                                                <div class="text-amber-500 font-semibold text-sm">Medium Impact</div>
                                                <div class="text-xs text-gray-500">Chip dependency</div>
                                            </div>
                                        </div>
                                        
                                        <div class="affected-asset rounded-xl p-3 flex items-center justify-between">
                                            <div class="flex items-center gap-3">
                                                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                                                    <i class="pi pi-chart-pie text-white text-xs"></i>
                                                </div>
                                                <div>
                                                    <div class="font-semibold text-gray-900 dark:text-white text-sm">SMH</div>
                                                    <div class="text-xs text-gray-500">Semiconductor ETF</div>
                                                </div>
                                            </div>
                                            <div class="text-right">
                                                <div class="text-red-500 font-semibold text-sm">High Impact</div>
                                                <div class="text-xs text-gray-500">Direct sector exposure</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- AI Summary -->
                                    <div class="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                                        <div class="flex items-start gap-2">
                                            <i class="pi pi-info-circle text-indigo-500 mt-0.5"></i>
                                            <p class="text-sm text-gray-600 dark:text-gray-400">
                                                <strong>AI Summary:</strong> Extended chip lead times typically cause 2-4 week stock pressure for semiconductor-dependent companies. Consider monitoring closely.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Features below demo -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div class="fade-up stagger-4 text-center">
                    <div class="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center mx-auto mb-4">
                        <i class="pi pi-search text-rose-600 dark:text-rose-400 text-xl"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 dark:text-white mb-2">15+ News Sources</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        Reuters, Bloomberg, SEC filings, social sentiment — all scanned continuously
                    </p>
                </div>
                
                <div class="fade-up stagger-5 text-center">
                    <div class="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                        <i class="pi pi-link text-purple-600 dark:text-purple-400 text-xl"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 dark:text-white mb-2">Cross-Asset Connections</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        AI finds hidden links between news events and your specific holdings
                    </p>
                </div>
                
                <div class="fade-up stagger-6 text-center">
                    <div class="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-4">
                        <i class="pi pi-bell text-indigo-600 dark:text-indigo-400 text-xl"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 dark:text-white mb-2">Instant Alerts</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        Get notified within minutes when news impacts your portfolio
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
.text-gradient {
    background: linear-gradient(135deg, #f43f5e 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.demo-container {
    background: linear-gradient(to bottom right, #f3f4f6, #e5e7eb);
}

.demo-inner {
    background: #ffffff;
}

.news-card {
    background: rgba(239, 68, 68, 0.05);
    border: 1px solid rgba(239, 68, 68, 0.1);
}

.alert-card {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
    border: 1px solid rgba(99, 102, 241, 0.15);
}

.affected-asset {
    background: rgba(243, 244, 246, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.05);
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
/* Dark mode styles */
.app-dark .demo-container {
    background: linear-gradient(to bottom right, #1f2937, #111827);
}

.app-dark .demo-inner {
    background: #111827;
}

.app-dark .news-card {
    background: rgba(239, 68, 68, 0.1);
    border-color: rgba(239, 68, 68, 0.2);
}

.app-dark .alert-card {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
    border-color: rgba(99, 102, 241, 0.25);
}

.app-dark .affected-asset {
    background: rgba(31, 41, 55, 0.8);
    border-color: rgba(255, 255, 255, 0.1);
}
</style>
