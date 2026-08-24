<!DOCTYPE html>
<html lang="es" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dispositivos GPS — MotorSync | Catálogo</title>
    <meta name="description" content="Explora nuestro catálogo de dispositivos GPS vehiculares. Rastreadores con corte de motor, anti-jamming y cobertura nacional e internacional.">
    <link rel="icon" type="image/png" href="frontend/assets/img/LOGO MOTORSYNC.png">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="frontend/assets/css/variables.css">
    <link rel="stylesheet" href="frontend/assets/css/style.css">
    <link rel="stylesheet" href="frontend/assets/css/navbar.css">
    <link rel="stylesheet" href="frontend/assets/css/catalogo.css">
    <link rel="stylesheet" href="frontend/assets/css/carrito.css">
    <link rel="stylesheet" href="frontend/assets/css/footer.css">
    <link rel="stylesheet" href="frontend/assets/css/depth.css">
    <link rel="stylesheet" href="frontend/assets/css/animations.css">
    <link rel="stylesheet" href="frontend/assets/css/responsive.css">
    <link rel="stylesheet" href="frontend/assets/css/store-theme.css">
</head>
<body class="store-page">
    <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

    <?php include 'frontend/sections/header.php'; ?>

    <main id="main-content">
        <section id="catalogo" class="catalog">
            <div class="catalog_container">

                <nav class="catalog_breadcrumb" aria-label="Breadcrumb">
                    <a href="index.php">Inicio</a>
                    <span>/</span>
                    <span>Dispositivos GPS</span>
                </nav>

                <div class="catalog_layout">
                    <!-- Sidebar -->
                    <aside class="catalog_sidebar">
                        <div class="catalog_sidebar_section">
                            <h3 class="catalog_sidebar_title">Filtrar por precio</h3>
                            <div class="catalog_price_range">
                                <!-- Ajustado el max a 1600 para que se vea el Anti-Jammer -->
                                <input type="range" min="0" max="1600" value="1600" class="catalog_range" id="priceRange">
                                <div class="catalog_price_labels">
                                    <span>S/ 0</span>
                                    <span id="priceRangeValue">S/ 1600</span>
                                </div>
                            </div>
                            <button class="catalog_filter_btn" id="applyPriceFilter">Filtrar</button>
                        </div>

                        <div class="catalog_sidebar_section">
                            <h3 class="catalog_sidebar_title">Categoría</h3>
                            <ul class="catalog_filter_list" id="categoryFilters">
                                <li><label class="catalog_checkbox"><input type="checkbox" value="vehicular" checked><span>Vehicular</span></label></li>
                                <li><label class="catalog_checkbox"><input type="checkbox" value="moto" checked><span>Moto</span></label></li>
                                <li><label class="catalog_checkbox"><input type="checkbox" value="flota" checked><span>Flotas</span></label></li>
                                <li><label class="catalog_checkbox"><input type="checkbox" value="portatil" checked><span>Portátil</span></label></li>
                            </ul>
                        </div>
                        
                        <!-- ✅ SECCIÓN "MÁS VENDIDOS" ELIMINADA COMPLETAMENTE -->
                        
                    </aside>

                    <!-- Main -->
                    <div class="catalog_main">
                        <div class="catalog_toolbar">
                            <div class="catalog_toolbar_left">
                                <input type="text" class="catalog_search" id="catalogSearch" placeholder="Buscar dispositivo..." aria-label="Buscar">
                            </div>
                            <div class="catalog_toolbar_right">
                                <span class="catalog_results_count" id="resultsCount">5 productos</span>
                                <select class="catalog_sort" id="filterSort" aria-label="Ordenar">
                                    <option value="featured">Más vendidos</option>
                                    <option value="price-asc">Precio: menor a mayor</option>
                                    <option value="price-desc">Precio: mayor a menor</option>
                                    <option value="newest">Más recientes</option>
                                    <option value="name">Nombre A-Z</option>
                                </select>
                                <div class="catalog_view_toggle">
                                    <button class="catalog_view_btn catalog_view_btn--active" data-view="grid" aria-label="Cuadrícula">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                                    </button>
                                    <button class="catalog_view_btn" data-view="list" aria-label="Lista">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="18" height="4"/><rect x="3" y="10" width="18" height="4"/><rect x="3" y="16" width="18" height="4"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="catalog_grid" id="catalogGrid"></div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <?php include 'frontend/sections/carrito.php'; ?>
    <?php include 'frontend/sections/footer.php'; ?>

    <script type="module" src="frontend/assets/js/productos-page.js"></script>
</body>
</html>