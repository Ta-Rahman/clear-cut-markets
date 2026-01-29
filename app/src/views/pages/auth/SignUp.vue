<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/supabase';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const { t } = useI18n();

const email = ref('');
const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const handleWaitlistJoin = async () => {
    if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        errorMessage.value = t('signup.error_invalid_email');
        return;
    }
    loading.value = true;
    errorMessage.value = '';
    successMessage.value = '';

    try {
        const { error } = await supabase
            .from('waitlist')
            .insert({ email: email.value });

        if (error) {
            if (error.code === '23505') {
                errorMessage.value = t('signup.error_email_exists');
            } else {
                throw error;
            }
        } else {
            successMessage.value = t('signup.success_message');
            email.value = '';
        }

    } catch (error) {
        errorMessage.value = t('signup.error_generic');
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="min-h-screen flex flex-col lg:flex-row">
        <!-- Left side - Visual branding (desktop only) -->
        <div class="hidden lg:flex flex-col flex-1 relative overflow-hidden bg-slate-950">
            <!-- Animated mesh gradient background -->
            <div class="absolute inset-0">
                <div class="auth-mesh-gradient"></div>
            </div>
            
            <!-- Floating geometric shapes -->
            <div class="absolute inset-0 overflow-hidden">
                <div class="auth-shape auth-shape-1"></div>
                <div class="auth-shape auth-shape-2"></div>
                <div class="auth-shape auth-shape-3"></div>
                <div class="auth-glow auth-glow-1"></div>
                <div class="auth-glow auth-glow-2"></div>
            </div>
            
            <!-- Subtle noise texture -->
            <div class="absolute inset-0 opacity-[0.015]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');"></div>

            <div class="relative z-10 flex flex-col items-center justify-center flex-grow p-12">
                <!-- Logo -->
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/20">
                    <i class="pi pi-chart-line text-white text-3xl"></i>
                </div>
                
                <h2 class="text-4xl font-bold text-white mb-4 text-center">{{ t('signup.branding_title') || 'Join the Future of Investing' }}</h2>
                <p class="text-gray-400 text-lg text-center max-w-md">{{ t('signup.branding_subtitle') || 'Be among the first to experience AI-powered investment insights.' }}</p>
                
                <!-- Benefits list -->
                <div class="mt-10 space-y-4 max-w-sm">
                    <div class="flex items-center gap-4 text-gray-300">
                        <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                            <i class="pi pi-check text-green-400"></i>
                        </div>
                        <span>{{ t('signup.benefit_1') || 'Early access to all features' }}</span>
                    </div>
                    <div class="flex items-center gap-4 text-gray-300">
                        <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                            <i class="pi pi-check text-green-400"></i>
                        </div>
                        <span>{{ t('signup.benefit_2') || 'Exclusive founding member pricing' }}</span>
                    </div>
                    <div class="flex items-center gap-4 text-gray-300">
                        <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                            <i class="pi pi-check text-green-400"></i>
                        </div>
                        <span>{{ t('signup.benefit_3') || 'Direct input on product development' }}</span>
                    </div>
                </div>
            </div>
            
            <!-- Stats -->
            <div class="relative z-10 p-8 border-t border-white/5">
                <div class="flex justify-center gap-12">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-white">500+</div>
                        <div class="text-gray-500 text-sm">{{ t('signup.stat_waitlist') || 'On Waitlist' }}</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-white">15+</div>
                        <div class="text-gray-500 text-sm">{{ t('signup.stat_sources') || 'News Sources' }}</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-white">24/7</div>
                        <div class="text-gray-500 text-sm">{{ t('signup.stat_monitoring') || 'AI Monitoring' }}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right side - Signup form -->
        <div class="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-gray-50 dark:bg-gray-900 relative">
            <!-- Mobile gradient background -->
            <div class="lg:hidden absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
            
            <div class="w-full max-w-md relative z-10">
                <!-- Mobile logo -->
                <div class="lg:hidden flex justify-center mb-6">
                    <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                        <i class="pi pi-chart-line text-white text-2xl"></i>
                    </div>
                </div>
                
                <!-- Form card -->
                <div class="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700">
                    <!-- Header -->
                    <div class="text-center mb-8">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4">
                            <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            {{ t('signup.badge') || 'Limited spots available' }}
                        </div>
                        <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{{ t('signup.title') }}</h1>
                        <p class="text-gray-600 dark:text-gray-400">{{ t('signup.subtitle') }}</p>
                    </div>

                    <form @submit.prevent="handleWaitlistJoin" class="flex flex-col gap-5">
                        <!-- Email field -->
                        <div class="group">
                            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('signup.email_label') }}</label>
                            <div class="relative">
                                <i class="pi pi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors"></i>
                                <InputText 
                                    id="email" 
                                    v-model="email" 
                                    type="email" 
                                    class="w-full !pl-11 !py-3 !rounded-xl !border-gray-200 dark:!border-gray-600 !bg-gray-50 dark:!bg-gray-700/50 focus:!border-indigo-500 focus:!ring-2 focus:!ring-indigo-500/20 transition-all" 
                                    :placeholder="t('signup.email_placeholder')" 
                                />
                            </div>
                        </div>
                        
                        <!-- Error message -->
                        <div v-if="errorMessage">
                            <Message severity="error" :closable="false" class="!rounded-xl">{{ errorMessage }}</Message>
                        </div>
                        
                        <!-- Success message -->
                        <div v-if="successMessage">
                            <div class="flex items-center gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                                <div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0">
                                    <i class="pi pi-check text-green-600 dark:text-green-400"></i>
                                </div>
                                <div>
                                    <p class="font-medium text-green-800 dark:text-green-300">{{ t('signup.success_title') || "You're on the list!" }}</p>
                                    <p class="text-sm text-green-600 dark:text-green-400">{{ successMessage }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Submit button -->
                        <Button 
                            type="submit" 
                            :label="t('signup.submit_button')" 
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            :loading="loading"
                            class="w-full !py-3 !rounded-xl !bg-gradient-to-r !from-indigo-600 !to-purple-600 !border-0 !shadow-lg hover:!shadow-indigo-500/25 !text-base !font-semibold"
                        />
                        
                        <!-- Trust badges -->
                        <div class="flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400 mt-2">
                            <span class="flex items-center gap-1">
                                <i class="pi pi-lock text-green-500"></i>
                                {{ t('signup.trust_secure') || 'Secure' }}
                            </span>
                            <span class="flex items-center gap-1">
                                <i class="pi pi-ban text-green-500"></i>
                                {{ t('signup.trust_no_spam') || 'No spam' }}
                            </span>
                            <span class="flex items-center gap-1">
                                <i class="pi pi-times-circle text-green-500"></i>
                                {{ t('signup.trust_unsubscribe') || 'Unsubscribe anytime' }}
                            </span>
                        </div>
                    </form>
                    
                    <!-- Divider -->
                    <div class="relative my-6">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-4 bg-white dark:bg-gray-800 text-gray-500">{{ t('signup.or') || 'or' }}</span>
                        </div>
                    </div>
                    
                    <!-- Secondary actions -->
                    <div class="space-y-3">
                        <p class="text-center text-gray-600 dark:text-gray-400 text-sm">
                            {{ t('signup.already_on_list') }} 
                            <router-link to="/auth/login" class="font-medium text-indigo-600 dark:text-indigo-400 hover:underline">{{ t('signup.sign_in_link') }}</router-link>
                        </p>
                        
                        <router-link 
                            to="/" 
                            class="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-500 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-all font-medium"
                        >
                            <i class="pi pi-arrow-left text-sm"></i>
                            {{ t('login.back_to_home') }}
                        </router-link>
                    </div>
                </div>
                
                <!-- Footer text (mobile) -->
                <p class="lg:hidden text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
                    © 2026 Clear Cut Markets. All rights reserved.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Animated mesh gradient */
.auth-mesh-gradient {
    position: absolute;
    inset: 0;
    background: 
        radial-gradient(ellipse at 20% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 100%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
        radial-gradient(ellipse at 0% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 40%),
        radial-gradient(ellipse at 100% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 40%);
    animation: meshMove 20s ease-in-out infinite;
}

@keyframes meshMove {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
}

/* Floating geometric shapes */
.auth-shape {
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 20%;
    animation: shapeFloat 25s ease-in-out infinite;
}

.auth-shape-1 {
    width: 300px;
    height: 300px;
    top: -5%;
    right: -5%;
    transform: rotate(15deg);
    animation-delay: 0s;
}

.auth-shape-2 {
    width: 200px;
    height: 200px;
    bottom: 20%;
    left: -3%;
    transform: rotate(-20deg);
    animation-delay: -8s;
    animation-duration: 30s;
}

.auth-shape-3 {
    width: 150px;
    height: 150px;
    top: 40%;
    right: 10%;
    transform: rotate(45deg);
    animation-delay: -15s;
    animation-duration: 22s;
}

@keyframes shapeFloat {
    0%, 100% { transform: rotate(15deg) translate(0, 0); }
    25% { transform: rotate(20deg) translate(10px, -15px); }
    50% { transform: rotate(12deg) translate(-5px, 10px); }
    75% { transform: rotate(18deg) translate(8px, 5px); }
}

/* Subtle glow effects */
.auth-glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    animation: glowPulse 15s ease-in-out infinite;
}

.auth-glow-1 {
    width: 400px;
    height: 400px;
    top: -10%;
    left: 20%;
    background: rgba(99, 102, 241, 0.08);
}

.auth-glow-2 {
    width: 350px;
    height: 350px;
    bottom: 0%;
    right: 10%;
    background: rgba(139, 92, 246, 0.06);
    animation-delay: -7s;
}

@keyframes glowPulse {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
    .auth-mesh-gradient,
    .auth-shape,
    .auth-glow {
        animation: none;
    }
}
</style>
