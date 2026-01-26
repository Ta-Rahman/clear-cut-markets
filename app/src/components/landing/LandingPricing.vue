<template>
    <section id="pricing" class="relative py-16 sm:py-24 px-4 md:px-6 lg:px-8">
        <div class="relative max-w-5xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-16">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4 fade-up">
                    <i class="pi pi-tag"></i>
                    Simple Pricing
                </div>
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 fade-up stagger-1">
                    Start Free.
                    <span class="text-gradient">Upgrade When Ready.</span>
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto fade-up stagger-2">
                    Try Clear Cut Markets with no commitment. Upgrade to Pro when you're ready for the full experience.
                </p>
            </div>

            <!-- Pricing Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                <!-- Free Tier -->
                <div class="fade-up stagger-2">
                    <div class="pricing-card h-full">
                        <div class="mb-6">
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Free</h3>
                            <p class="text-gray-500 text-sm">Get started and explore</p>
                        </div>
                        
                        <div class="mb-6">
                            <div class="flex items-baseline">
                                <span class="text-5xl font-bold text-gray-900 dark:text-white">€0</span>
                                <span class="text-gray-500 ml-2">forever</span>
                            </div>
                        </div>
                        
                        <Button 
                            label="Start Free" 
                            outlined
                            class="w-full mb-8"
                            @click="scrollToWaitlist"
                        />
                        
                        <ul class="space-y-4">
                            <li class="flex items-start gap-3">
                                <i class="pi pi-check text-green-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">1 Module</span>
                                    <p class="text-sm text-gray-500">Track one stock, crypto, or ETF</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="pi pi-check text-green-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">Basic AI Analysis</span>
                                    <p class="text-sm text-gray-500">3 AI insights per week</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="pi pi-check text-green-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">Daily News Digest</span>
                                    <p class="text-sm text-gray-500">Curated news for your asset</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3 opacity-50">
                                <i class="pi pi-times text-gray-400 mt-1"></i>
                                <div>
                                    <span class="text-gray-500">Cross-asset alerts</span>
                                </div>
                            </li>
                            <li class="flex items-start gap-3 opacity-50">
                                <i class="pi pi-times text-gray-400 mt-1"></i>
                                <div>
                                    <span class="text-gray-500">Priority support</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Pro Tier -->
                <div class="fade-up stagger-3">
                    <div class="pricing-card pro h-full relative">
                        <!-- Popular badge -->
                        <div class="absolute -top-4 left-1/2 -translate-x-1/2">
                            <span class="px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-lg">
                                Most Popular
                            </span>
                        </div>
                        
                        <div class="mb-6 pt-2">
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Pro</h3>
                            <p class="text-gray-500 text-sm">Full power for serious investors</p>
                        </div>
                        
                        <div class="mb-6">
                            <div class="flex items-baseline">
                                <span class="text-5xl font-bold text-gray-900 dark:text-white">€14</span>
                                <span class="text-2xl font-bold text-gray-900 dark:text-white">.99</span>
                                <span class="text-gray-500 ml-2">/ month</span>
                            </div>
                            <p class="text-sm text-green-600 dark:text-green-400 mt-1">14-day free trial included</p>
                        </div>
                        
                        <Button 
                            label="Start 14-Day Trial"
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            class="w-full mb-8 !bg-gradient-to-r !from-indigo-600 !to-purple-600 !border-0"
                            @click="scrollToWaitlist"
                        />
                        
                        <ul class="space-y-4">
                            <li class="flex items-start gap-3">
                                <i class="pi pi-check text-green-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">6 Modules</span>
                                    <p class="text-sm text-gray-500">Track your full portfolio</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="pi pi-check text-green-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">Unlimited AI Analysis</span>
                                    <p class="text-sm text-gray-500">Real-time insights for all assets</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="pi pi-check text-green-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">Full News Intelligence</span>
                                    <p class="text-sm text-gray-500">15+ sources, real-time alerts</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="pi pi-star-fill text-amber-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">Cross-Asset Correlation Alerts</span>
                                    <p class="text-sm text-gray-500">AI finds connections others miss</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="pi pi-check text-green-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">Priority Support</span>
                                    <p class="text-sm text-gray-500">Get help when you need it</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="pi pi-check text-green-500 mt-1"></i>
                                <div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium">Custom Alert Thresholds</span>
                                    <p class="text-sm text-gray-500">Set your own sensitivity levels</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Trust badges -->
            <div class="text-center fade-up stagger-4">
                <div class="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
                    <div class="flex items-center gap-2">
                        <i class="pi pi-credit-card text-gray-400"></i>
                        <span>No credit card for free tier</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <i class="pi pi-sync text-gray-400"></i>
                        <span>Cancel anytime</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <i class="pi pi-lock text-gray-400"></i>
                        <span>Secure payments via Stripe</span>
                    </div>
                </div>
            </div>

            <!-- Enterprise CTA -->
            <div class="mt-16 fade-up stagger-5">
                <div class="enterprise-cta relative overflow-hidden rounded-2xl p-8 md:p-10">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    
                    <div class="relative flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 class="enterprise-title text-xl font-bold mb-2">Need more than 6 modules?</h3>
                            <p class="enterprise-text text-sm">We offer custom plans for power users and teams. Let's talk about your needs.</p>
                        </div>
                        <Button 
                            label="Contact Us"
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            outlined
                            class="whitespace-nowrap"
                            @click="isContactModalVisible = true"
                        />
                    </div>
                </div>
            </div>
        </div>

        <ContactSalesModal :visible="isContactModalVisible" @close="isContactModalVisible = false" />
    </section>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import ContactSalesModal from './ContactSalesModal.vue';
import { useWaitlist } from '@/composables/useWaitlist';

const isContactModalVisible = ref(false);
const { scrollToWaitlist } = useWaitlist();
</script>

<style scoped>
.text-gradient {
    background: linear-gradient(135deg, #22c55e 0%, #10b981 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.pricing-card {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 1.5rem;
    padding: 2rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.pricing-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);
}

.pricing-card.pro {
    border: 2px solid transparent;
    background: 
        linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)) padding-box,
        linear-gradient(135deg, #6366f1, #8b5cf6) border-box;
    box-shadow: 0 20px 40px -12px rgba(99, 102, 241, 0.2);
}
</style>

<style>
/* Dark mode styles - unscoped to work with global .app-dark class */
.app-dark .pricing-card {
    background: rgba(17, 24, 39, 0.8);
    border-color: rgba(255, 255, 255, 0.1);
}

.app-dark .pricing-card.pro {
    background: 
        linear-gradient(rgba(17, 24, 39, 0.95), rgba(17, 24, 39, 0.95)) padding-box,
        linear-gradient(135deg, #6366f1, #8b5cf6) border-box;
}

/* Enterprise CTA theme styles */
.enterprise-cta {
    background: linear-gradient(to bottom right, #f3f4f6, #e5e7eb);
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.app-dark .enterprise-cta {
    background: linear-gradient(to bottom right, #1f2937, #111827);
    border-color: rgba(255, 255, 255, 0.1);
}

.enterprise-title {
    color: #111827;
}

.app-dark .enterprise-title {
    color: #ffffff;
}

.enterprise-text {
    color: #4b5563;
}

.app-dark .enterprise-text {
    color: #9ca3af;
}
</style>
