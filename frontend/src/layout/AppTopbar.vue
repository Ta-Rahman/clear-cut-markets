<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/supabase';
import Menu from 'primevue/menu';

const router = useRouter();
const menu = ref();
const items = ref([
    {
        label: 'Settings',
        icon: 'pi pi-cog',
        command: () => {
            router.push('/app/settings');
        }
    },
    {
        separator: true
    },
    {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: async () => {
            await supabase.auth.signOut();
            router.push('/');
        }
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};
</script>

<template>
    <header class="bg-white dark:bg-gray-800 shadow-md p-4 flex items-center justify-between sticky top-0 z-50">
        <div class="flex items-center gap-2 cursor-pointer" @click="router.push('/app/dashboard')">
            <img src="/layout/images/logo-dark.svg" alt="Logo" class="h-8" />
            <span class="text-xl font-semibold text-gray-800 dark:text-gray-100">Clear Cut Markets</span>
        </div>

        <div>
            <button @click="toggle" class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                <i class="pi pi-user text-xl"></i>
            </button>
            <Menu ref="menu" :model="items" :popup="true" />
        </div>
    </header>
</template>