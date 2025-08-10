import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // PUBLIC ROUTES
        {
            path: '/',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        
        // PROTECTED APP ROUTES
        {
            path: '/app',
            component: AppLayout,
            // FIX: Removed redirect and children since these pages don't exist yet.
            // We will add them back as we build them.
            children: [
                // {
                //     path: 'dashboard',
                //     name: 'dashboard',
                //     component: () => import('@/views/Dashboard.vue') // This file was deleted
                // },
                // {
                //     path: 'modules',
                //     name: 'modules',
                //     component: () => import('@/views/Modules.vue') // This file was deleted
                // },
                // {
                //     path: 'settings',
                //     name: 'settings',
                //     component: () => import('@/views/Settings.vue') // This file was deleted
                // }
            ]
        },
        
        // ERROR PAGES
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/pages/notfound'
        }
    ]
});

export default router;