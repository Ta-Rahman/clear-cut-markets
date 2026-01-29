// Scroll animation with JS-controlled timing (no CSS transition-delay dependency)
import { onMounted, onUnmounted } from 'vue';

export function useScrollAnimation() {
    let observer = null;
    let scheduledAnimations = new Map(); // element -> timeoutId
    let animatedElements = new Set(); // Track elements that have completed animation
    let scrollHandler = null;

    const observeElements = () => {
        const allAnimatedElements = document.querySelectorAll('.fade-up, .fade-in, .fade-left, .fade-right, .scale-in');
        
        // Reset all animations when user scrolls back to top
        scrollHandler = () => {
            if (window.scrollY < 100) {
                // Clear all animated state
                animatedElements.forEach(el => {
                    el.classList.remove('animate-in');
                    observer.observe(el); // Re-observe the element
                });
                animatedElements.clear();
                
                // Cancel any pending animations
                scheduledAnimations.forEach(timeoutId => clearTimeout(timeoutId));
                scheduledAnimations.clear();
            }
        };
        
        window.addEventListener('scroll', scrollHandler, { passive: true });

        const options = {
            threshold: 0.05,
            rootMargin: '0px 0px -30px 0px'
        };

        observer = new IntersectionObserver((entries) => {
            // Collect all newly visible elements that haven't been animated yet
            const newlyVisible = entries
                .filter(e => e.isIntersecting && !animatedElements.has(e.target))
                .map(e => e.target);
            
            if (newlyVisible.length === 0) return;
            
            // Sort by position (top to bottom, left to right)
            newlyVisible.sort((a, b) => {
                const rectA = a.getBoundingClientRect();
                const rectB = b.getBoundingClientRect();
                const topDiff = rectA.top - rectB.top;
                // If within 30px vertically, sort by left position (same row)
                if (Math.abs(topDiff) < 30) {
                    return rectA.left - rectB.left;
                }
                return topDiff;
            });
            
            // Animate in sorted order with staggered JS delays
            newlyVisible.forEach((el, index) => {
                const delay = index * 80; // 80ms between each element
                
                // Mark as animated immediately to prevent re-triggering
                animatedElements.add(el);
                
                const timeoutId = setTimeout(() => {
                    el.classList.add('animate-in');
                    scheduledAnimations.delete(el);
                    // Stop observing this element since it's done
                    observer.unobserve(el);
                }, delay);
                
                scheduledAnimations.set(el, timeoutId);
            });
        }, options);

        // Observe each element individually
        allAnimatedElements.forEach(el => {
            observer.observe(el);
        });
    };

    onMounted(() => {
        // Wait for layout to stabilize
        setTimeout(observeElements, 100);
    });

    onUnmounted(() => {
        if (observer) observer.disconnect();
        if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
        // Clear any pending animations
        scheduledAnimations.forEach(timeoutId => clearTimeout(timeoutId));
    });

    return { observeElements };
}
