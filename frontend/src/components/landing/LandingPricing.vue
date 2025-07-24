<template>
    <!-- Enhanced Pricing Section with Toggle -->
    <div id="pricing" class="py-12 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div class="text-center mb-12">
            <h2 class="text-gray-900 font-bold mb-3 text-4xl fade-up">Simple Module-Based Pricing</h2>
            <p class="text-gray-600 text-xl max-w-2xl mx-auto fade-up stagger-1">
                Choose the plan that fits your portfolio. Save 95% compared to Industry standard tools.
            </p>
        </div>

        <!-- Enhanced Pricing Toggle with animation -->
        <div class="flex justify-center mb-8">
            <div class="inline-flex items-center bg-white rounded-lg p-1 shadow-sm relative">
                <!-- Sliding background indicator -->
                <div 
                    class="absolute h-full bg-violet-600 rounded-md transition-all duration-300 ease-out"
                    :style="{
                        width: '50%',
                        transform: billingPeriod === 'monthly' ? 'translateX(0)' : 'translateX(100%)'
                    }"
                ></div>
                
                <button 
                    @click="billingPeriod = 'monthly'"
                    :class="['relative z-10 px-4 py-2 rounded-md transition-all duration-300', 
                             billingPeriod === 'monthly' ? 'text-white' : 'text-gray-600']">
                    Monthly
                </button>
                <button 
                    @click="billingPeriod = 'annual'"
                    :class="['relative z-10 px-4 py-2 rounded-md transition-all duration-300', 
                             billingPeriod === 'annual' ? 'text-white' : 'text-gray-600']">
                    Annual
                </button>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <!-- Essential Plan - 3 Modules -->
                <div class="p-0 md:p-4 fade-up stagger-1">
                <div class="relative p-8 flex flex-col bg-white rounded-2xl border-2 border-gray-200 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full">
                    <div class="text-gray-900 text-center mb-8">
                        <h3 class="text-3xl font-bold">Essential</h3>
                        <p class="text-gray-600 mt-2">For focused investors</p>
                    </div>
                    
                    <!-- Module Count -->
                    <div class="text-center mb-4">
                        <span class="text-2xl font-bold text-violet-600">3 Modules</span>
                        <p class="text-sm text-gray-500 mt-1">€{{ billingPeriod === 'annual' ? '6.67' : '8.33' }} per module</p>
                        <p class="text-sm text-green-600 font-semibold" v-if="billingPeriod === 'annual'">Save €60/year</p>
                        <p class="text-sm text-transparent" v-else>-</p>
                    </div>
                    
                    <!-- Animated Price -->
                    <div class="mb-8 flex flex-col items-center gap-4">
                        <div class="flex items-baseline">
                            <span class="text-5xl font-bold text-gray-900">
                                €<transition name="price-fade" mode="out-in">
                                    <span :key="billingPeriod">{{ billingPeriod === 'annual' ? '20' : '25' }}</span>
                                </transition>
                            </span>
                            <span class="text-gray-600 ml-2">per month</span>
                        </div>
                        <Button 
                            label="Start 14-Day Trial" 
                            severity="success"
                            class="p-button-rounded px-6 py-3 font-semibold w-full"
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
                    </ul>
                </div>
            </div>

            <!-- Professional Plan - 6 Modules - Most Popular -->
    <div class="p-0 md:p-4 fade-up stagger-2">
        <div class="relative p-8 flex flex-col bg-white rounded-2xl border-2 border-gray-200 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full">
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
                        <p class="text-sm text-gray-500 mt-1">€{{ billingPeriod === 'annual' ? '6.00' : '7.50' }} per module</p>
                        <p class="text-sm text-green-600 font-semibold">Save {{ billingPeriod === 'annual' ? '€108/year' : '10%' }}</p>
                    </div>

                                        <!-- Animated Price -->
                    <div class="mb-8 flex flex-col items-center gap-4">
                        <div class="flex items-baseline">
                            <span class="text-5xl font-bold text-gray-900">
                                €<transition name="price-fade" mode="out-in">
                                    <span :key="billingPeriod">{{ billingPeriod === 'annual' ? '36' : '45' }}</span>
                                </transition>
                            </span>
                            <span class="text-gray-600 ml-2">per month</span>
                        </div>
                        <Button 
                            label="Start 14-Day Trial" 
                            severity="success"
                            class="p-button-rounded px-6 py-3 font-semibold w-full"
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
                            <span class="text-gray-700">Everything in Essential, plus:</span>
                        </li>
                        <li class="flex items-start">
                            <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700"><strong>Advanced AI insights</strong></span>
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
                    </ul>

                    <!-- Comparison to competitors -->
                    <div class="mt-auto p-4 bg-violet-50 rounded-lg">
                        <p class="text-sm text-violet-700 text-center font-semibold">
                            Save €2,355/month vs competitors
                        </p>
                    </div>
                </div>
            </div>

            <!-- Advanced Plan - 9 Modules -->
    <div class="p-0 md:p-4 fade-up stagger-3">
        <div class="relative p-8 flex flex-col bg-white rounded-2xl border-2 border-gray-200 hover:border-violet-500 duration-300 transition-all cursor-pointer h-full">
                    <div class="text-gray-900 text-center mb-8">
                        <h3 class="text-3xl font-bold">Advanced</h3>
                        <p class="text-gray-600 mt-2">For portfolio managers</p>
                    </div>
                    
                    <!-- Module Count -->
                    <div class="text-center mb-4">
                        <span class="text-2xl font-bold text-violet-600">9 Modules</span>
                        <p class="text-sm text-gray-500 mt-1">€{{ billingPeriod === 'annual' ? '5.78' : '7.22' }} per module</p>
                        <p class="text-sm text-green-600 font-semibold">Save {{ billingPeriod === 'annual' ? '€156/year' : '13%' }}</p>
                    </div>

                                        <!-- Animated Price -->
                    <div class="mb-8 flex flex-col items-center gap-4">
                        <div class="flex items-baseline">
                            <span class="text-5xl font-bold text-gray-900">
                                €<transition name="price-fade" mode="out-in">
                                    <span :key="billingPeriod">{{ billingPeriod === 'annual' ? '52' : '65' }}</span>
                                </transition>
                            </span>
                            <span class="text-gray-600 ml-2">per month</span>
                        </div>
                        <Button 
                            label="Start 14-Day Trial" 
                            severity="success"
                            class="p-button-rounded px-6 py-3 font-semibold w-full"
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
                            <span class="text-gray-700">Everything in Professional, plus:</span>
                        </li>
                        <li class="flex items-start">
                            <i class="pi pi-check-circle text-green-500 text-xl mr-3 mt-1"></i>
                            <span class="text-gray-700"><strong>Dedicated support</strong></span>
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
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
import Chip from 'primevue/chip';
import Divider from 'primevue/divider';

const router = useRouter();
const billingPeriod = ref('monthly');

const contactSales = () => {
    window.location.href = 'mailto:sales@clearcutmarkets.com?subject=Enterprise Plan Inquiry';
};
</script>

<style scoped>
/* Price transition animation */
.price-fade-enter-active,
.price-fade-leave-active {
    transition: all 0.3s ease;
}

.price-fade-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.price-fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

/* Optional: Add a subtle scale animation to the cards when switching */
.pricing-card-transition {
    transition: transform 0.3s ease;
}

.pricing-card-transition:active {
    transform: scale(0.98);
}
</style>