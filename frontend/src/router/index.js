import { createRouter, createWebHashHistory } from 'vue-router';
import { useAuth } from '@/composables/useAuth'; // 1. Import useAuth
import AppLayout from '@/layout/AppLayout.vue';

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
            meta: { requiresAuth: true }, // 2. Add meta field to protect this route and its children
            children: [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue') // We need at least one route to land on
                },
                // You can add back modules and settings here as you build them
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

// 3. Add the navigation guard
router.beforeEach(async (to, from, next) => {
    const { getCurrentUser } = useAuth();
    const user = await getCurrentUser();

    // Check if the route requires authentication
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // If the user is not logged in, redirect to the login page
        if (!user) {
            next({ name: 'login' });
        } else {
            // If the user is logged in, allow them to proceed
            next();
        }
    } else {
        // If the route does not require authentication, let them proceed
        next();
    }
});

export default router;