<script setup>
import AppTopbar from './AppTopbar.vue';
</script>

<template>
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
        <AppTopbar />
        <main class="p-4 sm:p-6 lg:p-8">
            <router-view />
        </main>
    </div>
</template>