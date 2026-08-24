<!-- ═══════════════════════════════════════
     HEADER & NAVIGATION
     Fixed navbar with logo, links, cart, WhatsApp CTA
     ═══════════════════════════════════════ -->

<?php
$isHome = (basename($_SERVER['SCRIPT_NAME']) === 'index.php');
$base = $isHome ? '' : 'index.php';
?>

<header id="navbar" class="nav<?= !$isHome ? ' nav--solid' : '' ?>" role="banner">
    <!-- Logo -->
    <a href="<?= $base ?: '#hero' ?>" class="nav_logo" aria-label="MotorSync - Inicio">
        <img src="frontend/assets/img/LOGO MOTORSYNC.png" alt="MotorSync" class="nav_logo_img">
    </a>

    <!-- Navigation Links (centered) -->
    <nav class="nav_links" id="navLinks" role="navigation" aria-label="Navegación principal">
        <a href="<?= $base ?>#hero" class="nav_link<?= $isHome ? ' nav_link--active' : '' ?>">Inicio</a>
        <a href="<?= $base ?>#beneficios" class="nav_link">Beneficios</a>
        <a href="productos.php" class="nav_link<?= !$isHome ? ' nav_link--active' : '' ?>">Dispositivos</a>
        <a href="<?= $base ?>#planes" class="nav_link">Planes</a>
        <a href="<?= $base ?>#testimonios" class="nav_link">Testimonios</a>
        <a href="<?= $base ?>#contacto" class="nav_link">Contacto</a>
    </nav>

    <!-- Actions -->
    <div class="nav_actions">
        <a href="https://wa.me/tu-numero" class="nav_whatsapp" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.214l-.3-.18-2.868.852.852-2.868-.18-.3A8 8 0 1112 20z"/></svg>
            <span>WhatsApp</span>
        </a>
        <button class="nav_cart" id="cartToggle" aria-label="Ver carrito de compras">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
            <span class="nav_cart_count" id="cartCount" aria-live="polite">0</span>
        </button>
        <button class="nav_hamburger" id="navHamburger" aria-label="Abrir menú" aria-expanded="false">
            <span></span><span></span><span></span>
        </button>
    </div>
</header>

<!-- Mobile Side Panel -->
<div class="nav_overlay" id="navOverlay"></div>
<aside class="nav_drawer" id="navDrawer" aria-label="Menú de navegación">
    <div class="nav_drawer_header">
        <a href="<?= $base ?: '#hero' ?>" class="nav_logo" aria-label="MotorSync - Inicio">
            <img src="frontend/assets/img/LOGO MOTORSYNC.png" alt="MotorSync" class="nav_drawer_logo">
        </a>
        <button class="nav_drawer_close" id="navDrawerClose" aria-label="Cerrar menú">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
    </div>
    <nav class="nav_drawer_links">
        <a href="<?= $base ?>#hero" class="nav_drawer_link<?= $isHome ? ' nav_drawer_link--active' : '' ?>">Inicio</a>
        <a href="<?= $base ?>#beneficios" class="nav_drawer_link">Beneficios</a>
        <a href="productos.php" class="nav_drawer_link<?= !$isHome ? ' nav_drawer_link--active' : '' ?>">Dispositivos</a>
        <a href="<?= $base ?>#planes" class="nav_drawer_link">Planes</a>
        <a href="<?= $base ?>#testimonios" class="nav_drawer_link">Testimonios</a>
        <a href="<?= $base ?>#contacto" class="nav_drawer_link">Contacto</a>
    </nav>
    <div class="nav_drawer_footer">
        <a href="https://wa.me/tu-numero" class="nav_drawer_whatsapp" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
            <span>Contactar por WhatsApp</span>
        </a>
    </div>
</aside>
