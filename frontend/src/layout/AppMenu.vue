<script setup>
import { ref } from 'vue';

const model = ref([
    {
        label: 'Home',
        items: [
            { 
                label: 'Dashboard', 
                icon: 'pi pi-fw pi-home', 
                to: '/app/dashboard' 
            }
        ]
    },
    {
        label: 'Investments',
        items: [
            { 
                label: 'My Modules', 
                icon: 'pi pi-fw pi-th-large', 
                to: '/app/modules' 
            },
            { 
                label: 'Add Module', 
                icon: 'pi pi-fw pi-plus', 
                command: () => {
                    // We'll implement this later
                    console.log('Add module clicked');
                }
            }
        ]
    },
    {
        label: 'Account',
        items: [
            { 
                label: 'Settings', 
                icon: 'pi pi-fw pi-cog', 
                to: '/app/settings' 
            },
            { 
                label: 'Billing', 
                icon: 'pi pi-fw pi-dollar', 
                badge: 'PRO',
                to: '/app/settings' 
            },
            { 
                label: 'Logout', 
                icon: 'pi pi-fw pi-sign-out', 
                command: () => {
                    // Implement logout
                    window.location.href = '/';
                }
            }
        ]
    }
]);
</script>

<template>
    <AppMenuItem v-for="item in model" :key="item.label" :item="item" :index="0"></AppMenuItem>
</template>