import { ref, watch, onMounted } from 'vue';

export function useDarkMode() {
    const isDarkMode = ref(false);

    // Initialize dark mode
    const initDarkMode = () => {
        // Check localStorage first
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            isDarkMode.value = savedTheme === 'dark';
        } else {
            // Check system preference
            isDarkMode.value = window.matchMedia && 
                window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        
        applyTheme();
    };

    // Apply theme to document
    const applyTheme = () => {
        const element = document.documentElement;
        
        if (isDarkMode.value) {
            element.classList.add('p-dark');
        } else {
            element.classList.remove('p-dark');
        }
    };

    // Toggle dark mode
    const toggleDarkMode = () => {
        isDarkMode.value = !isDarkMode.value;
        localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
        applyTheme();
    };

    // Watch system preference changes
    onMounted(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        mediaQuery.addEventListener('change', (e) => {
            // Only update if no saved preference
            if (!localStorage.getItem('theme')) {
                isDarkMode.value = e.matches;
                applyTheme();
            }
        });
    });

    // Watch isDarkMode changes
    watch(isDarkMode, applyTheme);

    return {
        isDarkMode,
        toggleDarkMode,
        initDarkMode
    };
}