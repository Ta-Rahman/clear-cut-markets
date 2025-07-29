import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// PrimeVue and theme imports are correct
import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

// --- This is the crucial import for i18n ---
import i18n from './i18n';

import '@/assets/styles.scss';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark',
            cssLayer: false
        }
    }
});

// --- This is the critical line that activates the library ---
// By placing it here, you make the translation functions available to your entire app.
app.use(i18n); 

app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app');