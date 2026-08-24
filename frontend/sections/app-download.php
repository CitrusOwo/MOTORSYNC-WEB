<!-- ═══════════════════════════════════════
     APP DOWNLOAD SECTION
     Descarga de aplicación móvil
     ═══════════════════════════════════════ -->

<section class="app-download" id="app">
    <div class="container">

        <div class="app-download_wrapper">

            <!-- CONTENIDO (IZQUIERDA) -->
            <div class="app-download_content">

                <!-- Logo de la app -->
                <div class="app-download_logo-container">
                    <img src="frontend/assets/img/LOGO APP.png" alt="MotorSync App Logo" class="app-download_logo">
                </div>

                <!-- Título -->
                <h2 class="app-download_title">
                    Descarga la App
                </h2>

                <!-- Descripción -->
                <p class="app-download_description">
                    Monitorea tu auto estés donde estés desde tus dispositivos móviles.
                    Control total en tiempo real desde tu celular.
                </p>

                <!-- Features list -->
                <ul class="app-download_features">
                    <li class="app-download_feature">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>Rastreo en tiempo real</span>
                    </li>
                    <li class="app-download_feature">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>Alertas y notificaciones</span>
                    </li>
                    <li class="app-download_feature">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>Historial de rutas</span>
                    </li>
                    <li class="app-download_feature">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>Control remoto</span>
                    </li>
                </ul>

                <!-- Botones de descarga -->
                <div class="app-download_buttons">
                    <a href="https://play.google.com/store/apps/details?id=com.iconicsmart.app&hl=es_PE"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="app-download_btn app-download_btn--playstore">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                        </svg>
                        <div class="app-download_btn-text">
                            <span class="app-download_btn-label">Disponible en</span>
                            <span class="app-download_btn-store">Play Store</span>
                        </div>
                    </a>

                    <!-- App Store (opcional - puedes comentar si no tienen) -->
                    <!--
                    <a href="#"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="app-download_btn app-download_btn--appstore">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                        </svg>
                        <div class="app-download_btn-text">
                            <span class="app-download_btn-label">Disponible en</span>
                            <span class="app-download_btn-store">App Store</span>
                        </div>
                    </a>
                    -->
                </div>

            </div>

            <!-- VISUAL (DERECHA) - MOCKUPS DE CELULARES -->
            <div class="app-download_visual">
                <div class="app-download_mockups">
                    <div class="app-download_phone">
                        <svg viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Frame del celular -->
                            <rect x="10" y="10" width="280" height="580" rx="40" fill="#1A1A1A" stroke="#333" stroke-width="2"/>

                            <!-- Clip path para la pantalla -->
                            <defs>
                                <clipPath id="screenClip">
                                    <rect x="25" y="50" width="250" height="525" rx="25"/>
                                </clipPath>
                            </defs>

                            <!-- Imagen dentro de la pantalla -->
                            <image
                                href="frontend/assets/img/Simulacion.jpeg"
                                x="25"
                                y="50"
                                width="250"
                                height="525"
                                clip-path="url(#screenClip)"
                                preserveAspectRatio="xMidYMid slice"
                            />

                            <!-- Notch -->
                            <rect x="100" y="15" width="100" height="25" rx="12" fill="#1A1A1A"/>
                        </svg>
                    </div>
                </div>

                <!-- Elementos decorativos -->
                <div class="app-download_decoration">
                    <div class="app-download_circle app-download_circle--1"></div>
                    <div class="app-download_circle app-download_circle--2"></div>
                    <div class="app-download_circle app-download_circle--3"></div>
                </div>
            </div>

        </div>

    </div>
</section>
