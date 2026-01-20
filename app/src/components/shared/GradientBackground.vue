<template>
    <div class="absolute inset-0 -z-10">
        <!-- Base gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-5"></div>
        
        <!-- Gradient overlays -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-violet-500/[0.07] via-transparent to-transparent"></div>
            <div class="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-500/[0.07] via-transparent to-transparent"></div>
            
            <!-- Optional blur orbs for landing page style -->
            <template v-if="showOrbs">
                <div class="absolute top-1/4 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-violet-600/[0.05] to-transparent rounded-full blur-3xl transform rotate-45"></div>
                <div class="absolute bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-purple-600/[0.05] to-transparent rounded-full blur-3xl transform -rotate-45"></div>
            </template>
        </div>
        
        <!-- Dot pattern -->
        <div class="absolute inset-0 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] dark:bg-[radial-gradient(#404040_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
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
