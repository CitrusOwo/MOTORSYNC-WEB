/* ═══════════════════════════════════════
   MODAL MODULE
   Product detail modal with specs
   ═══════════════════════════════════════ */

import { PRODUCTS, getProductSVG } from './productos.js';
import { addToCart } from './carrito.js';

let modal, modalOverlay, modalClose, modalBody;

export function openModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    modalBody.innerHTML = `
        <div class="modal_img_col">
            <div class="modal_img_wrapper">
                ${getProductSVG(product)}
            </div>
            <div class="modal_badges">
                ${product.badges.map(b => {
                    const labels = { 'new': 'Nuevo', 'offer': 'Oferta', 'best': 'Más Vendido' };
                    return `<span class="product_badge product_badge--${b}">${labels[b]}</span>`;
                }).join('')}
            </div>
        </div>
        <div class="modal_info_col">
            <h2 class="modal_product_name">${product.name}</h2>
            <p class="modal_product_desc">${product.fullDesc}</p>
            <div class="modal_price_row">
                <span class="modal_price">S/ ${product.price}</span>
                ${product.oldPrice ? `<span class="modal_price_old">S/ ${product.oldPrice}</span>` : ''}
                ${product.oldPrice ? `<span class="modal_discount">-${Math.round((1 - product.price / product.oldPrice) * 100)}%</span>` : ''}
            </div>
            <div class="modal_specs">
                <h4 class="modal_specs_title">Especificaciones</h4>
                <ul class="modal_specs_list">
                    ${product.specs.map(s => `
                        <li class="modal_specs_item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                            ${s}
                        </li>
                    `).join('')}
                </ul>
            </div>
            <button class="btn btn--primary btn--full modal_add_cart" data-id="${product.id}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
                Agregar al Carrito — S/ ${product.price}
            </button>
        </div>
    `;

    modalBody.querySelector('.modal_add_cart').addEventListener('click', () => {
        addToCart(product.id);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus trap
    modalClose.focus();
}

export function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

export function initModal() {
    modal = document.getElementById('productModal');
    modalOverlay = document.getElementById('modalOverlay');
    modalClose = document.getElementById('modalClose');
    modalBody = document.getElementById('modalBody');

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
}
