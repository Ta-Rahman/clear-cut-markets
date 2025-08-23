// Enhanced version with scroll direction detection
import { onMounted, onUnmounted, ref } from 'vue';

export function useScrollAnimation() {
    let observer = null;
    let lastScrollY = 0;
    const scrollDirection = ref('down');

    const observeElements = () => {
        // Track scroll direction
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            scrollDirection.value = currentScrollY > lastScrollY ? 'down' : 'up';
            lastScrollY = currentScrollY;
        });

        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                } else if (scrollDirection.value === 'up') {
                    // Only remove animation when scrolling up
                    // This way animations replay when scrolling down again
                    entry.target.classList.remove('animate-in');
                }
            });
        }, options);

        // Observe all elements with animation classes
        document.querySelectorAll('.fade-up, .fade-in, .fade-left, .fade-right, .scale-in').forEach(el => {
            observer.observe(el);
        });
    };

    onMounted(() => {
        observeElements();
    });

    onUnmounted(() => {
        if (observer) {
            observer.disconnect();
        }
        window.removeEventListener('scroll', () => {});
    });

    return {
        observeElements
    };
}