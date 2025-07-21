<!-- src/views/Landing.vue -->
<template>
    <div class="relative overflow-x-hidden">
        <!-- Animated Background -->
        <div class="fixed inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-5 -z-10"></div>
<!-- Add this after the gradient background div -->
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

        
        <!-- Navigation Bar -->
        <div class="sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-md px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between">
            <div class="flex items-center">
                <i class="pi pi-chart-line text-primary text-3xl mr-2"></i>
                <span class="text-gray-900 font-bold text-2xl">Clear Cut Markets</span>
            </div>
            <div class="flex gap-3">
                <Button label="Features" class="p-button-text" @click="scrollToSection('features')" />
                <Button label="Pricing" class="p-button-text" @click="scrollToSection('pricing')" />
                <Button label="Login" class="p-button-outlined" @click="$router.push('/auth/login')" />
            </div>
        </div>

        <!-- Hero Section with Animation -->
        <div class="min-h-[60vh] flex items-center justify-center px-4 py-12 md:py-16 lg:py-20">
            <div class="text-center">
                <div class="mb-4 animate-fade-in-down animation-delay-0">
                    <Chip label="🚀 Launching Soon" class="px-3 py-2" />
                </div>
                
                <h1 class="text-6xl font-bold text-gray-900 mb-4 animate-fade-in-down animation-delay-100">
                    Track What <span class="text-gradient">Matters Most</span>
                </h1>
                
                <p class="text-xl text-gray-600 mb-6 max-w-3xl mx-auto animate-fade-in-down animation-delay-200">
                    Professional investment monitoring for 95% less than Bloomberg Terminal. 
                    Focus on your top 1-6 investments with AI-powered insights.
                </p>
                
                <!-- Email Capture with Animation -->
<div class="flex items-center justify-center gap-3 max-w-lg mx-auto animate-fade-in-down animation-delay-300">
    <div class="flex-1">
        <IconField iconPosition="left" class="w-full">
            <InputIcon class="pi pi-envelope text-gray-500" />
            <InputText 
                v-model="email" 
                placeholder="Enter your email" 
                @keyup.enter="joinWaitlist"
                class="w-full"
                :class="{'shake-animation': emailError}"
            />
        </IconField>
    </div>
    <Button 
        label="Join Waitlist" 
        class="p-button-primary p-button-raised"
        @click="joinWaitlist"
        :loading="loading"
    />
</div>
                
                <Transition name="fade">
                    <div v-if="message" class="mt-3 animate-fade-in">
                        <Message :severity="messageType" :closable="false">{{ message }}</Message>
                    </div>
                </Transition>

                <!-- Live Stats -->
                <div class="mt-6 animate-fade-in-up animation-delay-500">
                    <div class="flex justify-center items-center gap-4 flex-wrap">
                        <div class="text-center px-6">
                            <h3 class="text-4xl font-bold text-primary mb-1">{{ animatedWaitlist }}+</h3>
                            <p class="text-gray-600 text-sm m-0">On Waitlist</p>
                        </div>
                        <div class="w-px h-10 bg-gray-300 self-center hidden sm:block"></div>
                        <div class="text-center px-6">
                            <h3 class="text-4xl font-bold text-primary mb-1">${{ animatedSaved }}k</h3>
                            <p class="text-gray-600 text-sm m-0">Saved vs Bloomberg</p>
                        </div>
                        <div class="w-px h-10 bg-gray-300 self-center hidden sm:block"></div>
                        <div class="text-center px-6">
                            <h3 class="text-4xl font-bold text-primary mb-1">{{ animatedModules }}</h3>
                            <p class="text-gray-600 text-sm m-0">Possible Modules</p>
                        </div>
                        <div class="w-px h-10 bg-gray-300 self-center hidden sm:block"></div>
                        <div class="text-center px-6">
                            <h3 class="text-4xl font-bold text-primary mb-1">{{ animatedSources }}+</h3>
                            <p class="text-gray-600 text-sm m-0">Data Sources</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Interactive Demo Section -->
        <div class="px-4 py-8 md:px-6 lg:px-8">
            <div class="text-center mb-6">
                <h2 class="text-4xl font-bold text-gray-900 mb-3">Your Investment Modules</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Each module is a complete investment tracking system. Choose what matters to you.
                </p>
            </div>
            
            <div class="max-w-7xl mx-auto py-8">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div v-for="(module, index) in demoModules" :key="module.symbol" 
                         :class="[
                             'p-4',
                             `animate-fade-in-up animation-delay-${index * 200}`
                         ]">
                        
                        <!-- Individual Module Card -->
                        <div class="module-card group h-full bg-white/95 backdrop-blur-md border border-black/5 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:border-primary/30"
                             @mouseenter="hoveredModule = index"
                             @mouseleave="hoveredModule = null">
                            
                            <!-- Module Header -->
                            <div class="mb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h3 class="text-2xl font-bold text-gray-900 m-0">{{ module.symbol }}</h3>
                                        <p class="text-sm text-gray-600 m-0">{{ module.name }}</p>
                                    </div>
                                    <Tag :severity="module.change > 0 ? 'success' : 'danger'" class="font-semibold">
                                        {{ module.change > 0 ? '+' : '' }}{{ module.change }}%
                                    </Tag>
                                </div>
                            </div>
                            
                            <!-- Price Section -->
                            <div class="mb-4">
                                <div class="flex items-baseline mb-1">
                                    <span class="text-xl text-gray-600 mr-1">$</span>
                                    <span class="text-4xl font-bold text-gray-900">{{ module.price }}</span>
                                </div>
                                <div class="text-sm text-gray-500">
                                    <span>{{ module.changeAmount }}</span>
                                    <span class="ml-2">Today</span>
                                </div>
                            </div>
                            
                            <!-- Simple Chart -->
                            <div class="h-16 my-4 bg-gray-50 rounded-md p-2">
                                <svg viewBox="0 0 100 40" preserveAspectRatio="none" class="w-full h-full">
                                    <line x1="0" y1="20" x2="100" y2="20" stroke="#f0f0f0" stroke-width="1"/>
                                    <polyline
                                        :points="module.simpleChart"
                                        fill="none"
                                        :stroke="module.change > 0 ? '#22c55e' : '#ef4444'"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        :d="`M ${module.simpleChart} L 100,40 L 0,40 Z`"
                                        :fill="module.change > 0 ? '#22c55e20' : '#ef444420'"
                                    />
                                </svg>
                            </div>
                            
<!-- Key Metrics -->
<div class="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-200 mb-6">
    <div class="text-center">
        <span class="block text-xs text-gray-600 mb-1">Volume</span>
        <span class="block text-base font-semibold text-gray-900">{{ module.volume }}</span>
    </div>
    <div class="text-center">
        <span class="block text-xs text-gray-600 mb-1">Market Cap</span>
        <span class="block text-base font-semibold text-gray-900">{{ module.marketCap }}</span>
    </div>
    <div class="text-center">
        <span class="block text-xs text-gray-600 mb-1">P/E Ratio</span>
        <span class="block text-base font-semibold text-gray-900">{{ module.peRatio }}</span>
    </div>
</div>

                            <!-- AI Insights Section -->
                            <div class="mb-4">
                                <div class="flex items-center gap-2 mb-3">
                                    <i class="pi pi-sparkles text-primary"></i>
                                    <span class="font-semibold">AI Analysis</span>
                                </div>
                                <p class="text-sm text-gray-600 leading-relaxed">{{ module.insight }}</p>
                                
                                <!-- Sentiment Indicator -->
                                <div class="mt-3 bg-gray-50 p-3 rounded-lg">
                                    <div class="flex justify-between items-center mb-2">
                                        <span class="text-xs text-gray-500">Sentiment</span>
                                        <span class="text-xs font-bold">{{ module.sentiment }}% Bullish</span>
                                    </div>
                                    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div class="h-full rounded-full transition-all duration-500" 
                                             :style="{
                                                 width: module.sentiment + '%', 
                                                 backgroundColor: getSentimentColor(module.sentiment)
                                             }">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Module Actions -->
                            <div class="flex justify-center gap-4 pt-2">
                                <Button icon="pi pi-bell" class="p-button-text p-button-sm p-button-rounded" />
                                <Button icon="pi pi-chart-line" class="p-button-text p-button-sm p-button-rounded" />
                                <Button icon="pi pi-cog" class="p-button-text p-button-sm p-button-rounded" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Add Module Placeholder -->
                <div class="text-center mt-8">
                    <Button label="This could be your dashboard" class="p-button-outlined p-button-lg" disabled />
                    <p class="text-gray-600 mt-3">Join the waitlist to start tracking your investments</p>
                </div>
            </div>
        </div>

        <!-- Features Section with Icons -->
        <div id="features" class="px-4 py-8 md:px-6 lg:px-8 bg-gray-50">
            <h2 class="text-center text-gray-900 text-3xl font-bold mb-6">Why Choose Clear Cut Markets?</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                <div v-for="(feature, index) in features" :key="index" 
                     :class="[
                         'text-center p-6 bg-white rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105',
                         `animate-fade-in-up animation-delay-${index * 100}`
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

<!-- Pricing Section -->
<div id="pricing" class="py-12 px-4 md:px-6 lg:px-8 bg-gray-50">
    <div class="text-center mb-12">
        <h2 class="text-gray-900 font-bold mb-3 text-4xl">Simple Module-Based Pricing</h2>
        <p class="text-gray-600 text-xl max-w-2xl mx-auto">
            Choose the plan that fits your portfolio. Save 95% compared to Bloomberg Terminal.
        </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <!-- Essential Plan - 3 Modules -->
        <div class="p-0 md:p-4">
            <div class="relative p-8 flex flex-col bg-white rounded-2xl border-2 border-gray-200 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full">
                <div class="text-gray-900 text-center mb-8">
                    <h3 class="text-3xl font-bold">Essential</h3>
                    <p class="text-gray-600 mt-2">For focused investors</p>
                </div>
                
                <!-- Module Count -->
                <div class="text-center mb-4">
                    <span class="text-2xl font-bold text-violet-600">3 Modules</span>
                    <p class="text-sm text-gray-500 mt-1">€8.33 per module</p>
                    <p class="text-sm text-transparent">-</p> <!-- Spacer for alignment -->
                </div>
                
                <!-- Price -->
                <div class="mb-8 flex flex-col items-center gap-4">
                    <div class="flex items-baseline">
                        <span class="text-5xl font-bold text-gray-900">€25</span>
                        <span class="text-gray-600 ml-2">per month</span>
                    </div>
                    <Button 
                        label="Start 14-Day Trial" 
                        class="p-button-rounded px-6 py-3 bg-violet-600 hover:bg-violet-700 border-0 text-white font-semibold w-full"
                        @click="$router.push('/auth/register')"
                    />
                </div>
                
                <Divider class="w-full bg-gray-200" />
                
                <!-- Features -->
                <ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow">
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700">Track <strong>3 investments</strong></span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700">Real-time price alerts</span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700">Basic AI insights</span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700">Daily market summaries</span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700">Mobile & web access</span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700">Email support</span>
                    </li>
                    <li class="flex items-start text-gray-400">
                        <i class="pi pi-times-circle text-xl mr-3 mt-1"></i>
                        <span>Advanced AI insights</span>
                    </li>
                    <li class="flex items-start text-gray-400">
                        <i class="pi pi-times-circle text-xl mr-3 mt-1"></i>
                        <span>Sentiment analysis</span>
                    </li>
                    <li class="flex items-start text-gray-400">
                        <i class="pi pi-times-circle text-xl mr-3 mt-1"></i>
                        <span>15+ data sources</span>
                    </li>
                    <li class="flex items-start text-gray-400">
                        <i class="pi pi-times-circle text-xl mr-3 mt-1"></i>
                        <span>API access</span>
                    </li>
                    <li class="flex items-start text-gray-400">
                        <i class="pi pi-times-circle text-xl mr-3 mt-1"></i>
                        <span>Portfolio analytics</span>
                    </li>
                    <li class="flex items-start text-gray-400">
                        <i class="pi pi-times-circle text-xl mr-3 mt-1"></i>
                        <span>Export data & reports</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Professional Plan - 6 Modules - Most Popular -->
        <div class="p-0 md:p-4">
            <div class="relative p-8 flex flex-col bg-white rounded-2xl border-2 border-violet-500 shadow-xl duration-300 transition-all cursor-pointer h-full">
                <!-- Popular Badge -->
                <div class="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Chip label="Most Popular" class="bg-violet-600 text-white px-4 py-2" />
                </div>
                
                <div class="text-gray-900 text-center mb-8">
                    <h3 class="text-3xl font-bold">Professional</h3>
                    <p class="text-gray-600 mt-2">For active investors</p>
                </div>
                
                <!-- Module Count -->
                <div class="text-center mb-4">
                    <span class="text-2xl font-bold text-violet-600">6 Modules</span>
                    <p class="text-sm text-gray-500 mt-1">€7.50 per module</p>
                    <p class="text-sm text-green-600 font-semibold">Save 10%</p>
                </div>
                
                <!-- Price -->
                <div class="mb-8 flex flex-col items-center gap-4">
                    <div class="flex items-baseline">
                        <span class="text-5xl font-bold text-gray-900">€45</span>
                        <span class="text-gray-600 ml-2">per month</span>
                    </div>
                    <Button 
                        label="Start 14-Day Trial" 
                        class="p-button-rounded px-6 py-3 bg-violet-600 hover:bg-violet-700 border-0 text-white font-semibold w-full"
                        @click="$router.push('/auth/register')"
                    />
                </div>
                
                <Divider class="w-full bg-gray-200" />
                
                <!-- Features -->
                <ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow">
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700">Track <strong>6 investments</strong></span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700">Real-time price alerts</span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700"><strong>Advanced AI insights</strong></span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700">Daily market summaries</span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700">Mobile & web access</span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700"><strong>Priority support</strong></span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700"><strong>Sentiment analysis</strong></span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700"><strong>15+ data sources</strong></span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700">Custom alerts & thresholds</span>
                    </li>
                    <li class="flex items-start text-gray-400">
                        <i class="pi pi-times-circle text-xl mr-3 mt-1"></i>
                        <span>API access</span>
                    </li>
                    <li class="flex items-start text-gray-400">
                        <i class="pi pi-times-circle text-xl mr-3 mt-1"></i>
                        <span>Portfolio analytics</span>
                    </li>
                    <li class="flex items-start text-gray-400">
                        <i class="pi pi-times-circle text-xl mr-3 mt-1"></i>
                        <span>Export data & reports</span>
                    </li>
                </ul>

                <!-- Comparison to Bloomberg -->
                <div class="mt-auto p-4 bg-violet-50 rounded-lg">
                                        <p class="text-sm text-violet-700 text-center font-semibold">
                        Save €2,355/month vs Bloomberg
                    </p>
                </div>
            </div>
        </div>

        <!-- Advanced Plan - 9 Modules -->
        <div class="p-0 md:p-4">
            <div class="relative p-8 flex flex-col bg-white rounded-2xl border-2 border-gray-200 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full">
                <div class="text-gray-900 text-center mb-8">
                    <h3 class="text-3xl font-bold">Advanced</h3>
                    <p class="text-gray-600 mt-2">For portfolio managers</p>
                </div>
                
                <!-- Module Count -->
                <div class="text-center mb-4">
                    <span class="text-2xl font-bold text-violet-600">9 Modules</span>
                    <p class="text-sm text-gray-500 mt-1">€7.22 per module</p>
                    <p class="text-sm text-green-600 font-semibold">Save 13%</p>
                </div>
                
                <!-- Price -->
                <div class="mb-8 flex flex-col items-center gap-4">
                    <div class="flex items-baseline">
                        <span class="text-5xl font-bold text-gray-900">€65</span>
                        <span class="text-gray-600 ml-2">per month</span>
                    </div>
                    <Button 
                        label="Start 14-Day Trial" 
                        class="p-button-rounded px-6 py-3 bg-violet-600 hover:bg-violet-700 border-0 text-white font-semibold w-full"
                        @click="$router.push('/auth/register')"
                    />
                </div>
                
                <Divider class="w-full bg-gray-200" />
                
                <!-- Features -->
                <ul class="my-8 list-none p-0 flex flex-col gap-4 flex-grow">
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700">Track <strong>9 investments</strong></span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700">Real-time price alerts</span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700"><strong>Advanced AI insights</strong></span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700">Daily market summaries</span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700">Mobile & web access</span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700"><strong>Dedicated support</strong></span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700"><strong>Sentiment analysis</strong></span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700"><strong>15+ data sources</strong></span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700">Custom alerts & thresholds</span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700"><strong>API access (beta)</strong></span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700"><strong>Portfolio analytics</strong></span>
                    </li>
                    <li class="flex items-start">
                        <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                        <span class="text-gray-700"><strong>Export data & reports</strong></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Need more modules? -->
    <div class="mt-12 text-center bg-white rounded-xl p-8 max-w-2xl mx-auto">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Need More Than 9 Modules?</h3>
        <p class="text-gray-600 mb-6">
            We offer custom plans for institutional investors and teams who need to track larger portfolios.
        </p>
        <Button 
            label="Contact Sales" 
            class="p-button-outlined p-button-lg"
            icon="pi pi-arrow-right"
            iconPos="right"
            @click="contactSales"
        />
    </div>

    <!-- Comparison section -->
    <div class="mt-16 text-center">
        <p class="text-gray-600 mb-4">
            All plans include: Bank-level security, 99.9% uptime, and regular updates
        </p>
        <div class="flex flex-wrap justify-center gap-6 text-sm">
            <div class="flex items-center gap-2">
                <i class="pi pi-shield text-green-500"></i>
                <span class="text-gray-700">SSL encryption</span>
            </div>
            <div class="flex items-center gap-2">
                <i class="pi pi-refresh text-green-500"></i>
                <span class="text-gray-700">14-day free trial</span>
            </div>
            <div class="flex items-center gap-2">
                <i class="pi pi-times text-green-500"></i>
                <span class="text-gray-700">Cancel anytime</span>
            </div>
            <div class="flex items-center gap-2">
                <i class="pi pi-credit-card text-green-500"></i>
                <span class="text-gray-700">No setup fees</span>
            </div>
        </div>
    </div>
</div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import Chip from 'primevue/chip';
import Tag from 'primevue/tag';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Divider from 'primevue/divider';

const contactSales = () => {
    // You can implement a modal, redirect to contact form, or open email
    window.location.href = 'mailto:sales@clearcutmarkets.com?subject=Enterprise Plan Inquiry';
};

// Keep all your existing script content exactly as is
const email = ref('');
const loading = ref(false);
const message = ref('');
const messageType = ref('success');
const emailError = ref(false);
const hoveredFeature = ref(null);
const hoveredModule = ref(null);
const animatedWaitlist = ref(0);
const animatedSaved = ref(0);
const animatedModules = ref(0);
const animatedSources = ref(0);

const demoModules = ref([
    {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        icon: 'pi-apple',
        price: '195.89',
        change: 2.5,
        changeAmount: '+$4.73',
        simpleChart: '0,30 10,25 20,27 30,22 40,18 50,20 60,15 70,12 80,10 90,8 100,5',
        volume: '52.3M',
        marketCap: '$3.04T',
        peRatio: '32.1',
        sentiment: 78,
        insight: 'Strong momentum with institutional buying detected.'
    },
    {
        symbol: 'BTC',
        name: 'Bitcoin',
        icon: 'pi-bitcoin',
        price: '43,250',
        change: -1.2,
        changeAmount: '-$525.50',
        simpleChart: '0,5 10,8 20,10 30,15 40,12 50,18 60,20 70,25 80,23 90,28 100,30',
        volume: '$24.8B',
        marketCap: '$847B',
        peRatio: 'N/A',
        sentiment: 45,
        insight: 'Key support at $42,000. Watch for breakout.'
    },
    {
        symbol: 'TSLA',
        name: 'Tesla Inc.',
        icon: 'pi-car',
        price: '238.45',
        change: 3.8,
        changeAmount: '+$8.73',
        simpleChart: '0,25 10,20 20,18 30,15 40,12 50,10 60,8 70,6 80,5 90,3 100,2',
        volume: '118.2M',
        marketCap: '$758B',
        peRatio: '71.2',
        sentiment: 85,
        insight: 'Q4 delivery beats driving bullish sentiment.'
    }
]);

const getSentimentColor = (sentiment) => {
    if (sentiment >= 70) return '#22c55e';
    if (sentiment >= 30) return '#f59e0b';
    return '#ef4444';
};

const features = ref([
    {
        icon: 'pi-chart-line',
        title: 'Module-Based Tracking',
        description: 'Focus on 1-6 investments that matter most to your portfolio'
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

const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

const joinWaitlist = async () => {
    if (!email.value || !email.value.includes('@')) {
        emailError.value = true;
        message.value = 'Please enter a valid email address';
        messageType.value = 'error';
        
        setTimeout(() => {
            emailError.value = false;
        }, 500);
        return;
    }

    loading.value = true;
    
    setTimeout(() => {
        console.log('Email submitted:', email.value);
        message.value = 'Thanks for joining! We\'ll be in touch soon.';
        messageType.value = 'success';
        email.value = '';
        loading.value = false;
        
        animatedWaitlist.value += 1;
        
        setTimeout(() => {
            message.value = '';
        }, 5000);
    }, 1000);
};

onMounted(() => {
    animateValue(animatedWaitlist, 0, 234, 2000);
    animateValue(animatedSaved, 0, 23, 2000);
    animateValue(animatedModules, 0, 6, 1500);
    animateValue(animatedSources, 0, 15, 1800);
});
</script>

<style scoped>
/* Only keep styles that can't be replicated with Tailwind */

/* Text gradient effect */
.text-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Shake animation for error state */
.shake-animation {
    animation: shake 0.5s;
}

.pricing-card-animate {
    animation: fadeInUp 0.6s ease-out both;
}

/* Stagger the animation for each card */
.pricing-card-animate:nth-child(1) {
    animation-delay: 0.1s;
}

.pricing-card-animate:nth-child(2) {
    animation-delay: 0.2s;
}

.pricing-card-animate:nth-child(3) {
    animation-delay: 0.3s;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
}

.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}

/* Module card hover effect - the gradient line at top */
.module-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--primary-color-light));
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.module-card:hover::before {
    transform: scaleX(1);
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

/* Vue transitions */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>