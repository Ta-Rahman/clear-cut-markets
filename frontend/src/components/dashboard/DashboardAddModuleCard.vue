<template>
    <div 
        @click="openConfigurator"
        class="add-module-card h-full border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl
               flex flex-col items-center justify-center text-center p-6 
               cursor-pointer transition-all duration-300 
               hover:border-primary hover:bg-white/50 dark:hover:bg-gray-900/50"
    >
        <i class="pi pi-plus text-4xl text-gray-400 dark:text-gray-600 mb-4"></i>
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">Add New Module</p>
        <p class="text-sm text-gray-500">Click to configure your modules.</p>
    </div>
</template>

<script setup>
const openConfigurator = () => {
    // In the future, this will open the module configurator pop-up.
    console.log('Open Module Configurator');
};
</script>