/* ═══════════════════════════════════════
   PRODUCTO PAGE - Single Product View
   Gallery, tabs, related products + Variants (Integrated)
   ═══════════════════════════════════════ */

import { initNavbar } from './navbar.js';
import { initCart, addToCart } from './carrito.js';
import { PRODUCTS, getProductSVG, getProductById } from './productos.js';
import { initPageLoad, initScrollProgress, initLazyLoad } from './animaciones.js';

initPageLoad();

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initCart();
    initScrollProgress();
    initLazyLoad();

    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id') || params.get('slug');
    const product = getProductById(productId);
    const container = document.getElementById('productPage');

    if (!product) {
        container.innerHTML = `
            <div class="pdp_not_found">
                <h2>Producto no encontrado</h2>
                <p>El producto que buscas no existe o fue removido.</p>
                <a href="productos.php" class="pdp_btn pdp_btn--primary">Ver catálogo</a>
            </div>`;
        return;
    }

    document.title = `${product.name} — MotorSync GPS`;

    const stockLabel = product.stock === 'available' ? 'En stock' : 'Últimas unidades';
    const stockClass = product.stock === 'available' ? 'pdp_stock--available' : 'pdp_stock--low';
    const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

    const related = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

    container.innerHTML = `
        <!-- Breadcrumb -->
        <nav class="pdp_breadcrumb">
            <a href="index.php">Inicio</a>
            <span>/</span>
            <a href="productos.php">Dispositivos</a>
            <span>/</span>
            <span>${product.name}</span>
        </nav>

        <!-- Product Main -->
        <div class="pdp_main">
            <!-- Gallery -->
            <div class="pdp_gallery">
                <div class="pdp_gallery_main" id="galleryMain">
                    <div class="pdp_gallery_svg">${getProductSVG(product)}</div>
                    ${discount ? `<span class="pdp_discount_badge">-${discount}%</span>` : ''}
                    <div class="pdp_zoom_hint">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                        Pasar mouse para zoom
                    </div>
                </div>
                <div class="pdp_gallery_thumbs">
                    ${product.images.map((img, i) => `
                        <button class="pdp_thumb${i === 0 ? ' pdp_thumb--active' : ''}" data-index="${i}" aria-label="${img.alt}">
                            <div class="pdp_thumb_svg">${getProductSVG(product)}</div>
                        </button>
                    `).join('')}
                </div>
            </div>

            <!-- Info -->
            <div class="pdp_info">
                <div class="pdp_info_badges">
                    ${product.badges.map(b => {
                        const labels = { new: 'Nuevo', offer: 'Oferta', best: 'Más vendido' };
                        return `<span class="pdp_badge pdp_badge--${b}">${labels[b]}</span>`;
                    }).join('')}
                </div>

                <h1 class="pdp_title">${product.name}</h1>

                <div class="pdp_meta">
                    <span class="pdp_sku">SKU: ${product.sku}</span>
                    <span class="pdp_separator">|</span>
                    <span class="pdp_brand">Marca: <strong>${product.brand}</strong></span>
                    <span class="pdp_separator">|</span>
                    <span class="pdp_model">Modelo: <strong>${product.model}</strong></span>
                </div>

                <div class="pdp_price_block">
                    ${product.oldPrice ? `<span class="pdp_price_old">S/ ${product.oldPrice.toFixed(2)}</span>` : ''}
                    <span class="pdp_price_current" id="basePriceDisplay">S/ ${product.price.toFixed(2)}</span>
                    ${discount ? `<span class="pdp_price_discount">Ahorras S/ ${(product.oldPrice - product.price).toFixed(2)}</span>` : ''}
                </div>

                <div class="pdp_stock ${stockClass}">
                    <span class="pdp_stock_dot"></span>
                    <span>${stockLabel}</span>
                    <span class="pdp_stock_qty">(${product.stockQty} disponibles)</span>
                </div>

                <p class="pdp_short_desc">${product.desc}</p>

                <div class="pdp_details_grid">
                    <div class="pdp_detail">
                        <span class="pdp_detail_label">Garantía</span>
                        <span class="pdp_detail_value">${product.warranty}</span>
                    </div>
                    <div class="pdp_detail">
                        <span class="pdp_detail_label">Compatibilidad</span>
                        <span class="pdp_detail_value">${product.compatibility}</span>
                    </div>
                </div>

                <!-- ═══ SELECTOR DE VARIANTES + BOTÓN COMPRAR (NUEVO DISEÑO) ═══ -->
                <div class="pdp_variant_container">
                    <label class="pdp_variant_label">
                        Escoge tu Equipo (12V / 24V) o incluye instalación:
                    </label>
                    
                    <div class="pdp_variant_row">
                        <select class="pdp_variant_select" id="productVariant">
                            <option value="" disabled selected>Elige una opción</option>
                        </select>
                    </div>

                    <!-- El botón negro ahora es el de COMPRAR, es azul y ocupa todo el ancho -->
                    <button class="pdp_btn pdp_btn--primary pdp_btn--lg pdp_buy_full" id="btnBuyVariant">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                        Comprar ahora
                    </button>
                </div>

                <!-- ═══ BOTONES SECUNDARIOS ═══ -->
                <div class="pdp_actions">
                    <!-- Botón Agregar al carrito -->
                    <button class="pdp_btn pdp_btn--outline pdp_btn--lg" id="btnAddCart">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
                        Agregar al carrito
                    </button>
                    
                    <!-- Botón WhatsApp -->
                    <a href="https://wa.me/tu-numero?text=${encodeURIComponent(`Hola, me interesa el ${product.name} (${product.sku})`)}" class="pdp_btn pdp_btn--whatsapp pdp_btn--lg" target="_blank" rel="noopener">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
                        Consultar por WhatsApp
                    </a>
                </div>

                <div class="pdp_guarantees">
                    <div class="pdp_guarantee">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        <span>Garantía ${product.warranty}</span>
                    </div>
                    <div class="pdp_guarantee">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                        <span>Envío a todo Lima</span>
                    </div>
                    <div class="pdp_guarantee">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
                        <span>Instalación incluida</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tabs -->
        <div class="pdp_tabs">
            <div class="pdp_tabs_nav">
                <button class="pdp_tab pdp_tab--active" data-tab="description">Descripción</button>
                <button class="pdp_tab" data-tab="specs">Especificaciones</button>
                <button class="pdp_tab" data-tab="installation">Instalación</button>
                <button class="pdp_tab" data-tab="faq">Preguntas frecuentes</button>
            </div>
            <div class="pdp_tabs_content">
                <div class="pdp_tab_panel pdp_tab_panel--active" id="tab-description">
                    <p>${product.fullDesc}</p>
                </div>
                <div class="pdp_tab_panel" id="tab-specs">
                    <ul class="pdp_specs_list">
                        ${product.specs.map(s => `<li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>${s}</li>`).join('')}
                    </ul>
                </div>
                <div class="pdp_tab_panel" id="tab-installation">
                    <ol class="pdp_install_list">
                        ${product.installation.map(s => `<li>${s}</li>`).join('')}
                    </ol>
                </div>
                <div class="pdp_tab_panel" id="tab-faq">
                    <div class="pdp_faq_list">
                        ${product.faq.map(f => `
                            <details class="pdp_faq_item">
                                <summary>${f.q}</summary>
                                <p>${f.a}</p>
                            </details>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>

        <!-- Related Products -->
        <div class="pdp_related">
            <h2 class="pdp_related_title">Productos relacionados</h2>
            <div class="pdp_related_grid">
                ${related.map(p => `
                    <a href="producto.php?id=${p.id}" class="pdp_related_card">
                        <div class="pdp_related_img">${getProductSVG(p)}</div>
                        <div class="pdp_related_info">
                            <h3>${p.name}</h3>
                            <div class="pdp_related_price">
                                <span class="pdp_related_current">S/ ${p.price}</span>
                                ${p.oldPrice ? `<span class="pdp_related_old">S/ ${p.oldPrice}</span>` : ''}
                            </div>
                        </div>
                    </a>
                `).join('')}
            </div>
        </div>
    `;

    // ═══ LÓGICA DE VARIANTES Y COMPRA ═══
    const variantSelect = document.getElementById('productVariant');
    const buyVariantBtn = document.getElementById('btnBuyVariant');
    const addCartBtn = document.getElementById('btnAddCart');
    const priceDisplay = document.getElementById('basePriceDisplay');

    const variantOptions = [
        { label: 'Equipo 12V', priceAdd: 0 },
        { label: 'Equipo 24V', priceAdd: 0 },
        { label: 'Equipo 12V + Instalación', priceAdd: 120.00 },
        { label: 'Equipo 24V + Instalación', priceAdd: 120.00 }
    ];

    variantOptions.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.label;
        option.textContent = opt.label;
        option.dataset.priceAdd = opt.priceAdd;
        variantSelect.appendChild(option);
    });

    function getTotalPrice() {
        const basePrice = product.price;
        const selectedIndex = variantSelect.selectedIndex;
        if (selectedIndex === 0) return basePrice;
        const extraCost = parseFloat(variantSelect.options[selectedIndex].dataset.priceAdd) || 0;
        return basePrice + extraCost;
    }

    variantSelect.addEventListener('change', () => {
        const total = getTotalPrice();
        priceDisplay.textContent = `S/ ${total.toFixed(2)}`;
    });

    // 🟢 NUEVO BOTÓN DE COMPRAR (Reemplaza al antiguo botón azul)
    buyVariantBtn.addEventListener('click', () => {
        if (!variantSelect.value) {
            alert('Por favor, selecciona una opción de equipo e instalación.');
            return;
        }
        const totalPrice = getTotalPrice();
        const variantLabel = variantSelect.value;
        
        // Agregar al carrito con la variante seleccionada
        addToCart({
            id: product.id + '-' + variantLabel.replace(/\s/g, '-').toLowerCase(),
            name: `${product.name} (${variantLabel})`,
            price: totalPrice,
            image: product.images[0].src
        });

        // Redirigir a WhatsApp para finalizar la compra
        const msg = encodeURIComponent(`Hola, quiero comprar: ${product.name} (${variantLabel}) - S/ ${totalPrice.toFixed(2)}`);
        window.open(`https://wa.me/tu-numero?text=${msg}`, '_blank');
    });

    // 🔵 BOTÓN AGREGAR AL CARRITO (Sin variante - o puedes agregar la lógica de variante aquí si quieres)
    addCartBtn.addEventListener('click', () => {
        addToCart(product.id);
    });

    // --- Interactions (Tus interacciones originales) ---

    // Tabs
    container.querySelectorAll('.pdp_tab').forEach(tab => {
        tab.addEventListener('click', () => {
            container.querySelectorAll('.pdp_tab').forEach(t => t.classList.remove('pdp_tab--active'));
            container.querySelectorAll('.pdp_tab_panel').forEach(p => p.classList.remove('pdp_tab_panel--active'));
            tab.classList.add('pdp_tab--active');
            container.querySelector(`#tab-${tab.dataset.tab}`).classList.add('pdp_tab_panel--active');
        });
    });

    // Gallery thumbs
    container.querySelectorAll('.pdp_thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
            container.querySelectorAll('.pdp_thumb').forEach(t => t.classList.remove('pdp_thumb--active'));
            thumb.classList.add('pdp_thumb--active');
        });
    });

    // Gallery zoom
    const galleryMain = container.querySelector('.pdp_gallery_main');
    const gallerySvg = galleryMain.querySelector('.pdp_gallery_svg');
    galleryMain.addEventListener('mousemove', (e) => {
        const rect = galleryMain.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        gallerySvg.style.transformOrigin = `${x}% ${y}%`;
        gallerySvg.style.transform = 'scale(1.8)';
    });
    galleryMain.addEventListener('mouseleave', () => {
        gallerySvg.style.transform = 'scale(1)';
    });
});