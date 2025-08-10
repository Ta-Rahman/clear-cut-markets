<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/supabase';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Message from 'primevue/message';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const { t } = useI18n();

const email = ref('');
const password = ref('');
const checked = ref(false);
const loading = ref(false);
const errorMessage = ref('');

const handleLogin = async () => {
    if (!email.value || !password.value) {
        errorMessage.value = 'Please enter both email and password.';
        return;
    }
    loading.value = true;
    errorMessage.value = '';
    try {
        const { error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value
        });
        if (error) throw error;
        router.push('/app');
    } catch (error) {
        errorMessage.value = error.message || 'An unknown error occurred.';
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="surface-ground flex min-h-screen">
        <div class="hidden lg:flex flex-col items-center justify-center flex-1 bg-violet-50 dark:bg-gray-900 text-center p-8">
            <img src="/layout/images/logo-dark.svg" alt="Image" height="60" class="mb-6" />
            <div class="mb-4">
                <div class="text-4xl font-bold text-gray-900 dark:text-white mb-3">Welcome to Clear Cut Markets</div>
                <span class="text-gray-600 dark:text-gray-400">Focus on what matters. Your AI co-pilot for smarter investing.</span>
            </div>
            </div>

        <div class="flex flex-1 items-center justify-center p-6 sm:p-12">
            <div class="w-full max-w-md">
                <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Sign In</h1>
                <span class="text-gray-600 dark:text-gray-400">Don't have an account? 
                    <a href="#" @click.prevent="$router.push('/auth/signup')" class="font-medium text-primary hover:underline">Create today</a>
                </span>

                <div class="mt-8">
                    <form @submit.prevent="handleLogin" class="flex flex-col gap-6">
                        <div>
                            <label for="email" class="block text-900 dark:text-white font-medium mb-2">Email</label>
                            <InputText id="email" v-model="email" type="text" class="w-full" placeholder="Your email address" />
                        </div>

                        <div>
                            <label for="password" class="block text-900 dark:text-white font-medium mb-2">Password</label>
                            <InputText id="password" v-model="password" type="password" class="w-full" placeholder="Your password" />
                        </div>
                        
                        <div v-if="errorMessage" class="pt-2">
                            <Message severity="error" :closable="false">{{ errorMessage }}</Message>
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <Checkbox v-model="checked" inputId="rememberme1" :binary="true" class="mr-2"></Checkbox>
                                <label for="rememberme1">Remember me</label>
                            </div>
                            <a class="font-medium text-primary hover:underline" href="#">Forgot your password?</a>
                        </div>
                        <Button type="submit" label="Sign In" class="w-full" :loading="loading"></Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>