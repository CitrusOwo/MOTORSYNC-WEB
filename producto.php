<!DOCTYPE html>
<html lang="es" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Producto — MotorSync GPS</title>
    <meta name="robots" content="index, follow">
    <link rel="icon" type="image/png" href="frontend/assets/img/LOGO MOTORSYNC.png">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="frontend/assets/css/variables.css">
    <link rel="stylesheet" href="frontend/assets/css/style.css">
    <link rel="stylesheet" href="frontend/assets/css/navbar.css">
    <link rel="stylesheet" href="frontend/assets/css/producto.css">
    <link rel="stylesheet" href="frontend/assets/css/carrito.css">
    <link rel="stylesheet" href="frontend/assets/css/footer.css">
    <link rel="stylesheet" href="frontend/assets/css/animations.css">
    <link rel="stylesheet" href="frontend/assets/css/responsive.css">
</head>

<body class="producto-page">
    <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

    <?php include 'frontend/sections/header.php'; ?>

    <main id="main-content">
<div class="pdp" id="productPage">
    <div class="container">
        
        <!-- Zona donde el JS pondrá la imagen, título y precio -->
        <div id="productMainInfo"></div>

        <!-- ═══ SELECTOR DE OPCIONES (12V / 24V) ═══ -->
        <!-- He movido esto DENTRO del contenedor de la derecha en el JS, pero aquí está el estilo para que no se vea horrible -->
        <div class="pdp_options_section" style="max-width: 500px; margin-top: 20px;">
            <label class="pdp_options_label" style="display: block; font-weight: 600; margin-bottom: 8px; color: #0A0E17;">
                Escoge tu Equipo 12v o 24v puedes incluir la instalación a domicilio
            </label>
            
            <select class="pdp_options_select" id="productVariant" style="width: 100%; padding: 14px 16px; border: 1px solid #ccc; border-radius: 8px; background: #fff; font-size: 1rem; color: #111; appearance: auto; margin-bottom: 16px;">
                <option value="" disabled selected>Elige una opción</option>
            </select>
        </div>

        <!-- ═══ ZONA DE PAGO Y BOTONES ═══ -->
        <div class="pdp_buy_zone" style="display: flex; align-items: center; gap: 20px; max-width: 600px; margin-bottom: 30px;">
            <button class="btn btn--primary btn--lg" id="btnAddCartVariant" style="flex: 1; justify-content: center; padding: 14px 20px; font-weight: 600;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                </svg>
                Agregar al carrito
            </button>

            <div class="pdp_getnet_logo" style="display: flex; align-items: center;">
                <img src="frontend/assets/img/getnet-logo.png" alt="Getnet by Santander" style="height: 28px; object-fit: contain;">
            </div>
        </div>

    </div>
</div>
    </main>

    <?php include 'frontend/sections/carrito.php'; ?>
    <?php include 'frontend/sections/footer.php'; ?>

    <script type="module" src="frontend/assets/js/producto-page.js"></script>
</body>
</html>