<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/supabase';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Message from 'primevue/message';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const { t } = useI18n();

const email = ref('');
const password = ref('');
const checked = ref(false);
const loading = ref(false);
const errorMessage = ref('');

const handleLogin = async () => {
    if (!email.value || !password.value) {
        errorMessage.value = t('login.error_enter_credentials');
        return;
    }
    loading.value = true;
    errorMessage.value = '';
    try {
        const { error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value
        });
        if (error) throw error;
        router.push('/app');
    } catch (error) {
        errorMessage.value = error.message || t('login.error_unknown');
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="min-h-screen flex flex-col lg:flex-row">
        <!-- Left side - Branding (desktop only) -->
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
                
                <h2 class="text-4xl font-bold text-white mb-4 text-center">{{ t('login.branding_title') }}</h2>
                <p class="text-gray-400 text-lg text-center max-w-md">{{ t('login.branding_subtitle') }}</p>
                
                <!-- Feature pills -->
                <div class="flex flex-wrap justify-center gap-3 mt-8">
                    <span class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
                        <i class="pi pi-bolt mr-2 text-indigo-400"></i>AI-Powered
                    </span>
                    <span class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
                        <i class="pi pi-shield mr-2 text-green-400"></i>Secure
                    </span>
                    <span class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
                        <i class="pi pi-globe mr-2 text-purple-400"></i>Real-time
                    </span>
                </div>
            </div>
            
            <!-- Testimonial -->
            <div class="relative z-10 p-8 border-t border-white/5">
                <div class="max-w-lg mx-auto">
                    <p class="text-gray-400 italic text-lg">"{{ t('login.testimonial_text') }}"</p>
                    <p class="font-semibold text-gray-300 mt-3">{{ t('login.testimonial_author') }}</p>
                </div>
            </div>
        </div>

        <!-- Right side - Login form -->
        <div class="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-gray-50 dark:bg-gray-900 relative">
            <!-- Mobile gradient background -->
            <div class="lg:hidden absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
            
            <div class="w-full max-w-md relative z-10">
                <!-- Mobile logo -->
                <div class="lg:hidden flex justify-center mb-8">
                    <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                        <i class="pi pi-chart-line text-white text-2xl"></i>
                    </div>
                </div>
                
                <!-- Form card -->
                <div class="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700">
                    <!-- Header -->
                    <div class="mb-8">
                        <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{{ t('login.form_title') }}</h1>
                        <p class="text-gray-600 dark:text-gray-400">
                            {{ t('login.form_subtitle') }}
                            <router-link to="/auth/signup" class="font-medium text-indigo-600 dark:text-indigo-400 hover:underline">{{ t('login.create_link') }}</router-link>
                        </p>
                    </div>

                    <form @submit.prevent="handleLogin" class="flex flex-col gap-5">
                        <!-- Email field -->
                        <div class="group">
                            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('login.email_label') }}</label>
                            <div class="relative">
                                <i class="pi pi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors"></i>
                                <InputText 
                                    id="email" 
                                    v-model="email" 
                                    type="email" 
                                    class="w-full !pl-11 !py-3 !rounded-xl !border-gray-200 dark:!border-gray-600 !bg-gray-50 dark:!bg-gray-700/50 focus:!border-indigo-500 focus:!ring-2 focus:!ring-indigo-500/20 transition-all" 
                                    :placeholder="t('login.email_placeholder')" 
                                />
                            </div>
                        </div>

                        <!-- Password field -->
                        <div class="group">
                            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('login.password_label') }}</label>
                            <div class="relative">
                                <i class="pi pi-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors"></i>
                                <InputText 
                                    id="password" 
                                    v-model="password" 
                                    type="password" 
                                    class="w-full !pl-11 !py-3 !rounded-xl !border-gray-200 dark:!border-gray-600 !bg-gray-50 dark:!bg-gray-700/50 focus:!border-indigo-500 focus:!ring-2 focus:!ring-indigo-500/20 transition-all" 
                                    :placeholder="t('login.password_placeholder')" 
                                />
                            </div>
                        </div>
                        
                        <!-- Error message -->
                        <div v-if="errorMessage">
                            <Message severity="error" :closable="false" class="!rounded-xl">{{ errorMessage }}</Message>
                        </div>

                        <!-- Remember me & Forgot password -->
                        <div class="flex items-center justify-between text-sm">
                            <div class="flex items-center gap-2">
                                <Checkbox v-model="checked" inputId="rememberme" :binary="true" class="!rounded-md"></Checkbox>
                                <label for="rememberme" class="text-gray-600 dark:text-gray-400 cursor-pointer">{{ t('login.remember_me') }}</label>
                            </div>
                            <a class="font-medium text-indigo-600 dark:text-indigo-400 hover:underline" href="#">{{ t('login.forgot_password') }}</a>
                        </div>
                        
                        <!-- Submit button -->
                        <Button 
                            type="submit" 
                            :label="t('login.submit_button')" 
                            :loading="loading"
                            class="w-full !py-3 !rounded-xl !bg-gradient-to-r !from-indigo-600 !to-purple-600 !border-0 !shadow-lg hover:!shadow-indigo-500/25 !text-base !font-semibold !mt-2"
                        />
                    </form>
                    
                    <!-- Divider -->
                    <div class="relative my-6">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-4 bg-white dark:bg-gray-800 text-gray-500">{{ t('login.or_continue') || 'or' }}</span>
                        </div>
                    </div>
                    
                    <!-- Back to home -->
                    <router-link 
                        to="/" 
                        class="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-500 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-all font-medium"
                    >
                        <i class="pi pi-arrow-left text-sm"></i>
                        {{ t('login.back_to_home') }}
                    </router-link>
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
