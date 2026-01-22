<template>
    <section id="faq" class="relative py-24 px-4 md:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-12">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-medium mb-4 fade-up">
                    <i class="pi pi-question-circle"></i>
                    FAQ
                </div>
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 fade-up stagger-1">
                    Common
                    <span class="text-gradient">Questions</span>
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 fade-up stagger-2">
                    Everything you need to know about Clear Cut Markets.
                </p>
            </div>
            
            <!-- FAQ Items -->
            <div class="space-y-4">
                <div v-for="(faq, index) in translatedFaqs" :key="index"
                     :class="['fade-up', `stagger-${index + 2}`]">
                    <div class="faq-card" :class="{ 'is-open': activeFaq === index }">
                        <button
                            @click="toggleFaq(index)"
                            class="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                            :aria-expanded="activeFaq === index"
                        >
                            <span class="font-semibold text-gray-900 dark:text-white">{{ faq.question }}</span>
                            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-transform duration-300"
                                 :class="{ 'rotate-180': activeFaq === index }">
                                <i class="pi pi-chevron-down text-gray-500 text-sm"></i>
                            </div>
                        </button>
                        
                        <Transition name="accordion">
                            <div v-if="activeFaq === index" class="overflow-hidden">
                                <div class="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {{ faq.answer }}
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
            
            <!-- Contact CTA -->
            <div class="mt-12 text-center fade-up stagger-6">
                <p class="text-gray-600 dark:text-gray-400 mb-4">Still have questions?</p>
                <a href="mailto:support@clearcutmarkets.com" class="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                    <i class="pi pi-envelope"></i>
                    Contact our support team
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const activeFaq = ref(0); // First one open by default

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
.text-gradient {
    background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.faq-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 1rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-card:hover {
    border-color: rgba(99, 102, 241, 0.2);
}

.faq-card.is-open {
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 10px 30px -10px rgba(99, 102, 241, 0.1);
}

/* Accordion animation */
.accordion-enter-active {
    transition: all 0.3s ease-out;
}

.accordion-leave-active {
    transition: all 0.2s ease-in;
}

.accordion-enter-from,
.accordion-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>

<style>
/* Dark mode styles - unscoped to work with global .app-dark class */
.app-dark .faq-card {
    background: rgba(17, 24, 39, 0.6);
    border-color: rgba(255, 255, 255, 0.1);
}
</style>
