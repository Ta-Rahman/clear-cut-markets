<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/supabase';

const user = ref(null);

onMounted(async () => {
    const { data } = await supabase.auth.getUser();
    user.value = data.user;
});
</script>

<template>
    <div class="p-6">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Welcome to Your Dashboard</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">This is the beginning of your Clear Cut Markets application.</p>

        <div v-if="user" class="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p>You are logged in as: <strong class="text-primary">{{ user.email }}</strong></p>
        </div>
    </div>
</template>