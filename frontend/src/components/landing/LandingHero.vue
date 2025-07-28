<template>
    <div class="min-h-[60vh] flex items-center justify-center px-4 py-12 md:py-16 lg:py-20">
        <div class="text-center">
            <div class="mb-4 animate-fade-in-down animation-delay-0">
                <Chip label="🚀 Launching Soon" class="px-3 py-2" />
            </div>
            
            <h1 class="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 animate-fade-in-down animation-delay-100">
                Smarter Insights on <span class="text-gradient">What Matters Most</span>
            </h1>
            
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto animate-fade-in-down animation-delay-200">
                Our AI co-pilot analyzes market news and sentiment, so you can focus on your key investments with confidence.
            </p>
            
            <div class="flex items-center justify-center gap-3 max-w-lg mx-auto animate-fade-in-down animation-delay-300">
                <div class="flex-1">
                    <IconField iconPosition="left" class="w-full">
                        <InputIcon class="pi pi-envelope text-gray-500" />
                        <InputText 
                            v-model="email" 
                            placeholder="Enter your email" 
                            @keyup.enter="joinWaitlist"
                            class="w-full"
                            :class="{'shake-animation': emailError}"
                        />
                    </IconField>
                </div>
                <Button 
                    label="Join Waitlist" 
                    class="p-button-primary p-button-raised"
                    @click="joinWaitlist"
                    :loading="loading"
                />
            </div>
            
            <Transition name="fade">
                <div v-if="message" class="mt-3 animate-fade-in">
                    <Message :severity="messageType" :closable="false">{{ message }}</Message>
                </div>
            </Transition>

            <div class="mt-6 animate-fade-in-up animation-delay-500">
                <div class="flex justify-center items-center gap-4 flex-wrap">
                    <div class="text-center px-6">
                        <h3 class="text-4xl font-bold text-primary mb-1">{{ animatedWaitlist }}+</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm m-0">On Waitlist</p>
                    </div>
                    <div class="w-px h-10 bg-gray-300 dark:bg-gray-700 self-center hidden sm:block"></div>
                    <div class="text-center px-6">
                        <h3 class="text-4xl font-bold text-primary mb-1">${{ animatedSaved }}k</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm m-0">Saved vs competitors</p>
                    </div>
                    <div class="w-px h-10 bg-gray-300 dark:bg-gray-700 self-center hidden sm:block"></div>
                    <div class="text-center px-6">
                        <h3 class="text-4xl font-bold text-primary mb-1">{{ animatedModules }}</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm m-0">Possible Modules</p>
                    </div>
                    <div class="w-px h-10 bg-gray-300 dark:bg-gray-700 self-center hidden sm:block"></div>
                    <div class="text-center px-6">
                        <h3 class="text-4xl font-bold text-primary mb-1">{{ animatedSources }}+</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm m-0">Data Sources</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import Chip from 'primevue/chip';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

// Props for animated values
const props = defineProps({
    animatedWaitlist: {
        type: Number,
        default: 0
    },
    animatedSaved: {
        type: Number,
        default: 0
    },
    animatedModules: {
        type: Number,
        default: 0
    },
    animatedSources: {
        type: Number,
        default: 0
    }
});

// Local state
const email = ref('');
const loading = ref(false);
const message = ref('');
const messageType = ref('success');
const emailError = ref(false);

// Methods
const joinWaitlist = async () => {
    if (!email.value || !email.value.includes('@')) {
        emailError.value = true;
        message.value = 'Please enter a valid email address';
        messageType.value = 'error';
        
        setTimeout(() => {
            emailError.value = false;
        }, 500);
        return;
    }

    loading.value = true;
    
    setTimeout(() => {
        console.log('Email submitted:', email.value);
        message.value = 'Thanks for joining! We\'ll be in touch soon.';
        messageType.value = 'success';
        email.value = '';
        loading.value = false;
        
        // You could emit an event here to update the parent's waitlist count
        // emit('email-submitted');
        
        setTimeout(() => {
            message.value = '';
        }, 5000);
    }, 1000);
};
</script>

<style scoped>
/* Component-specific animations */
.text-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.shake-animation {
    animation: shake 0.5s;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
}

/* Vue transitions */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>