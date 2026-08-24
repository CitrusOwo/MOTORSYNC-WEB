<?php
// ═══ DEFINIR BASE URL ═══
// Detecta automáticamente si está en local o en producción
$protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https://' : 'http://';
$host = $_SERVER['HTTP_HOST'];
$base_url = $protocol . $host;

// Para localhost, mantener rutas relativas; para producción, usar absolutas
$is_production = isset($_SERVER['RENDER']) || isset($_SERVER['RENDER_GIT_COMMIT']);
$asset_prefix = $is_production ? '/' : '';
?>

<!DOCTYPE html>
<html lang="es" dir="ltr">
<head>
    <!-- ═══ Meta & SEO ═══ -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>MotorSync — Seguridad Vehicular Inteligente | GPS en Tiempo Real</title>
    <meta name="description" content="MotorSync ofrece dispositivos GPS de rastreo vehicular profesional con corte de motor, geo cercas, alertas en tiempo real y monitoreo 24/7. Protege tu vehículo hoy.">
    <meta name="keywords" content="GPS vehicular, rastreo GPS, seguridad vehicular, tracker GPS, monitoreo vehículos, corte de motor, geo cerca, MotorSync">
    <meta name="author" content="MotorSync">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://motorsync.com/">

    <!-- ═══ Open Graph / Social ═══ -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="MotorSync — Seguridad Vehicular Inteligente">
    <meta property="og:description" content="Dispositivos GPS profesionales con rastreo en tiempo real, corte de motor y monitoreo 24/7.">
    <meta property="og:url" content="https://motorsync.com/">
    <meta property="og:site_name" content="MotorSync">
    <meta property="og:locale" content="es_PE">

    <!-- ═══ Twitter Card ═══ -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="MotorSync — Seguridad Vehicular Inteligente">
    <meta name="twitter:description" content="Dispositivos GPS profesionales con rastreo en tiempo real y monitoreo 24/7.">

    <!-- ═══ Favicon ═══ -->
    <link rel="icon" type="image/png" href="<?php echo $asset_prefix; ?>frontend/assets/img/icono.png">

    <!-- ═══ Fonts: Inter ═══ -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- ═══ Stylesheets (rutas corregidas) ═══ -->
    <link rel="stylesheet" href="<?php echo $asset_prefix; ?>frontend/assets/css/variables.css">
    <link rel="stylesheet" href="<?php echo $asset_prefix; ?>frontend/assets/css/style.css">
    <link rel="stylesheet" href="<?php echo $asset_prefix; ?>frontend/assets/css/animations-scroll.css">
    <link rel="stylesheet" href="<?php echo $asset_prefix; ?>frontend/assets/css/navbar.css">
    <link rel="stylesheet" href="<?php echo $asset_prefix; ?>frontend/assets/css/landing.css">
    <link rel="stylesheet" href="<?php echo $asset_prefix; ?>frontend/assets/css/home.css">
    <link rel="stylesheet" href="<?php echo $asset_prefix; ?>frontend/assets/css/carrito.css">
    <link rel="stylesheet" href="<?php echo $asset_prefix; ?>frontend/assets/css/footer.css">
    <link rel="stylesheet" href="<?php echo $asset_prefix; ?>frontend/assets/css/animations.css">
    <link rel="stylesheet" href="<?php echo $asset_prefix; ?>frontend/assets/css/responsive.css">

    <!-- ═══ Corporate Redesign ═══ -->
    <link rel="stylesheet" href="<?php echo $asset_prefix; ?>frontend/assets/css/beneficios.css">
    <link rel="stylesheet" href="<?php echo $asset_prefix; ?>frontend/assets/css/planes-corporate.css">
    <link rel="stylesheet" href="<?php echo $asset_prefix; ?>frontend/assets/css/hero-final.css">
    <link rel="stylesheet" href="<?php echo $asset_prefix; ?>frontend/assets/css/hero-map.css">
    <link rel="stylesheet" href="<?php echo $asset_prefix; ?>frontend/assets/css/trust-brands-new.css">
    <link rel="stylesheet" href="<?php echo $asset_prefix; ?>frontend/assets/css/app-download.css">
    <link rel="stylesheet" href="<?php echo $asset_prefix; ?>frontend/assets/css/stats-hero.css?v=4">

    <!-- ═══ Three.js ═══ -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

    <!-- ═══ Structured Data (JSON-LD) ═══ -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MotorSync",
        "description": "Empresa de seguridad vehicular y rastreo GPS profesional",
        "url": "https://motorsync.com",
        "logo": "https://motorsync.com/frontend/assets/img/LOGO MOTORSYNC.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "availableLanguage": "Spanish"
        },
        "sameAs": [
            "https://facebook.com/motorsync",
            "https://instagram.com/motorsync"
        ]
    }
    </script>
</head>
<body>
    <!-- ═══ Skip Navigation (Accessibility) ═══ -->
    <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

    <!-- ═══ Header / Navigation ═══ -->
    <?php include 'frontend/sections/header.php'; ?>

    <!-- ═══ Main Content ═══ -->
    <main id="main-content">

        <!-- ═══ 1. HERO ═══ -->
        <?php include 'frontend/sections/hero-final.php'; ?>

        <!-- ═══ NUEVA SECCIÓN DE ESTADÍSTICAS ═══ -->
        <?php include 'frontend/sections/stats-hero.php'; ?>

        <!-- ═══ 2. EMPRESAS QUE CONFÍAN ═══ -->
        <?php include 'frontend/sections/trust-brands-new.php'; ?>

        <!-- ═══ 3. BENEFICIOS ═══ -->
        <?php include 'frontend/sections/benefits-corporate.php'; ?>

        <!-- ═══ 4. CÓMO FUNCIONA ═══ -->
        <?php include 'frontend/sections/how-it-works.php'; ?>

        <!-- ═══ 5. PLANES ═══ -->
        <?php include 'frontend/sections/planes-corporate.php'; ?>

        <!-- ═══ 6. POR QUÉ MOTORSYNC ═══ -->
        <?php include 'frontend/sections/why-motorsync.php'; ?>

        <!-- ═══ 7. TESTIMONIOS ═══ -->
        <?php include 'frontend/sections/testimonios.php'; ?>

        <!-- ═══ 8. DESCARGA LA APP ═══ -->
        <?php include 'frontend/sections/app-download.php'; ?>

        <!-- ═══ 9. PREGUNTAS FRECUENTES ═══ -->
        <?php include 'frontend/sections/faq.php'; ?>

        <!-- ═══ 10. CONTACTO ═══ -->
        <?php include 'frontend/sections/contacto.php'; ?>

    </main>

    <!-- ═══ Cart Panel ═══ -->
    <?php include 'frontend/sections/carrito.php'; ?>

    <!-- ═══ Footer ═══ -->
    <?php include 'frontend/sections/footer.php'; ?>

    <!-- ═══ JavaScript (rutas corregidas) ═══ -->
    <script src="<?php echo $asset_prefix; ?>frontend/assets/js/scroll-animations.js"></script>
    <script type="module" src="<?php echo $asset_prefix; ?>frontend/assets/js/main.js"></script>
    <script src="<?php echo $asset_prefix; ?>frontend/assets/js/landing.js"></script>
    <script src="<?php echo $asset_prefix; ?>frontend/assets/js/carousel.js"></script>
    <script src="<?php echo $asset_prefix; ?>frontend/assets/js/globe.js"></script>
    <script src="<?php echo $asset_prefix; ?>frontend/assets/js/trust-brands-slider.js"></script>
</body>
</html>