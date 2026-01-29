<script setup>
import AppTopbar from './AppTopbar.vue';
import GradientBackground from '@/components/shared/GradientBackground.vue';
</script>

<template>
    <div class="min-h-screen relative overflow-hidden">
        <GradientBackground />

        <div class="relative z-10">
            <AppTopbar />
            <main class="p-4 sm:p-6 lg:p-8">
                <router-view />
            </main>
        </div>
    </div>
</template>
