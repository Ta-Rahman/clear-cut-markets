<template>
    <div id="features" class="px-4 py-8 md:px-6 lg:px-8">
        <h2 class="text-center text-gray-900 dark:text-gray-100 text-3xl font-bold mb-6 fade-up">{{ t('features.title') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <div v-for="(feature, index) in translatedFeatures" :key="index" 
                 :class="[
                     'text-center p-6 bg-white dark:bg-gray-800/50 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-200 dark:border-gray-700',
                     'fade-up',
                     `stagger-${(index % 3) + 1}`
                 ]"
                 @mouseenter="hoveredFeature = index"
                 @mouseleave="hoveredFeature = null">
                <div class="mb-4">
                    <i :class="[`pi ${feature.icon} text-5xl transition-colors duration-300`, 
                       hoveredFeature === index ? 'text-primary' : 'text-violet-400']"></i>
                </div>
                <h3 class="text-gray-900 dark:text-gray-100 text-xl mb-3 font-semibold">{{ feature.title }}</h3>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ feature.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const hoveredFeature = ref(null);

// This data remains in English, but we add a 'key' for translation
const features = ref([
    {
        icon: 'pi-filter',
        key: 'tracking'
    },
    {
        icon: 'pi-sparkles',
        key: 'insights'
    },
    {
        icon: 'pi-sitemap',
        key: 'alerts'
    },
    {
        icon: 'pi-shield',
        key: 'security'
    },
    {
        icon: 'pi-mobile',
        key: 'access'
    },
    {
        icon: 'pi-dollar',
        key: 'power'
    }
]);

// A computed property to create a translated version of the features array
const translatedFeatures = computed(() => {
    return features.value.map(feature => ({
        ...feature,
        title: t(`features.cards.${feature.key}.title`),
        description: t(`features.cards.${feature.key}.description`)
    }));
});
</script>