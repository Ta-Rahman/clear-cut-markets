<template>
    <div class="gradient-bg fixed -z-10 overflow-hidden" style="top: 0; left: 0; right: 0; bottom: -50px;">
        <!-- Base gradient -->
        <div class="base-gradient absolute inset-0 transition-colors duration-300" style="bottom: -50px;"></div>
        
        <!-- Animated mesh gradient - always visible -->
        <div class="mesh-gradient"></div>
        
        <!-- Gradient overlays -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="gradient-overlay-top absolute top-0 left-0 w-full h-1/2"></div>
            <div class="gradient-overlay-bottom absolute bottom-0 right-0 w-full h-1/2"></div>
            
            <!-- Floating blur orbs - only on landing -->
            <template v-if="showOrbs">
                <!-- Top orbs -->
                <div class="floating-orb orb-1 absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full blur-3xl"></div>
                <div class="floating-orb floating-orb-delayed orb-2 absolute -top-[5%] -right-[10%] w-[400px] h-[400px] rounded-full blur-3xl"></div>
                
                <!-- Middle orbs -->
                <div class="floating-orb floating-orb-slow orb-3 absolute top-[30%] -left-[15%] w-[450px] h-[450px] rounded-full blur-3xl"></div>
                <div class="floating-orb orb-4 absolute top-[40%] -right-[15%] w-[400px] h-[400px] rounded-full blur-3xl"></div>
                
                <!-- Bottom orbs -->
                <div class="floating-orb floating-orb-delayed orb-5 absolute top-[60%] -left-[10%] w-[350px] h-[350px] rounded-full blur-3xl"></div>
                <div class="floating-orb floating-orb-slow orb-6 absolute -bottom-[10%] -right-[10%] w-[500px] h-[500px] rounded-full blur-3xl"></div>
            </template>
        </div>
        
        <!-- Subtle dot pattern -->
        <div class="dot-pattern absolute inset-0"></div>
    </div>
</template>

<script setup>
defineProps({
    showOrbs: {
        type: Boolean,
        default: false
    }
});
</script>

<style scoped>
.floating-orb {
    animation: float 20s ease-in-out infinite;
}

.floating-orb-delayed {
    animation-delay: -7s;
}

.floating-orb-slow {
    animation-duration: 30s;
    animation-delay: -15s;
}

@keyframes float {
    0%, 100% {
        transform: translate(0, 0) scale(1);
    }
    25% {
        transform: translate(30px, -30px) scale(1.05);
    }
    50% {
        transform: translate(-20px, 20px) scale(0.95);
    }
    75% {
        transform: translate(20px, 10px) scale(1.02);
    }
}

@keyframes mesh-move {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(1%, 1%) rotate(0.5deg); }
    50% { transform: translate(0, 2%) rotate(0deg); }
    75% { transform: translate(-1%, 1%) rotate(-0.5deg); }
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
    .mesh-gradient,
    .floating-orb {
        animation: none;
    }
}

/* Mobile optimizations */
@media (max-width: 768px) {
    .floating-orb {
        transform: scale(0.6);
        animation-duration: 30s;
    }
    
    .mesh-gradient {
        animation-duration: 45s;
    }
}
</style>

<style>
/* Unscoped styles for proper dark mode support */

/* Base gradient */
.base-gradient {
    background: linear-gradient(to bottom right, #f9fafb, #ffffff);
}

.app-dark .base-gradient {
    background: linear-gradient(to bottom right, #030712, #111827);
}

/* Mesh gradient */
.mesh-gradient {
    position: absolute;
    inset: -20%;
    background: 
        radial-gradient(at 40% 20%, rgba(99, 102, 241, 0.12) 0px, transparent 50%),
        radial-gradient(at 80% 10%, rgba(167, 139, 250, 0.08) 0px, transparent 50%),
        radial-gradient(at 10% 60%, rgba(236, 72, 153, 0.06) 0px, transparent 50%),
        radial-gradient(at 90% 50%, rgba(20, 184, 166, 0.06) 0px, transparent 50%),
        radial-gradient(at 20% 90%, rgba(245, 158, 11, 0.06) 0px, transparent 50%),
        radial-gradient(at 70% 80%, rgba(99, 102, 241, 0.08) 0px, transparent 50%);
    animation: mesh-move 30s ease infinite;
}

.app-dark .mesh-gradient {
    background: 
        radial-gradient(at 40% 20%, rgba(99, 102, 241, 0.08) 0px, transparent 50%),
        radial-gradient(at 80% 10%, rgba(167, 139, 250, 0.06) 0px, transparent 50%),
        radial-gradient(at 10% 60%, rgba(236, 72, 153, 0.04) 0px, transparent 50%),
        radial-gradient(at 90% 50%, rgba(20, 184, 166, 0.04) 0px, transparent 50%),
        radial-gradient(at 20% 90%, rgba(245, 158, 11, 0.03) 0px, transparent 50%),
        radial-gradient(at 70% 80%, rgba(99, 102, 241, 0.06) 0px, transparent 50%);
}

/* Gradient overlays */
.gradient-overlay-top {
    background: linear-gradient(to bottom, rgba(139, 92, 246, 0.05), transparent);
}

.gradient-overlay-bottom {
    background: linear-gradient(to top, rgba(168, 85, 247, 0.05), transparent);
}

.app-dark .gradient-overlay-top {
    background: linear-gradient(to bottom, rgba(139, 92, 246, 0.08), transparent);
}

.app-dark .gradient-overlay-bottom {
    background: linear-gradient(to top, rgba(168, 85, 247, 0.08), transparent);
}

/* Dot pattern - very subtle grid overlay */
.dot-pattern {
    background-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
    background-size: 24px 24px;
}

.app-dark .dot-pattern {
    background-image: radial-gradient(circle at center, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 24px 24px;
}

/* Floating orbs - light mode */
.orb-1 { background: linear-gradient(to bottom right, rgba(139, 92, 246, 0.10), rgba(99, 102, 241, 0.05)); }
.orb-2 { background: linear-gradient(to bottom left, rgba(168, 85, 247, 0.10), rgba(236, 72, 153, 0.05)); }
.orb-3 { background: linear-gradient(to right, rgba(99, 102, 241, 0.08), rgba(6, 182, 212, 0.04)); }
.orb-4 { background: linear-gradient(to left, rgba(20, 184, 166, 0.08), rgba(16, 185, 129, 0.04)); }
.orb-5 { background: linear-gradient(to top right, rgba(245, 158, 11, 0.08), rgba(249, 115, 22, 0.04)); }
.orb-6 { background: linear-gradient(to top left, rgba(168, 85, 247, 0.10), rgba(139, 92, 246, 0.05)); }

/* Floating orbs - dark mode */
.app-dark .orb-1 { background: linear-gradient(to bottom right, rgba(139, 92, 246, 0.06), rgba(99, 102, 241, 0.03)); }
.app-dark .orb-2 { background: linear-gradient(to bottom left, rgba(168, 85, 247, 0.06), rgba(236, 72, 153, 0.03)); }
.app-dark .orb-3 { background: linear-gradient(to right, rgba(99, 102, 241, 0.05), rgba(6, 182, 212, 0.025)); }
.app-dark .orb-4 { background: linear-gradient(to left, rgba(20, 184, 166, 0.05), rgba(16, 185, 129, 0.025)); }
.app-dark .orb-5 { background: linear-gradient(to top right, rgba(245, 158, 11, 0.05), rgba(249, 115, 22, 0.025)); }
.app-dark .orb-6 { background: linear-gradient(to top left, rgba(168, 85, 247, 0.06), rgba(139, 92, 246, 0.03)); }
</style>
