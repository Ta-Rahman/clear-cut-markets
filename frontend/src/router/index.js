import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { supabase } from '@/supabase';

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
        {
            path: '/auth/signup',
            name: 'signup',
            component: () => import('@/views/pages/auth/SignUp.vue')
        },
        
        // PROTECTED APP ROUTES
        {
            path: '/app',
            component: AppLayout,
            redirect: '/app/dashboard', // Redirect /app to /app/dashboard
            meta: { requiresAuth: true }, // This whole section requires login
            children: [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                }
                // We will add '/app/modules' and '/app/settings' here later
            ]
        },
        
        // ERROR PAGES
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

// Route Guard to protect routes
router.beforeEach(async (to, from, next) => {
    const { data } = await supabase.auth.getSession();
    const isLoggedIn = !!data.session;

    if (to.meta.requiresAuth && !isLoggedIn) {
        // If the route requires login and the user is not logged in, redirect to login
        next({ name: 'login' });
    } else if ((to.name === 'login' || to.name === 'signup') && isLoggedIn) {
        // If the user is already logged in and tries to visit login/signup, redirect to dashboard
        next({ name: 'dashboard' });
    }
    else {
        // Otherwise, allow navigation
        next();
    }
});

export default router;