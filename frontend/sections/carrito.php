<!-- ═══════════════════════════════════════
     CART PANEL
     Slide-in panel with items, qty controls, checkout
     ═══════════════════════════════════════ -->

<!-- Cart Overlay -->
<div class="cart_overlay" id="cartOverlay" aria-hidden="true"></div>

<!-- Cart Panel -->
<aside class="cart_panel" id="cartPanel" role="dialog" aria-label="Carrito de compras" aria-modal="true">
    <!-- Header -->
    <div class="cart_header">
        <h3 class="cart_title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
            </svg>
            Mi Carrito
            <span id="cartCountBadge">0</span>
        </h3>
        <button class="cart_close" id="cartClose" aria-label="Cerrar carrito">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
        </button>
    </div>

    <!-- Body -->
    <div class="cart_body" id="cartBody">
        <!-- Empty State -->
        <div class="cart_empty" id="cartEmpty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
            </svg>
            <p class="cart_empty_text">Tu carrito está vacío</p>
            <p class="cart_empty_hint">Explora nuestro catálogo y agrega dispositivos</p>
        </div>

        <!-- Cart Items -->
        <div class="cart_items" id="cartItems" aria-live="polite">
            <!-- Items rendered dynamically by carrito.js -->
        </div>
    </div>

    <!-- Footer -->
    <div class="cart_footer" id="cartFooter" style="display:none;">
        <div class="cart_total_row">
            <span class="cart_total_label">Total:</span>
            <span class="cart_total_amount" id="cartTotal">S/ 0</span>
        </div>
        <div class="cart_actions">
            <!-- Botón Vaciar - Solo icono -->
            <button class="cart_clear_btn" id="cartClear" aria-label="Vaciar carrito">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                </svg>
            </button>
            <!-- Botón Comprar - Compacto -->
            <button class="cart_checkout_btn" id="cartCheckout">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                </svg>
                <span>Comprar</span>
            </button>
        </div>
    </div>
</aside>

<!-- Toast Notifications Container -->
<div class="notifications" id="notifications" aria-live="polite" aria-atomic="true"></div>