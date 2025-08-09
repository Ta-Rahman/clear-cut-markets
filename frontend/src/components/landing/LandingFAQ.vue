<template>
    <section class="px-4 py-16 md:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
                {{ t('faq.title') }}
            </h2>
            
            <div class="space-y-4">
                <div v-for="(faq, index) in translatedFaqs" :key="index"
                     :class="[
                         'border rounded-lg border-gray-200 dark:border-gray-700 overflow-hidden',
                         'fade-up',
                         `stagger-${index}`
                     ]">
                    <button
                        @click="toggleFaq(index)"
                        class="w-full px-6 py-4 text-left flex items-center justify-between bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        :aria-expanded="activeFaq === index"
                    >
                        <span class="font-semibold text-gray-900 dark:text-gray-100">{{ faq.question }}</span>
                        <i :class="['pi', activeFaq === index ? 'pi-chevron-up' : 'pi-chevron-down', 'text-gray-500 dark:text-gray-400 transition-transform duration-300']"></i>
                    </button>
                    
                    <Transition name="accordion-fade">
                        <div v-if="activeFaq === index" class="bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
                            <div class="px-6 pb-4 pt-2 text-gray-700 dark:text-gray-300">
                                {{ faq.answer }}
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const activeFaq = ref(null);

const translatedFaqs = computed(() => [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
    { question: t('faq.q6'), answer: t('faq.a6') }
]);

const toggleFaq = (index) => {
    activeFaq.value = activeFaq.value === index ? null : index;
};
</script>

<style scoped>
.accordion-fade-enter-active,
.accordion-fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.accordion-fade-enter-from,
.accordion-fade-leave-to {
  opacity: 0;
}
</style>