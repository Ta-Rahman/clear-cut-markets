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
        errorMessage.value = t('login.error_enter_credentials');
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
        errorMessage.value = error.message || t('login.error_unknown');
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="flex flex-col lg:flex-row min-h-screen">
        
        <div class="hidden lg:flex flex-col flex-1 text-center p-8 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-5 -z-10"></div>
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div class="absolute inset-0">
                    <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-violet-500/[0.07] via-transparent to-transparent"></div>
                    <div class="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-500/[0.07] via-transparent to-transparent"></div>
                </div>
            </div>
            <div class="absolute inset-0 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] dark:bg-[radial-gradient(#404040_1px,transparent_1px)] [background-size:20px_20px] opacity-20 -z-10"></div>

            <div class="relative z-10 flex flex-col items-center justify-center flex-grow">
                <img src="/layout/images/logo-dark.svg" alt="Image" height="60" class="mb-6" />
                <div class="mb-4">
                    <div class="text-4xl font-bold text-gray-900 dark:text-white mb-3">{{ t('login.branding_title') }}</div>
                    <span class="text-gray-600 dark:text-gray-400">{{ t('login.branding_subtitle') }}</span>
                </div>
            </div>
            
            <div class="relative z-10 p-6 border-t border-gray-200 dark:border-gray-700">
                <p class="text-gray-700 dark:text-gray-300 italic">{{ t('login.testimonial_text') }}</p>
                <p class="font-semibold text-gray-800 dark:text-gray-200 mt-2">{{ t('login.testimonial_author') }}</p>
            </div>
        </div>

        <div class="flex flex-1 items-center justify-center p-6 sm:p-12 relative overflow-hidden lg:bg-white dark:lg:bg-black">
            <div class="absolute inset-0 lg:hidden bg-gradient-to-br from-violet-500 to-purple-600 opacity-5 -z-10"></div>
            <div class="absolute inset-0 lg:hidden overflow-hidden pointer-events-none">
                <div class="absolute inset-0">
                    <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-violet-500/[0.07] via-transparent to-transparent"></div>
                    <div class="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-500/[0.07] via-transparent to-transparent"></div>
                </div>
            </div>
            <div class="absolute inset-0 lg:hidden bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] dark:bg-[radial-gradient(#404040_1px,transparent_1px)] [background-size:20px_20px] opacity-20 -z-10"></div>
            
            <div class="absolute inset-0 bg-grain opacity-5 pointer-events-none hidden lg:block"></div>

            <div class="w-full max-w-md z-10 p-8 lg:p-0 bg-white/80 dark:bg-gray-900/80 lg:bg-transparent dark:lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none rounded-2xl shadow-lg lg:shadow-none border border-black/5 dark:border-white/10 lg:border-none">
                <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{{ t('login.form_title') }}</h1>
                <span class="text-gray-600 dark:text-gray-400">{{ t('login.form_subtitle') }}
                    <a href="#" @click.prevent="$router.push('/auth/signup')" class="font-medium text-primary hover:underline">{{ t('login.create_link') }}</a>
                </span>

                <div class="mt-8">
                    <form @submit.prevent="handleLogin" class="flex flex-col gap-6">
                        <div>
                            <label for="email" class="block text-900 dark:text-white font-medium mb-2">{{ t('login.email_label') }}</label>
                            <InputText id="email" v-model="email" type="text" class="w-full" :placeholder="t('login.email_placeholder')" />
                        </div>

                        <div>
                            <label for="password" class="block text-900 dark:text-white font-medium mb-2">{{ t('login.password_label') }}</label>
                            <InputText id="password" v-model="password" type="password" class="w-full" :placeholder="t('login.password_placeholder')" />
                        </div>
                        
                        <div v-if="errorMessage" class="pt-2">
                            <Message severity="error" :closable="false">{{ errorMessage }}</Message>
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <Checkbox v-model="checked" inputId="rememberme1" :binary="true" class="mr-2"></Checkbox>
                                <label for="rememberme1">{{ t('login.remember_me') }}</label>
                            </div>
                            <a class="font-medium text-primary hover:underline" href="#">{{ t('login.forgot_password') }}</a>
                        </div>
                        <Button type="submit" :label="t('login.submit_button')" class="w-full" :loading="loading"></Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
</style>