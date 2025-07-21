import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // PUBLIC ROUTES
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Landing.vue')
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
            redirect: '/app/dashboard',
            children: [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: 'modules',
                    name: 'modules',
                    component: () => import('@/views/Modules.vue')
                },
                {
                    path: 'settings',
                    name: 'settings',
                    component: () => import('@/views/Settings.vue')
                }
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

// Debug logging - MUST BE AFTER router is created
router.beforeEach((to, from, next) => {
    console.log('Navigating to:', to.path);
    next();
});

router.onError((error) => {
    console.error('Router error:', error);
});

export default router;