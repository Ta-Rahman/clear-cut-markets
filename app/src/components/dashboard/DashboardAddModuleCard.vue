<template>
    <div class="add-card group h-full flex flex-col items-center justify-center text-center cursor-pointer">
        <div class="w-12 h-12 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 flex items-center justify-center mb-3 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors">
            <i class="pi pi-plus text-xl text-gray-400 dark:text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"></i>
        </div>
        <p class="text-sm font-semibold text-gray-700 dark:text-gray-300">Add Module</p>
        <p class="text-xs text-gray-500 dark:text-gray-400">Track a new asset</p>
    </div>
</template>

<style scoped>
.add-card {
    position: relative;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(12px);
    border: 2px dashed rgba(0, 0, 0, 0.08);
    border-radius: 1.5rem;
    padding: 1.5rem;
    min-height: 280px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.add-card:hover {
    border-color: rgba(99, 102, 241, 0.4);
    background: rgba(255, 255, 255, 0.6);
}
</style>

<style>
.app-dark .add-card {
    background: rgba(17, 24, 39, 0.4);
    border-color: rgba(255, 255, 255, 0.08);
}

.app-dark .add-card:hover {
    background: rgba(17, 24, 39, 0.6);
    border-color: rgba(99, 102, 241, 0.4);
}
</style>
