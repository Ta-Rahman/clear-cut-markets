<script setup></script>

<template>
    <router-view />
</template>

<style>

#features .rounded-xl:hover h3,
#features .rounded-xl:hover p {
    font-weight: inherit !important;
}

/* Scroll Animation Classes */
.fade-up,
.fade-in,
.fade-left,
.fade-right,
.scale-in {
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-up {
    transform: translateY(30px);
}

.fade-left {
    transform: translateX(30px);
}

.fade-right {
    transform: translateX(-30px);
}

.scale-in {
    transform: scale(0.9);
}

/* When elements come into view */
.fade-up.animate-in,
.fade-in.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.fade-left.animate-in {
    opacity: 1;
    transform: translateX(0);
}

.fade-right.animate-in {
    opacity: 1;
    transform: translateX(0);
}

.scale-in.animate-in {
    opacity: 1;
    transform: scale(1);
}

/* Stagger animations for multiple elements */
.stagger-1 { transition-delay: 0.1s; }
.stagger-2 { transition-delay: 0.2s; }
.stagger-3 { transition-delay: 0.3s; }
.stagger-4 { transition-delay: 0.4s; }
.stagger-5 { transition-delay: 0.5s; }

/* Dark mode overrides for Tailwind-like classes */
.app-dark .dark\:bg-gray-900\/90 {
    background-color: rgba(17, 24, 39, 0.9);
}

.app-dark .dark\:text-gray-100 {
    color: #f3f4f6;
}

.app-dark .dark\:text-gray-300 {
    color: #d1d5db;
}

.app-dark .dark\:border-gray-700 {
    border-color: #374151;
}

.app-dark .dark\:bg-gray-800 {
    background-color: #1f2937;
}

/* Additional dark mode styles for your landing page */
.app-dark {
    color-scheme: dark;
}

.app-dark .bg-white {
    background-color: #1f2937;
}

.app-dark .bg-gray-50 {
    background-color: #374151;
}

.app-dark .text-gray-900 {
    color: #f3f4f6;
}

.app-dark .text-gray-600 {
    color: #9ca3af;
}

.app-dark .border-gray-200 {
    border-color: #4b5563;
}


/* Module Cards - Fix for dark mode */
.app-dark .module-card {
    background-color: #2a2a2a !important; /* Lighter grey for cards */
    border-color: rgba(255, 255, 255, 0.1);
    color: #e5e7eb;
}

.app-dark .module-card h3 {
    color: #f3f4f6; /* White text for headings */
}

.app-dark .module-card p {
    color: #d1d5db; /* Light grey for paragraphs */
}

/* Fix for the chart area */
.app-dark .module-card svg {
    background-color: #1a1a1a;
}

/* Fix for metric sections */
.app-dark .module-card .text-gray-600 {
    color: #9ca3af;
}

.app-dark .module-card .text-gray-900 {
    color: #f3f4f6;
}

/* Fix sentiment section background */
.app-dark .module-card .bg-gray-50 {
    background-color: #1a1a1a;
}

.app-dark .module-card .bg-gray-200 {
    background-color: #374151;
}

/* AI Insights icon */
.app-dark .module-card .pi-sparkles {
    color: #a78bfa;
}

/* Pricing Cards - Fix for dark mode */
.app-dark .p-8.bg-white {
    background-color: #2a2a2a !important;
}

.app-dark .text-3xl.font-bold {
    color: #f3f4f6;
}

.app-dark .text-2xl.font-bold.text-violet-600 {
    color: #a78bfa !important;
}

/* Fix for pricing text visibility */
.app-dark .text-sm.text-gray-500 {
    color: #9ca3af;
}

.app-dark .text-sm.text-green-600 {
    color: #86efac;
}

.app-dark .text-5xl.font-bold.text-gray-900 {
    color: #f3f4f6;
}

.app-dark .text-gray-600.ml-2 {
    color: #9ca3af;
}

/* Fix for feature list items */
.app-dark li .text-gray-700 {
    color: #d1d5db;
}

.app-dark li.text-gray-400 {
    color: #6b7280;
}

/* Fix check/cross icons */
.app-dark .pi-check-circle.text-green-500 {
    color: #86efac;
}

.app-dark .pi-times-circle {
    color: #6b7280;
}

/* Fix divider */
.app-dark .p-divider {
    background-color: #404040 !important;
}

.app-dark .p-divider::before {
    border-color: #404040 !important;
}

/* Fix Popular badge */
.app-dark .p-chip {
    background-color: #7c3aed !important;
    color: #ffffff !important;
}

/* Fix comparison section */
.app-dark .bg-violet-50 {
    background-color: rgba(139, 92, 246, 0.1);
}

.app-dark .text-violet-700 {
    color: #c4b5fd;
}

/* Fix pricing toggle */
.app-dark .bg-white.rounded-lg.shadow-sm {
    background-color: #2a2a2a;
}

.app-dark .bg-violet-600 {
    background-color: #7c3aed;
}

/* Fix "Need more modules" section */
.app-dark .bg-white.rounded-xl {
    background-color: #2a2a2a;
}

.app-dark .text-2xl.font-bold.text-gray-900 {
    color: #f3f4f6;
}

/* Ensure all p-button variants work in dark mode */
.app-dark .p-button-primary {
    background-color: #7c3aed;
    border-color: #7c3aed;
}

.app-dark .p-button-primary:hover {
    background-color: #6d28d9;
    border-color: #6d28d9;
}

.app-dark .p-button-raised {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Module demo specific fixes */
.app-dark #features {
    background-color: transparent;
}

.app-dark #pricing {
    background-color: transparent;
}

/* Fix feature cards */
.app-dark .bg-white.rounded-xl.transition-all {
    background-color: #2a2a2a;
}

.app-dark .text-xl.mb-3.font-semibold {
    color: #f3f4f6;
}

.app-dark .text-gray-600.leading-relaxed {
    color: #9ca3af;
}

/* Start 14-Day Trial buttons - Keep green in dark mode */
.app-dark .p-button[label="Start 14-Day Trial"] {
    background-color: #22c55e !important;
    border-color: #22c55e !important;
    color: #ffffff !important;
}

.app-dark .p-button[label="Start 14-Day Trial"]:hover {
    background-color: #16a34a !important;
    border-color: #16a34a !important;
    color: #ffffff !important;
}

.app-dark .p-button[label="Start 14-Day Trial"]:focus {
    background-color: #16a34a !important;
    border-color: #16a34a !important;
    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2) !important;
}

/* Fix text next to icons above FAQ (SSL protection, etc.) */
.app-dark .text-gray-700 {
    color: #d1d5db !important;
}

.app-dark .text-sm .text-gray-700 {
    color: #d1d5db !important;
}

/* Fix icons in that section */
.app-dark .pi-shield.text-green-500,
.app-dark .pi-refresh.text-green-500,
.app-dark .pi-times.text-green-500,
.app-dark .pi-credit-card.text-green-500 {
    color: #86efac !important;
}

/* Fix Sticky Bottom Bar */
.app-dark .bg-gradient-to-r.from-violet-600.to-purple-600 {
    background: linear-gradient(to right, #7c3aed, #9333ea) !important;
}

/* Fix the sticky bar button */
.app-dark .bg-white.text-violet-600 {
    background-color: #86efac !important;
    color: #7c3aed !important;
}

.app-dark .bg-white.text-violet-600:hover {
    background-color: #f3f4f6 !important;
    color: #000000 !important;
}

/* Alternative: Make the button more prominent in dark mode */
.app-dark .fixed.bottom-0 .p-button {
    background-color: #86efac !important;
    color: #000000 !important;
    font-weight: 600 !important;
}

.app-dark .fixed.bottom-0 .p-button:hover {
    background-color: #16a34a !important;
    color: #ffffff !important;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Fix the text in sticky bar */
.app-dark .fixed.bottom-0 p {
    color: #ffffff !important;
}

.app-dark .fixed.bottom-0 .opacity-90 {
    opacity: 1 !important;
    color: #e9d5ff !important;
}

/* Ensure FAQ section text is readable */
.app-dark #pricing + section {
    background-color: transparent;
}

.app-dark .text-center.text-gray-900 {
    color: #f3f4f6 !important;
}

</style>