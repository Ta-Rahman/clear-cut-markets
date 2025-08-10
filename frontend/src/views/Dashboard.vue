<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>Dashboard</h5>
        <p>Welcome to your Clear Cut Markets dashboard!</p>
        <Button label="Sign Out" @click="handleSignOut" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth';

const { signOut } = useAuth();
const router = useRouter();

const handleSignOut = async () => {
    await signOut();
    router.push('/auth/login');
};
</script>