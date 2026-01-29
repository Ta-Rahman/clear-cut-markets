<template>
    <div class="add-card group h-full flex flex-col items-center justify-center text-center cursor-pointer">
        <!-- Animated rings -->
        <div class="relative mb-3 sm:mb-4">
            <div class="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-dashed border-indigo-200 dark:border-indigo-800 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="absolute -inset-1.5 sm:-inset-2 rounded-full border border-dashed border-purple-200 dark:border-purple-800 animate-spin-reverse opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i class="pi pi-plus text-xl sm:text-2xl text-indigo-500 dark:text-indigo-400 group-hover:rotate-90 transition-transform duration-300"></i>
            </div>
        </div>
        
        <p class="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Add Module</p>
        <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5">Track assets</p>
    </div>
</template>

<style scoped>
.add-card {
    position: relative;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(12px);
    border: 2px dashed rgba(0, 0, 0, 0.08);
    border-radius: 0.875rem;
    padding: 0.75rem;
    min-height: auto;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
}

@media (min-width: 576px) {
    .add-card {
        border-radius: 1.25rem;
        padding: 1rem;
    }
}

@media (min-width: 992px) {
    .add-card {
        padding: 1.25rem;
    }
}

.add-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(139, 92, 246, 0.03) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.add-card:hover::before {
    opacity: 1;
}

.add-card:hover {
    border-color: rgba(99, 102, 241, 0.4);
    background: rgba(255, 255, 255, 0.7);
    transform: translateY(-2px);
}

@keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes spin-reverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
}

.animate-spin-slow {
    animation: spin-slow 8s linear infinite;
}

.animate-spin-reverse {
    animation: spin-reverse 12s linear infinite;
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
