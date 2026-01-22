<template>
    <div class="absolute inset-0 -z-10 overflow-hidden min-h-full">
        <!-- Base gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors duration-300"></div>
        
        <!-- Gradient overlays -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-violet-500/[0.07] via-transparent to-transparent"></div>
            <div class="absolute bottom-0 right-0 w-full h-[50vh] bg-gradient-to-t from-purple-500/[0.07] via-transparent to-transparent"></div>
            
            <!-- Floating blur orbs - distributed throughout the page -->
            <template v-if="showOrbs">
                <!-- Hero section orbs -->
                <div class="floating-orb absolute top-0 -left-[200px] w-[600px] h-[600px] bg-gradient-to-br from-violet-500/10 to-indigo-500/5 dark:from-violet-500/[0.08] dark:to-indigo-500/[0.03] rounded-full blur-3xl"></div>
                <div class="floating-orb floating-orb-delayed absolute top-[5vh] -right-[200px] w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/10 to-pink-500/5 dark:from-purple-500/[0.08] dark:to-pink-500/[0.03] rounded-full blur-3xl"></div>
                
                <!-- Modules Demo section orbs -->
                <div class="floating-orb floating-orb-slow absolute top-[100vh] -left-[150px] w-[400px] h-[400px] bg-gradient-to-r from-indigo-500/10 to-cyan-500/5 dark:from-indigo-500/[0.06] dark:to-cyan-500/[0.03] rounded-full blur-3xl"></div>
                <div class="floating-orb floating-orb-delayed absolute top-[120vh] -right-[150px] w-[450px] h-[450px] bg-gradient-to-l from-amber-500/8 to-orange-500/4 dark:from-amber-500/[0.05] dark:to-orange-500/[0.02] rounded-full blur-3xl"></div>
                
                <!-- USP section orbs -->
                <div class="floating-orb absolute top-[200vh] -left-[200px] w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/8 to-pink-500/4 dark:from-purple-500/[0.05] dark:to-pink-500/[0.02] rounded-full blur-3xl"></div>
                <div class="floating-orb floating-orb-slow absolute top-[220vh] -right-[200px] w-[400px] h-[400px] bg-gradient-to-l from-teal-500/8 to-emerald-500/4 dark:from-teal-500/[0.05] dark:to-emerald-500/[0.02] rounded-full blur-3xl"></div>
                
                <!-- Features section orbs -->
                <div class="floating-orb floating-orb-delayed absolute top-[300vh] -left-[150px] w-[450px] h-[450px] bg-gradient-to-r from-cyan-500/10 to-blue-500/5 dark:from-cyan-500/[0.06] dark:to-blue-500/[0.03] rounded-full blur-3xl"></div>
                <div class="floating-orb absolute top-[320vh] -right-[150px] w-[350px] h-[350px] bg-gradient-to-l from-indigo-500/8 to-violet-500/4 dark:from-indigo-500/[0.05] dark:to-violet-500/[0.02] rounded-full blur-3xl"></div>
                
                <!-- Use Cases section orbs -->
                <div class="floating-orb floating-orb-slow absolute top-[400vh] -left-[200px] w-[500px] h-[500px] bg-gradient-to-tr from-violet-500/10 to-purple-500/5 dark:from-violet-500/[0.06] dark:to-purple-500/[0.03] rounded-full blur-3xl"></div>
                <div class="floating-orb absolute top-[420vh] -right-[200px] w-[450px] h-[450px] bg-gradient-to-l from-pink-500/8 to-rose-500/4 dark:from-pink-500/[0.05] dark:to-rose-500/[0.02] rounded-full blur-3xl"></div>
                
                <!-- Pricing section orbs -->
                <div class="floating-orb floating-orb-delayed absolute top-[500vh] -left-[150px] w-[400px] h-[400px] bg-gradient-to-r from-teal-500/10 to-emerald-500/5 dark:from-teal-500/[0.06] dark:to-emerald-500/[0.03] rounded-full blur-3xl"></div>
                <div class="floating-orb absolute top-[520vh] -right-[200px] w-[500px] h-[500px] bg-gradient-to-tl from-amber-500/8 to-yellow-500/4 dark:from-amber-500/[0.05] dark:to-yellow-500/[0.02] rounded-full blur-3xl"></div>
                
                <!-- FAQ/Footer section orbs -->
                <div class="floating-orb floating-orb-slow absolute top-[600vh] -left-[200px] w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/10 to-blue-500/5 dark:from-indigo-500/[0.06] dark:to-blue-500/[0.03] rounded-full blur-3xl"></div>
                <div class="floating-orb absolute top-[650vh] -right-[150px] w-[600px] h-[600px] bg-gradient-to-tl from-purple-500/10 to-violet-500/5 dark:from-purple-500/[0.08] dark:to-violet-500/[0.03] rounded-full blur-3xl"></div>
            </template>
        </div>
        
        <!-- Dot pattern -->
        <div class="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:24px_24px] opacity-30 dark:opacity-20"></div>
    </div>
</template>

<script setup>
defineProps({
    /**
     * Whether to show the decorative blur orbs (used on landing page)
     */
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
</style>
