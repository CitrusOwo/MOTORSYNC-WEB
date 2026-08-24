/* ═══════════════════════════════════════
   MAIN ENTRY POINT
   MotorSync — Seguridad Vehicular Inteligente
   ═══════════════════════════════════════ */

import { initNavbar } from './navbar.js';
import { initCart } from './carrito.js';
import {
    initScrollAnimations,
    initStaggerAnimations,
    initCounters,
    initPricingToggle,
    initLazyLoad,
    initPageLoad,
    initStatBars,
    initScrollProgress
} from './animaciones.js';

// Start page load transition immediately
initPageLoad();

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initCart();

    initScrollAnimations();
    initStaggerAnimations();
    initCounters();
    initPricingToggle();
    initLazyLoad();
    initStatBars();
    initScrollProgress();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
