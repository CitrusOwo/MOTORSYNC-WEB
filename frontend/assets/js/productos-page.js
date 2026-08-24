/* ═══════════════════════════════════════
   PRODUCTOS PAGE - Entry Point
   Catalog listing with grid and filters
   ═══════════════════════════════════════ */

import { initNavbar } from './navbar.js';
import { initCatalog } from './catalogo.js';
import { initCart } from './carrito.js';
import { initScrollAnimations, initPageLoad, initScrollProgress, initLazyLoad } from './animaciones.js';

initPageLoad();

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initCatalog();
    initCart();
    initScrollAnimations();
    initScrollProgress();
    initLazyLoad();
});