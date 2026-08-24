<!-- ═══════════════════════════════════════
     STATS HERO SECTION - 99% y +10,000
     ═══════════════════════════════════════ -->

<section class="stats-hero" aria-label="Estadísticas de MotorSync">
    
    <!-- Imagen de fondo -->
    <div class="stats-hero_bg">
        <img 
            src="frontend/assets/img/background-city.jpg" 
            alt="Ciudad de fondo" 
            class="stats-hero_bg-img"
            loading="lazy"
        >
        <div class="stats-hero_bg-overlay"></div>
    </div>

    <div class="container">
        
        <div class="stats-hero_wrapper">

            <!-- ═══ IZQUIERDA: Círculo 99% ═══ -->
            <div class="stats-hero_left">
                <div class="stats-hero_circle-wrapper">
                    
                    <!-- SVG Contador Circular -->
                    <div class="stats-hero_circular">
                        <svg class="stats-hero_circular-svg" viewBox="0 0 120 120">
                            <!-- Círculo de fondo (gris) -->
                            <circle 
                                class="stats-hero_circular-bg"
                                cx="60" 
                                cy="60" 
                                r="52"
                            />
                            <!-- Círculo de progreso (azul) - 99% -->
                            <!-- Los atributos stroke-dasharray y stroke-dashoffset están en el CSS -->
                            <circle 
                                class="stats-hero_circular-progress"
                                cx="60" 
                                cy="60" 
                                r="52"
                            />
                        </svg>
                        <!-- Número 99% -->
                        <span class="stats-hero_circular-number">99%</span>
                    </div>

                    <!-- Texto abajo -->
                    <p class="stats-hero_circle-label">TASA DE RECUPERACION</p>

                </div>
            </div>

            <!-- ═══ DERECHA: Auto GRANDE + texto abajo ═══ -->
            <div class="stats-hero_right">
                
                <!-- Auto grande -->
                <img 
                    src="frontend/assets/img/car.png" 
                    alt="Vehículo" 
                    class="stats-hero_car-img"
                    loading="lazy"
                >

                <!-- Texto +10,000 abajo del auto -->
                <p class="stats-hero_bottom-text">+10,000 Vehículos Recuperados</p>

            </div>

        </div>

    </div>
</section>