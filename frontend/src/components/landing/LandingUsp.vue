<template>
    <Transition name="usp-fade">
        <div v-if="isVisible" class="px-4 py-16 md:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">See Connections Others Miss</h2>
                <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Our AI acts as your early-warning system, connecting indirectly related news to your specific holdings.
                </p>
            </div>

            <div class="max-w-5xl mx-auto p-8 md:p-12 bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:items-start">

                    <div class="flex flex-col items-center text-center">
                        <i class="pi pi-globe text-4xl text-blue-500 mb-4"></i>
                        <p class="text-xl font-semibold text-gray-800 dark:text-gray-200">Market Event</p>
                        <div class="mt-4 p-4 w-full border rounded-lg bg-gray-50 dark:bg-gray-700/50 dark:border-gray-600">
                            <p class="text-lg font-bold text-gray-900 dark:text-gray-100">"Global Chip Shortage Worsens"</p>
                            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Source: Global Tech Times</p>
                        </div>
                    </div>

                    <div class="flex flex-col items-center text-center">
                        <div class="h-10 md:h-0">
                            <i class="pi pi-arrow-down text-violet-400 text-3xl md:hidden"></i>
                        </div>
                        <i class="pi pi-chart-pie text-4xl text-green-500 my-4 md:mb-4 md:mt-0"></i>
                        <p class="text-xl font-semibold text-gray-800 dark:text-gray-200">Potential Impact On Your Portfolio</p>
                        <div class="flex justify-center gap-4 mt-4 w-full">
                            <div class="p-4 w-1/2 border rounded-lg bg-gray-50 dark:bg-gray-700/50 dark:border-gray-600">
                                <p class="text-lg font-bold text-gray-900 dark:text-gray-100">TSLA</p>
                                <div class="flex items-center justify-center gap-2 mt-1">
                                    <span class="text-base font-semibold text-red-500/90 dark:text-red-400/90">Potential Decline</span>
                                    <i class="pi pi-arrow-circle-down text-red-500/90 dark:text-red-400/90"></i>
                                </div>
                            </div>
                            <div class="p-4 w-1/2 border rounded-lg bg-gray-50 dark:bg-gray-700/50 dark:border-gray-600">
                                <p class="text-lg font-bold text-gray-900 dark:text-gray-100">NVDA</p>
                                <div class="flex items-center justify-center gap-2 mt-1">
                                    <span class="text-base font-semibold text-red-500/90 dark:text-red-400/90">Potential Decline</span>
                                    <i class="pi pi-arrow-circle-down text-red-500/90 dark:text-red-400/90"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div class="bg-violet-100/50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-500/30 text-violet-800 dark:text-violet-300 rounded-lg p-4 flex items-center gap-4">
                        <i class="pi pi-sparkles text-2xl"></i>
                        <div>
                            <p class="font-bold">Clear Cut Alert:</p>
                            <p>Worsening chip shortages may negatively impact your **TSLA** and **NVDA** holdings. <a href="#" class="font-semibold underline hover:text-violet-200">See AI Analysis</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// This reactive ref controls the visibility for the transition.
const isVisible = ref(false);

// When the component mounts, set isVisible to true.
// This will trigger the animation on initial load AND after every hot reload.
onMounted(() => {
    isVisible.value = true;
});
</script>

<style scoped>
/* A simple fade-in and slide-up transition for the component */
.usp-fade-enter-active {
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.usp-fade-enter-from {
    opacity: 0;
    transform: translateY(20px);
}
</style>