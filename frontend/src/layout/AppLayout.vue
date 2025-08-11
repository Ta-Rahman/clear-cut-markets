<script setup>
import AppTopbar from './AppTopbar.vue';
</script>

<template>
    <div class="min-h-screen relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-5 -z-10"></div>
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute inset-0">
                <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-violet-500/[0.07] via-transparent to-transparent"></div>
                <div class="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-500/[0.07] via-transparent to-transparent"></div>
            </div>
        </div>
        <div class="absolute inset-0 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] dark:bg-[radial-gradient(#404040_1px,transparent_1px)] [background-size:20px_20px] opacity-20 -z-10"></div>

        <div class="relative z-10">
            <AppTopbar />
            <main class="p-4 sm:p-6 lg:p-8">
                <router-view />
            </main>
        </div>
    </div>
</template>