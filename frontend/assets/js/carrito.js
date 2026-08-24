/* ═══════════════════════════════════════
   CART MODULE
   LocalStorage persistence, UI updates,
   notifications, bounce animation
   ═══════════════════════════════════════ */

import { PRODUCTS } from './productos.js';

const STORAGE_KEY = 'motorsync_cart';
let items = [];

// ─── Persistence ───
function load() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        items = data ? JSON.parse(data) : [];
    } catch (e) {
        items = [];
    }
}

function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

// ─── Public API ───
export function getItems() { return items; }
export function getCount() { return items.reduce((sum, i) => sum + i.qty, 0); }
export function getTotal() { return items.reduce((sum, i) => sum + (i.price * i.qty), 0); }

export function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = items.find(i => i.id === productId);
    if (existing) {
        existing.qty++;
    } else {
        items.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
    }
    save();
    updateCartUI();
    showNotification(product.name);
    bounceCartIcon();
}

export function removeFromCart(productId) {
    items = items.filter(i => i.id !== productId);
    save();
    updateCartUI();
}

export function updateQty(productId, delta) {
    const item = items.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }
    save();
    updateCartUI();
}

export function clearCart() {
    items = [];
    save();
    updateCartUI();
}

// ─── UI Elements ───
let cartToggle, cartPanel, cartOverlay, cartClose;
let cartNavCount, cartPanelBadge;
let cartItems, cartEmpty, cartTotal, cartFooter, cartClear, cartCheckout;
let notificationsContainer;

// ─── Panel Open/Close ───
function openCart() {
    cartPanel.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartPanel.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ─── Update DOM ───
export function updateCartUI() {
    const count = getCount();

    // ─── Actualizar badge del navbar ───
    if (cartNavCount) {
        cartNavCount.textContent = count;
        cartNavCount.classList.toggle('visible', count > 0);
    }

    // ─── Actualizar badge del panel "Mi Carrito" ───
    if (cartPanelBadge) {
        cartPanelBadge.textContent = count;
        cartPanelBadge.style.display = count > 0 ? 'inline' : 'none';
    }

    // ─── Mostrar/Ocultar elementos ───
    if (count === 0) {
        if (cartEmpty) cartEmpty.style.display = 'flex';
        if (cartItems) cartItems.style.display = 'none';
        if (cartFooter) cartFooter.style.display = 'none';
    } else {
        if (cartEmpty) cartEmpty.style.display = 'none';
        if (cartItems) cartItems.style.display = 'flex';
        if (cartFooter) cartFooter.style.display = 'flex';
    }

    // ─── Renderizar items ───
    if (cartItems) {
        cartItems.innerHTML = items.map(item => `
            <div class="cart_item" data-id="${item.id}">
                <div class="cart_item_img">
                    <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
                        <rect x="20" y="25" width="40" height="30" rx="4" stroke="#a3a3a3" stroke-width="1.5"/>
                        <circle cx="40" cy="40" r="6" stroke="#a3a3a3" stroke-width="1"/>
                        <circle cx="40" cy="40" r="2" fill="#a3a3a3"/>
                    </svg>
                </div>
                <div class="cart_item_details">
                    <span class="cart_item_name">${item.name}</span>
                    <span class="cart_item_price">S/ ${item.price} c/u</span>
                    <div class="cart_item_controls">
                        <button class="cart_item_qty_btn" data-action="decrease" data-id="${item.id}" aria-label="Disminuir">−</button>
                        <span class="cart_item_qty_number">${item.qty}</span>
                        <button class="cart_item_qty_btn" data-action="increase" data-id="${item.id}" aria-label="Aumentar">+</button>
                        <span class="cart_item_subtotal">S/ ${item.price * item.qty}</span>
                        <button class="cart_item_remove" data-id="${item.id}" aria-label="Eliminar">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ─── Actualizar total ───
    if (cartTotal) {
        cartTotal.textContent = `S/ ${getTotal()}`;
    }

    bindCartItemEvents();
}

function bindCartItemEvents() {
    if (!cartItems) return;
    
    cartItems.querySelectorAll('.cart_item_qty_btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            updateQty(id, btn.dataset.action === 'increase' ? 1 : -1);
        });
    });
    cartItems.querySelectorAll('.cart_item_remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const el = btn.closest('.cart_item');
            el.classList.add('removing');
            setTimeout(() => removeFromCart(parseInt(btn.dataset.id)), 300);
        });
    });
}

// ─── Notification Toast ───
function showNotification(productName) {
    if (!notificationsContainer) return;
    
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.innerHTML = `
        <div class="notification_icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div class="notification_content">
            <div class="notification_title">Agregado al carrito</div>
            <div class="notification_text">${productName}</div>
        </div>
    `;
    notificationsContainer.appendChild(notif);
    setTimeout(() => {
        notif.classList.add('removing');
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// ─── Bounce Icon Animation ───
function bounceCartIcon() {
    if (!cartToggle) return;
    cartToggle.classList.remove('bounce');
    void cartToggle.offsetWidth;
    cartToggle.classList.add('bounce');
}

// ─── Init ───
export function initCart() {
    // Navbar
    cartToggle = document.getElementById('cartToggle');
    cartNavCount = document.getElementById('cartCount');
    
    // Panel
    cartPanel = document.getElementById('cartPanel');
    cartOverlay = document.getElementById('cartOverlay');
    cartClose = document.getElementById('cartClose');
    cartPanelBadge = document.getElementById('cartCountBadge');
    cartItems = document.getElementById('cartItems');
    cartEmpty = document.getElementById('cartEmpty');
    cartTotal = document.getElementById('cartTotal');
    cartFooter = document.getElementById('cartFooter');
    cartClear = document.getElementById('cartClear');
    cartCheckout = document.getElementById('cartCheckout');
    notificationsContainer = document.getElementById('notifications');

    load();

    // ─── Eventos ───
    if (cartToggle) cartToggle.addEventListener('click', openCart);
    if (cartClose) cartClose.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cartPanel && cartPanel.classList.contains('active')) closeCart();
    });

    if (cartClear) cartClear.addEventListener('click', clearCart);

    if (cartCheckout) {
        cartCheckout.addEventListener('click', () => {
            if (getCount() === 0) return;
            const msg = encodeURIComponent(
                `Hola, me interesa comprar:\n${getItems().map(i => `- ${i.name} (x${i.qty})`).join('\n')}\nTotal: S/ ${getTotal()}`
            );
            window.open(`https://wa.me/tu-numero?text=${msg}`, '_blank');
        });
    }

    updateCartUI();
}