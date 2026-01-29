<template>
    <Transition name="loader-fade">
        <div v-if="isVisible" class="loader-overlay">
            <!-- Animated background - muted and professional -->
            <div class="loader-bg">
                <div class="gradient-orb orb-1"></div>
                <div class="gradient-orb orb-2"></div>
                <div class="gradient-orb orb-3"></div>
            </div>
            
            <!-- Content -->
            <div class="loader-content">
                <!-- Logo/Icon -->
                <div class="logo-container">
                    <div class="logo-ring"></div>
                    <div class="logo-ring ring-2"></div>
                    <div class="logo-icon">
                        <i class="pi pi-chart-line"></i>
                    </div>
                </div>
                
                <!-- Animated chart bars -->
                <div class="chart-bars">
                    <div class="bar bar-1"></div>
                    <div class="bar bar-2"></div>
                    <div class="bar bar-3"></div>
                    <div class="bar bar-4"></div>
                    <div class="bar bar-5"></div>
                </div>
                
                <!-- Text -->
                <div class="loader-text">
                    <h2 class="loader-title">{{ title }}</h2>
                    <p class="loader-subtitle">
                        <span class="typing-text">{{ displayedSubtitle }}</span>
                        <span class="cursor">|</span>
                    </p>
                </div>
                
                <!-- Progress indicator -->
                <div class="progress-container">
                    <div class="progress-track">
                        <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
                        <div class="progress-glow" :style="{ left: `${progress}%` }"></div>
                    </div>
                    <span class="progress-text">{{ progress }}%</span>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
    isLoading: {
        type: Boolean,
        default: true
    },
    progress: {
        type: Number,
        default: 0
    },
    minDisplayTime: {
        type: Number,
        default: 1500
    }
});

const emit = defineEmits(['complete']);
const { t } = useI18n();

const isVisible = ref(true);
const startTime = ref(Date.now());
const displayedSubtitle = ref('');

const title = computed(() => t('dashboard.loader.title', 'Loading Your Portfolio'));
const subtitle = computed(() => t('dashboard.loader.subtitle', 'Fetching real-time market data...'));

let typingInterval = null;
const startTypingAnimation = () => {
    let index = 0;
    displayedSubtitle.value = '';
    
    typingInterval = setInterval(() => {
        if (index < subtitle.value.length) {
            displayedSubtitle.value += subtitle.value[index];
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 50);
};

watch(() => props.isLoading, (loading) => {
    if (!loading) {
        const elapsed = Date.now() - startTime.value;
        const remaining = Math.max(0, props.minDisplayTime - elapsed);
        
        setTimeout(() => {
            isVisible.value = false;
            emit('complete');
        }, remaining);
    }
}, { immediate: true });

onMounted(() => {
    startTime.value = Date.now();
    startTypingAnimation();
});

onUnmounted(() => {
    if (typingInterval) clearInterval(typingInterval);
});
</script>

<style scoped>
.loader-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    overflow: hidden;
}

/* Animated background orbs */
.loader-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    animation: float 12s ease-in-out infinite;
}

/* Light mode orbs - very subtle, desaturated */
.orb-1 {
    width: 500px;
    height: 500px;
    background: linear-gradient(135deg, #94a3b8, #cbd5e1);
    opacity: 0.25;
    top: -150px;
    left: -150px;
    animation-delay: 0s;
}

.orb-2 {
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, #a5b4c7, #c7d2e0);
    opacity: 0.2;
    bottom: -100px;
    right: -100px;
    animation-delay: -3s;
}

.orb-3 {
    width: 350px;
    height: 350px;
    background: linear-gradient(135deg, #9ca3af, #d1d5db);
    opacity: 0.15;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: -6s;
}

@keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(20px, -20px) scale(1.05); }
    66% { transform: translate(-15px, 15px) scale(0.95); }
}

/* Content container */
.loader-content {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
}

/* Logo animation */
.logo-container {
    position: relative;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-ring {
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    border-top-color: #6366f1;
    border-radius: 50%;
    animation: spin 1.5s linear infinite;
}

.logo-ring.ring-2 {
    inset: 12px;
    border-top-color: #818cf8;
    animation-direction: reverse;
    animation-duration: 2s;
}

.logo-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 40px rgba(99, 102, 241, 0.2);
    animation: pulse 2s ease-in-out infinite;
}

.logo-icon i {
    font-size: 1.75rem;
    color: white;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

/* Chart bars animation */
.chart-bars {
    display: flex;
    align-items: flex-end;
    gap: 6px;
    height: 50px;
    padding: 0 1rem;
}

.bar {
    width: 8px;
    background: linear-gradient(to top, #6366f1, #a78bfa);
    border-radius: 4px;
    animation: barPulse 1.2s ease-in-out infinite;
}

.bar-1 { height: 20px; animation-delay: 0s; }
.bar-2 { height: 35px; animation-delay: 0.1s; }
.bar-3 { height: 25px; animation-delay: 0.2s; }
.bar-4 { height: 45px; animation-delay: 0.3s; }
.bar-5 { height: 30px; animation-delay: 0.4s; }

@keyframes barPulse {
    0%, 100% { 
        transform: scaleY(1);
        opacity: 0.7;
    }
    50% { 
        transform: scaleY(1.3);
        opacity: 1;
    }
}

/* Text */
.loader-text {
    text-align: center;
}

.loader-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #4f46e5, #7c3aed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.loader-subtitle {
    font-size: 0.95rem;
    color: #64748b;
    min-height: 1.5em;
}

.cursor {
    animation: blink 1s step-end infinite;
    color: #6366f1;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

/* Progress bar */
.progress-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    width: 200px;
}

.progress-track {
    position: relative;
    width: 100%;
    height: 4px;
    background: rgba(99, 102, 241, 0.15);
    border-radius: 2px;
    overflow: visible;
}

.progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    border-radius: 2px;
    transition: width 0.3s ease-out;
}

.progress-glow {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    background: #8b5cf6;
    border-radius: 50%;
    filter: blur(8px);
    opacity: 0.5;
    transition: left 0.3s ease-out;
}

.progress-text {
    font-size: 0.8rem;
    font-weight: 600;
    color: #6366f1;
}

/* Fade transition */
.loader-fade-enter-active {
    transition: opacity 0.3s ease;
}

.loader-fade-leave-active {
    transition: opacity 0.5s ease;
}

.loader-fade-enter-from,
.loader-fade-leave-to {
    opacity: 0;
}

/* Mobile adjustments */
@media (max-width: 640px) {
    .logo-container {
        width: 100px;
        height: 100px;
    }
    
    .logo-ring.ring-2 {
        inset: 10px;
    }
    
    .logo-icon {
        width: 50px;
        height: 50px;
    }
    
    .logo-icon i {
        font-size: 1.5rem;
    }
    
    .loader-title {
        font-size: 1.25rem;
    }
    
    .chart-bars {
        height: 40px;
    }
    
    .bar {
        width: 6px;
    }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
    .gradient-orb,
    .logo-ring,
    .logo-icon,
    .bar,
    .cursor {
        animation: none;
    }
    
    .progress-bar,
    .progress-glow {
        transition: none;
    }
}
</style>

<!-- Non-scoped styles for dark mode (app-dark is on parent element) -->
<style>
.app-dark .loader-overlay {
    background: linear-gradient(135deg, #030712 0%, #0f172a 100%);
}

/* Dark mode orbs - very dark and subtle */
.app-dark .orb-1 {
    background: linear-gradient(135deg, #1e293b, #334155);
    opacity: 0.4;
}

.app-dark .orb-2 {
    background: linear-gradient(135deg, #1e3a5f, #1e293b);
    opacity: 0.3;
}

.app-dark .orb-3 {
    background: linear-gradient(135deg, #312e81, #1e1b4b);
    opacity: 0.25;
}

.app-dark .logo-ring {
    border-top-color: #818cf8;
}

.app-dark .logo-ring.ring-2 {
    border-top-color: #6366f1;
}

.app-dark .logo-icon {
    box-shadow: 0 10px 40px rgba(99, 102, 241, 0.15);
}

.app-dark .bar {
    background: linear-gradient(to top, #4f46e5, #818cf8);
}

.app-dark .loader-title {
    background: linear-gradient(135deg, #818cf8, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.app-dark .loader-subtitle {
    color: #94a3b8;
}

.app-dark .cursor {
    color: #818cf8;
}

.app-dark .progress-track {
    background: rgba(99, 102, 241, 0.2);
}

.app-dark .progress-glow {
    opacity: 0.4;
}

.app-dark .progress-text {
    color: #818cf8;
}
</style>
