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
import { useI18n } from 'vue-i18n';
const { t } = useI18n(); // This line ensures the component is i18n-aware

const activeFaq = ref(null);

const faqs = ref([
    {
        question: "Is this a replacement for my brokerage account?",
        answer: "Not at all. Clear Cut Markets is not a broker; it's an AI-powered companion that works alongside your existing accounts. You manage your trades on your preferred platform, and we provide the high-signal insights to inform those decisions."
    },
    {
        question: "How does the AI analysis actually work?",
        answer: "Our system continuously scans over 15 verified data sources, including global news outlets, financial filings, and social sentiment platforms. We use a Large Language Model (LLM) to analyze the content, identify key topics, and determine the potential impact on specific assets and the connections between them."
    },
    {
        question: "What kind of assets can I track in a module?",
        answer: "You can track a wide range of assets, including individual stocks (e.g., TSLA), major ETFs (e.g., SPY), and leading cryptocurrencies (e.g., Bitcoin, Ethereum). We are constantly expanding our coverage based on user demand."
    },
    {
        question: "How does the free trial work?",
        answer: "All our plans come with a full-featured 14-day free trial, no credit card required upfront. You get to explore the entire platform, including the premium features, to make sure it's the right fit for you before committing."
    },
    {
        question: "Can I change my plan or cancel later?",
        answer: "Of course. You can upgrade, downgrade, or cancel your plan at any time directly from your account dashboard. Any changes will be pro-rated, and cancellations take effect at the end of your current billing period."
    },
    {
        question: "What makes this different from a standard news aggregator?",
        answer: "News aggregators give you a firehose of information that you still have to sift through. Clear Cut is the opposite. We do the sifting for you, using AI to connect the dots and only alerting you to the news that has a potential, tangible impact on your specific holdings."
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