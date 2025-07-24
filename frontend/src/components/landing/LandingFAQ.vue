<template>
    <section class="px-4 py-16 md:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
                Frequently Asked Questions
            </h2>
            
            <div class="space-y-4">
                <div v-for="(faq, index) in faqs" :key="index" class="border rounded-lg overflow-hidden border-gray-200 dark:border-gray-700">
                    <button
                        @click="toggleFaq(index)"
                        class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        :aria-expanded="activeFaq === index"
                    >
                        <span class="font-semibold text-gray-900 dark:text-gray-100">{{ faq.question }}</span>
                        <i :class="['pi', activeFaq === index ? 'pi-chevron-up' : 'pi-chevron-down', 'text-gray-500 dark:text-gray-400']"></i>
                    </button>
                    <Transition name="accordion">
                        <div v-if="activeFaq === index" class="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                            <p class="text-gray-700 dark:text-gray-300">{{ faq.answer }}</p>
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

// FAQ data
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

// Toggle FAQ item
const toggleFaq = (index) => {
    activeFaq.value = activeFaq.value === index ? null : index;
};
</script>

<style scoped>
/* Accordion transition for FAQ */
.accordion-enter-active,
.accordion-leave-active {
    transition: all 0.3s ease;
    max-height: 200px;
    overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>