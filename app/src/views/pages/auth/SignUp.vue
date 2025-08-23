<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/supabase';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const { t } = useI18n();

const email = ref('');
const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const handleWaitlistJoin = async () => {
    if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        errorMessage.value = t('signup.error_invalid_email');
        return;
    }
    loading.value = true;
    errorMessage.value = '';
    successMessage.value = '';

    try {
        const { error } = await supabase
            .from('waitlist')
            .insert({ email: email.value });

        if (error) {
            if (error.code === '23505') { // PostgreSQL unique violation code
                errorMessage.value = t('signup.error_email_exists');
            } else {
                throw error;
            }
        } else {
            successMessage.value = t('signup.success_message');
            email.value = '';
        }

    } catch (error) {
        errorMessage.value = t('signup.error_generic');
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="flex items-center justify-center min-h-screen p-4 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-5 -z-10"></div>
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute inset-0">
                <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-violet-500/[0.07] via-transparent to-transparent"></div>
                <div class="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-500/[0.07] via-transparent to-transparent"></div>
            </div>
        </div>
        <div class="absolute inset-0 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] dark:bg-[radial-gradient(#404040_1px,transparent_1px)] [background-size:20px_20px] opacity-20 -z-10"></div>

        <div class="w-full max-w-md p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg border border-black/5 dark:border-white/10">
            <div class="text-center mb-8">
                <img src="/layout/images/logo-dark.svg" alt="Image" height="60" class="mx-auto mb-4" />
                <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ t('signup.title') }}</h1>
                <p class="text-gray-600 dark:text-gray-400 mt-2">{{ t('signup.subtitle') }}</p>
            </div>

            <form @submit.prevent="handleWaitlistJoin" class="flex flex-col gap-6">
                <div>
                    <label for="email" class="block text-900 dark:text-white font-medium mb-2">{{ t('signup.email_label') }}</label>
                    <InputText id="email" v-model="email" type="email" class="w-full" :placeholder="t('signup.email_placeholder')" />
                </div>
                
                <div v-if="errorMessage" class="pt-2">
                    <Message severity="error" :closable="false">{{ errorMessage }}</Message>
                </div>

                 <div v-if="successMessage" class="pt-2">
                    <Message severity="success" :closable="false">{{ successMessage }}</Message>
                </div>

                <Button type="submit" :label="t('signup.submit_button')" class="w-full" :loading="loading"></Button>
            </form>

            <div class="text-center mt-6">
                <span class="text-gray-600 dark:text-gray-400">{{ t('signup.already_on_list') }} 
                    <router-link to="/auth/login" class="font-medium text-primary hover:underline">{{ t('signup.sign_in_link') }}</router-link>
                </span>
            </div>

            <div class="text-center mt-4">
                <router-link to="/" class="text-sm font-medium text-gray-500 hover:text-primary transition-colors duration-200">
                    <i class="pi pi-arrow-left mr-2"></i>{{ t('login.back_to_home') }}
                </router-link>
            </div>
        </div>
    </div>
</template>