<template>
    <!-- Hero Section with Animation -->
    <div class="min-h-[60vh] flex items-center justify-center px-4 py-12 md:py-16 lg:py-20">
        <div class="text-center">
            <div class="mb-4 animate-fade-in-down animation-delay-0">
                <Chip label="🚀 Launching Soon" class="px-3 py-2" />
            </div>
            
            <h1 class="text-6xl font-bold text-gray-900 mb-4 animate-fade-in-down animation-delay-100">
                Track What <span class="text-gradient">Matters Most</span>
            </h1>
            
            <p class="text-xl text-gray-600 mb-6 max-w-3xl mx-auto animate-fade-in-down animation-delay-200">
                Professional investment monitoring for 95% less than competitors*. 
                Focus on your top investments with AI-powered insights.
            </p>
            
            <!-- Email Capture with Animation -->
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

            <!-- Live Stats -->
<div class="mt-8 animate-fade-in-up animation-delay-500">
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-y-6 max-w-3xl mx-auto">
        <div class="text-center px-4">
            <h3 class="text-4xl font-bold text-primary mb-1">{{ animatedWaitlist }}+</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm m-0">On Waitlist</p>
        </div>
        <div class="text-center px-4">
            <h3 class="text-4xl font-bold text-primary mb-1">${{ animatedSaved }}k</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm m-0">Saved vs Competitors</p>
        </div>
        <div class="text-center px-4">
            <h3 class="text-4xl font-bold text-primary mb-1">{{ animatedModules }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm m-0">Possible Modules</p>
        </div>
        <div class="text-center px-4">
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