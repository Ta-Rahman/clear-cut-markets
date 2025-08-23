export function useWaitlist() {
    const scrollToWaitlist = () => {
        const heroSection = document.getElementById('hero-section');
        const emailInput = document.getElementById('waitlist-email-input');

        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        if (emailInput) {
            // A short delay ensures the input is visible before focusing
            setTimeout(() => {
                emailInput.focus();
            }, 500); // 500ms delay for the scroll to finish
        }
    };

    return { scrollToWaitlist };
}