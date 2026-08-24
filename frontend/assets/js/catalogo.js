/* ═══════════════════════════════════════
   CATALOGO.JS - Lógica de renderizado y filtros (Sin sidebar)
   ═══════════════════════════════════════ */

import { PRODUCTS, getProductSVG } from './productos.js';
import { addToCart } from './carrito.js';

export function initCatalog() {
    const grid = document.getElementById('catalogGrid');
    const searchInput = document.getElementById('catalogSearch');
    const priceRange = document.getElementById('priceRange');
    const priceRangeValue = document.getElementById('priceRangeValue');
    const categoryCheckboxes = document.querySelectorAll('#categoryFilters input[type="checkbox"]');
    const sortSelect = document.getElementById('filterSort');
    const resultsCount = document.getElementById('resultsCount');
    const applyFilterBtn = document.getElementById('applyPriceFilter');

    let filteredProducts = [...PRODUCTS];

    // ─── Renderizar productos ───
    function renderProducts(products) {
        if (products.length === 0) {
            grid.innerHTML = `
                <div class="catalog_empty">
                    <p>No se encontraron dispositivos con los filtros seleccionados.</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = products.map(product => `
            <div class="product-card" data-id="${product.id}">
                <div class="product-card_image-wrapper">
                    ${getProductSVG(product)}
                    ${product.badges && product.badges.length > 0 ? `
                        <div class="product-card_badges">
                            ${product.badges.map(b => `<span class="product-badge product-badge--${b}">${b === 'new' ? 'NUEVO' : b === 'best' ? 'TOP' : b === 'offer' ? 'OFERTA' : b}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
                <div class="product-card_content">
                    <span class="product-card_category">${product.category.toLowerCase()}</span>
                    <h3 class="product-card_title">${product.name}</h3>
                    <p class="product-card_desc">${product.desc}</p>
                    <div class="product-card_price">
                        <span class="product-price_current">S/ ${product.price.toFixed(2)}</span>
                        ${product.oldPrice ? `<span class="product-price_old">S/ ${product.oldPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <div class="product-card_actions">
                        <button class="btn-add-cart" data-id="${product.id}">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
                            <span>Agregar</span>
                        </button>
                        <a href="producto.php?id=${product.id}" class="btn-view-detail">
                            <span>Ver detalle</span>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

        // Re-attach add to cart events
        document.querySelectorAll('.btn-add-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                addToCart(btn.dataset.id);
            });
        });
    }

    // ─── Aplicar Filtros ───
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const maxPrice = parseFloat(priceRange.value);
        const selectedCategories = Array.from(categoryCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        // 1. Filtrar por búsqueda
        let result = PRODUCTS.filter(p => 
            p.name.toLowerCase().includes(searchTerm) || 
            p.category.toLowerCase().includes(searchTerm) ||
            p.desc.toLowerCase().includes(searchTerm)
        );

        // 2. Filtrar por precio
        result = result.filter(p => p.price <= maxPrice);

        // 3. Filtrar por categoría
        result = result.filter(p => selectedCategories.includes(p.category.toLowerCase()));

        // 4. Ordenar
        const sortBy = sortSelect.value;
        switch(sortBy) {
            case 'price-asc': result.sort((a, b) => a.price - b.price); break;
            case 'price-desc': result.sort((a, b) => b.price - a.price); break;
            case 'newest': result.sort((a, b) => a.badges.includes('new') ? -1 : 1); break;
            case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break;
            default: break; // featured
        }

        filteredProducts = result;
        renderProducts(result);
        resultsCount.textContent = `${result.length} productos`;
    }

    // ─── Event Listeners ───
    searchInput.addEventListener('input', applyFilters);
    priceRange.addEventListener('input', () => {
        priceRangeValue.textContent = `S/ ${priceRange.value}`;
    });
    applyFilterBtn.addEventListener('click', applyFilters);
    categoryCheckboxes.forEach(cb => cb.addEventListener('change', applyFilters));
    sortSelect.addEventListener('change', applyFilters);

    // ─── Inicializar ───
    applyFilters(); 
}