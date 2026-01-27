<template>
    <section id="hero-section" class="relative min-h-[90vh] flex items-center justify-center px-4 py-16 overflow-hidden">
        <!-- Floating asset cards (decorative) -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="floating-card floating-card-1">
                <div class="mini-card bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-xl p-3 shadow-2xl border border-white/20">
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                            <span class="text-white text-xs font-bold">₿</span>
                        </div>
                        <div>
                            <div class="text-xs font-bold text-gray-900 dark:text-white">BTC</div>
                            <div class="text-[10px] text-green-500 font-semibold">+2.4%</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="floating-card floating-card-2">
                <div class="mini-card bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-xl p-3 shadow-2xl border border-white/20">
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                            <i class="pi pi-building text-white text-xs"></i>
                        </div>
                        <div>
                            <div class="text-xs font-bold text-gray-900 dark:text-white">AAPL</div>
                            <div class="text-[10px] text-green-500 font-semibold">+1.8%</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="floating-card floating-card-3">
                <div class="mini-card bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-xl p-3 shadow-2xl border border-white/20">
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                            <i class="pi pi-chart-pie text-white text-xs"></i>
                        </div>
                        <div>
                            <div class="text-xs font-bold text-gray-900 dark:text-white">SPY</div>
                            <div class="text-[10px] text-green-500 font-semibold">+0.9%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative z-10 text-center max-w-5xl mx-auto">
            <!-- Badge -->
            <div class="mb-6 inline-block animate-fade-in-down">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('hero.badge') }}</span>
                </div>
            </div>
            
            <!-- Main headline -->
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-down animation-delay-100 leading-tight">
                Your Assets
                <br />
                <span class="text-gradient">Clear Cut Insights</span>
                <br />
                <span class="text-gray-600 dark:text-gray-400">Zero Noise</span>
            </h1>
            
            <!-- Subheadline -->
            <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-down animation-delay-200 leading-relaxed px-2">
                {{ t('hero.subtitle') }}
            </p>
            
            <!-- CTA Section -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-down animation-delay-300 px-4 sm:px-0">
                <div class="relative group w-full sm:w-auto max-w-sm sm:max-w-md">
                    <div class="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                    <div class="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0 bg-white dark:bg-gray-900 rounded-xl p-3 sm:p-1.5 shadow-xl">
                        <input 
                            v-model="email" 
                            type="email"
                            :placeholder="t('hero.form.placeholder')" 
                            @keyup.enter="joinWaitlist"
                            class="w-full sm:w-56 px-4 py-2.5 sm:py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none text-base sm:text-sm rounded-lg"
                            :class="{'shake-animation': emailError}"
                        />
                        <Button 
                            :label="loading ? '' : t('hero.form.button')" 
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            class="w-full sm:w-auto !bg-gradient-to-r !from-indigo-600 !to-purple-600 !border-0 !shadow-lg hover:!shadow-indigo-500/25 !transition-all !duration-300 whitespace-nowrap !py-3 sm:!py-2"
                            @click="joinWaitlist"
                            :loading="loading"
                        />
                    </div>
                </div>
            </div>
            
            <!-- Waitlist count badge -->
            <div v-if="waitlistDisplayCount" class="mb-6 animate-fade-in-down animation-delay-350">
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold">
                    <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    {{ t('hero.waitlist_count', { count: waitlistDisplayCount }) }}
                </span>
            </div>
            
            <!-- Message -->
            <Transition name="fade">
                <div v-if="message" class="mb-6 animate-fade-in">
                    <Message :severity="messageType" :closable="false" class="!inline-flex">{{ message }}</Message>
                </div>
            </Transition>

            <!-- Social proof -->
            <div class="animate-fade-in-up animation-delay-400">
                <p class="text-sm text-gray-500 dark:text-gray-500 mb-4">{{ t('hero.social_proof') }}</p>
                <div class="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                    <div class="stat-item group cursor-default">
                        <div class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {{ t('hero.stats.news_sources') }}
                        </div>
                        <div class="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">{{ t('hero.stats.news_sources_text') }}</div>
                    </div>
                    
                    <div class="hidden sm:block w-px h-10 bg-gray-300 dark:bg-gray-700"></div>
                    
                    <div class="stat-item group cursor-default">
                        <div class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors">
                            {{ t('hero.stats.monitoring') }}
                        </div>
                        <div class="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">{{ t('hero.stats.monitoring_text') }}</div>
                    </div>
                    
                    <div class="hidden sm:block w-px h-10 bg-gray-300 dark:bg-gray-700"></div>
                    
                    <div class="stat-item group cursor-default">
                        <div class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-teal-500 transition-colors">
                            {{ t('hero.stats.alert_speed') }}
                        </div>
                        <div class="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">{{ t('hero.stats.alert_speed_text') }}</div>
                    </div>
                </div>
                
                <!-- Asset class badges -->
                <div class="flex justify-center gap-3 mt-6">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-medium">
                        <i class="pi pi-building text-[10px]"></i>
                        {{ t('hero.asset_badges.stocks') }}
                    </span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium">
                        <i class="pi pi-bitcoin text-[10px]"></i>
                        {{ t('hero.asset_badges.crypto') }}
                    </span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-xs font-medium">
                        <i class="pi pi-chart-pie text-[10px]"></i>
                        {{ t('hero.asset_badges.etfs') }}
                    </span>
                </div>
            </div>
        </div>
        
        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div class="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-2">
                <div class="w-1.5 h-2.5 bg-gray-400 dark:bg-gray-600 rounded-full animate-scroll-down"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Button from 'primevue/button';
import Message from 'primevue/message';
import { supabase } from '@/supabase';

const { t } = useI18n();

const props = defineProps({
    animatedWaitlist: { type: Number, default: 0 },
    animatedSaved: { type: Number, default: 0 },
    animatedModules: { type: Number, default: 0 },
    animatedSources: { type: Number, default: 0 }
});

const email = ref('');
const loading = ref(false);
const message = ref('');
const messageType = ref('success');
const emailError = ref(false);
const animatedVolume = ref(0);
const animatedAssets = ref(0);

// Waitlist state
const waitlistCount = ref(null);

// Display count in increments of 10 (e.g., "10+", "20+", "30+")
const waitlistDisplayCount = computed(() => {
    if (waitlistCount.value === null || waitlistCount.value < 10) return null;
    const rounded = Math.floor(waitlistCount.value / 10) * 10;
    return `${rounded}+`;
});

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const animateValue = (refVar, end, duration) => {
    const start = 0;
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            refVar.value = end;
            clearInterval(timer);
        } else {
            refVar.value = Math.floor(current);
        }
    }, 16);
};

// Fetch waitlist count from Supabase
const fetchWaitlistCount = async () => {
    try {
        const { count, error } = await supabase
            .from('waitlist')
            .select('*', { count: 'exact', head: true });
        
        if (error) {
            console.error('Waitlist count error:', error.message);
            return;
        }
        
        waitlistCount.value = count;
    } catch (e) {
        console.error('Waitlist fetch failed:', e);
    }
};

onMounted(() => {
    setTimeout(() => {
        animateValue(animatedVolume, 2.4, 2000);
        animateValue(animatedAssets, 500, 2500);
    }, 500);
    
    // Fetch waitlist count on mount
    fetchWaitlistCount();
});

const joinWaitlist = async () => {
    if (!email.value || !emailRegex.test(email.value)) {
        emailError.value = true;
        message.value = 'Please enter a valid email address';
        messageType.value = 'error';
        setTimeout(() => { emailError.value = false; }, 500);
        return;
    }

    loading.value = true;
    message.value = '';

    try {
        const { error } = await supabase
            .from('waitlist')
            .insert({ email: email.value });

        if (error) {
            // Check if it's a duplicate email error
            if (error.code === '23505') {
                message.value = 'This email is already on the waitlist!';
                messageType.value = 'warn';
            } else {
                throw error;
            }
        } else {
            message.value = "You're on the waitlist! We'll notify you when we launch.";
            messageType.value = 'success';
            email.value = '';
            
            // Update count
            if (waitlistCount.value !== null) {
                waitlistCount.value++;
            }
            fetchWaitlistCount();
        }
    } catch (error) {
        console.error('Join waitlist error:', error);
        message.value = 'Something went wrong. Please try again.';
        messageType.value = 'error';
    } finally {
        loading.value = false;
        setTimeout(() => { message.value = ''; }, 5000);
    }
};
</script>

<style scoped>
.text-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% 200%;
    animation: gradient-shift 8s ease infinite;
}

@keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

/* Floating cards */
.floating-card {
    position: absolute;
    opacity: 0;
    animation: float-in 1s ease forwards;
}

.floating-card-1 {
    top: 15%;
    left: 5%;
    animation-delay: 0.8s;
    animation-name: float-in, float-1;
    animation-duration: 1s, 6s;
    animation-timing-function: ease, ease-in-out;
    animation-fill-mode: forwards, none;
    animation-iteration-count: 1, infinite;
    animation-delay: 0.8s, 1.8s;
}

.floating-card-2 {
    top: 25%;
    right: 8%;
    animation-delay: 1s;
    animation-name: float-in, float-2;
    animation-duration: 1s, 7s;
    animation-timing-function: ease, ease-in-out;
    animation-fill-mode: forwards, none;
    animation-iteration-count: 1, infinite;
    animation-delay: 1s, 2s;
}

.floating-card-3 {
    bottom: 25%;
    left: 10%;
    animation-delay: 1.2s;
    animation-name: float-in, float-3;
    animation-duration: 1s, 8s;
    animation-timing-function: ease, ease-in-out;
    animation-fill-mode: forwards, none;
    animation-iteration-count: 1, infinite;
    animation-delay: 1.2s, 2.2s;
}

@keyframes float-in {
    from { opacity: 0; transform: translateY(20px) scale(0.9); }
    to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes float-1 {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(2deg); }
}

@keyframes float-2 {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(-2deg); }
}

@keyframes float-3 {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(1deg); }
}

.mini-card {
    transform: perspective(1000px) rotateY(-5deg);
    transition: transform 0.3s ease;
}

/* Scroll indicator */
@keyframes scroll-down {
    0% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(6px); }
}

.animate-scroll-down {
    animation: scroll-down 1.5s ease-in-out infinite;
}

/* Shake animation */
.shake-animation { animation: shake 0.5s; }
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    75% { transform: translateX(8px); }
}

/* Fade transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Animation utilities */
.animate-fade-in-down {
    animation: fadeInDown 0.8s ease-out both;
}

.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out both;
}

@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.animation-delay-100 { animation-delay: 0.1s; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-400 { animation-delay: 0.4s; }

/* Hide floating cards on mobile, show on tablet+ */
@media (max-width: 640px) {
    .floating-card { display: none; }
}

@media (min-width: 641px) and (max-width: 1024px) {
    .floating-card {
        transform: scale(0.85);
    }
    
    .floating-card-1 {
        top: 10%;
        left: 2%;
    }
    
    .floating-card-2 {
        top: 18%;
        right: 2%;
    }
    
    .floating-card-3 {
        bottom: 22%;
        left: 3%;
    }
}
</style>
