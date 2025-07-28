<template>
    <section class="px-4 py-16 md:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
                Frequently Asked Questions
            </h2>
            
            <div class="space-y-4">
                <div v-for="(faq, index) in faqs" :key="index"
                     :class="[
                         'border rounded-lg border-gray-200 dark:border-gray-700',
                         'fade-up',
                         `stagger-${index + 1}`
                     ]">
                    <button
                        @click="toggleFaq(index)"
                        class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
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
import { ref } from 'vue';

const activeFaq = ref(null);

const faqs = ref([
    {
        question: "How is this different from Bloomberg Terminal?",
        answer: "Clear Cut Markets focuses on tracking 3-9 key investments with AI-powered insights, while Bloomberg Terminal is designed for institutional traders needing access to everything. We provide 80% of the value at 5% of the cost."
    },
    {
        question: "Can I change my plan anytime?",
        answer: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the next billing cycle, and we'll prorate any differences."
    },
    {
        question: "What data sources do you use?",
        answer: "We aggregate data from 15+ reliable sources including major exchanges, financial APIs, news outlets, and social sentiment platforms to give you comprehensive insights."
    },
    {
        question: "Is there a free trial?",
        answer: "Yes, all plans come with a 14-day free trial. No credit card required to start, and you can cancel anytime during the trial period."
    },
    {
        question: "How does the module system work?",
        answer: "Each module represents one investment you want to track (stock, crypto, ETF, etc.). You get a complete dashboard with real-time data, AI insights, and alerts for each module."
    },
    {
        question: "What happens if I exceed my module limit?",
        answer: "You'll need to upgrade to a higher plan or remove existing modules to add new ones. We'll notify you when you're approaching your limit."
    }
]);

const toggleFaq = (index) => {
    activeFaq.value = activeFaq.value === index ? null : index;
};
</script>

<style scoped>
/*
  This simplified transition only animates opacity for a rock-solid, shake-free experience.
*/
.accordion-fade-enter-active,
.accordion-fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.accordion-fade-enter-from,
.accordion-fade-leave-to {
  opacity: 0;
}
</style>