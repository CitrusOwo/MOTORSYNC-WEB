<!-- ═══════════════════════════════════════
     CONTACT / QUOTE SECTION
     Formulario de Cotización estilo MotorSync
     ═══════════════════════════════════════ -->

<section id="contacto" class="contact" aria-labelledby="contactTitle">
    <div class="container">

        <div class="section_header" data-animate="fade">
            <span class="section_badge">Cotización</span>
            <h2 class="section_title" id="contactTitle">Solicita tu <span class="gradient-text">Cotización</span></h2>
            <p class="section_subtitle">Completa tus datos y nuestro equipo te contactará en menos de 15 minutos.</p>
        </div>

        <div class="contact_wrapper">

            <form class="contact_form-grid" action="#" method="POST" aria-label="Formulario de cotización">

                <!-- ═══ BLOQUE 1: DATOS DEL CLIENTE ═══ -->
                <div class="contact_card" data-animate="slide-up">
                    <div class="contact_card-header">
                        <span class="contact_card-number">01</span>
                        <h3 class="contact_card-title">Datos del Cliente</h3>
                    </div>
                    
                    <div class="form_row two_cols">
                        <div class="form_group">
                            <label for="contactName" class="form_label">Nombre completo <span class="required-asterisk">*</span></label>
                            <input type="text" id="contactName" name="name" class="form_input" placeholder="Ej: Juan Pérez" required autocomplete="name">
                        </div>
                        <div class="form_group">
                            <label for="contactRut" class="form_label">RUT / Documento <span class="required-asterisk">*</span></label>
                            <input type="text" id="contactRut" name="rut" class="form_input" placeholder="Sin puntos y con guión" required>
                        </div>
                    </div>

                    <div class="form_row two_cols">
                        <div class="form_group">
                            <label for="contactEmail" class="form_label">Correo electrónico <span class="required-asterisk">*</span></label>
                            <input type="email" id="contactEmail" name="email" class="form_input" placeholder="tu@email.com" required autocomplete="email">
                        </div>
                        <div class="form_group">
                            <label for="contactPhone" class="form_label">Teléfono <span class="required-asterisk">*</span></label>
                            <input type="tel" id="contactPhone" name="phone" class="form_input" placeholder="+56 9 1234 5678" required autocomplete="tel">
                        </div>
                    </div>

                    <div class="form_row">
                        <div class="form_group full_width">
                            <label for="clientType" class="form_label">Tipo de Cliente <span class="required-asterisk">*</span></label>
                            <select id="clientType" name="client_type" class="form_input form_select" required>
                                <option value="" disabled selected>Selecciona una opción</option>
                                <option value="particular">Particular</option>
                                <option value="empresa">Empresa / Flota</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- ═══ BLOQUE 2: DATOS DEL VEHÍCULO ═══ -->
                <div class="contact_card" data-animate="slide-up" data-delay="100">
                    <div class="contact_card-header">
                        <span class="contact_card-number">02</span>
                        <h3 class="contact_card-title">Datos del Vehículo</h3>
                    </div>
                    
                    <div class="form_row">
                        <div class="form_group full_width">
                            <label for="vehicleCount" class="form_label">¿Cuántos vehículos deseas proteger? <span class="required-asterisk">*</span></label>
                            <select id="vehicleCount" name="vehicle_count" class="form_input form_select" required>
                                <option value="" disabled selected>Selecciona una opción</option>
                                <option value="1">1 vehículo</option>
                                <option value="2-5">De 2 a 5 vehículos</option>
                                <option value="6-10">De 6 a 10 vehículos</option>
                                <option value="10+">Más de 10 vehículos (Flota)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- ═══ BLOQUE 3: DATOS DEL SERVICIO ═══ -->
                <div class="contact_card" data-animate="slide-up" data-delay="200">
                    <div class="contact_card-header">
                        <span class="contact_card-number">03</span>
                        <h3 class="contact_card-title">Datos del Servicio</h3>
                    </div>
                    
                    <div class="form_row">
                        <div class="form_group full_width">
                            <label class="form_label">¿Dónde necesitas la instalación? <span class="required-asterisk">*</span></label>
                            <div class="radio_group">
                                <label class="radio_option">
                                    <input type="radio" name="service_location" value="domicilio" checked>
                                    <span class="radio_custom"></span>
                                    <span class="radio_label">En mi domicilio</span>
                                </label>
                                <label class="radio_option">
                                    <input type="radio" name="service_location" value="taller">
                                    <span class="radio_custom"></span>
                                    <span class="radio_label">En su taller</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form_row two_cols">
                        <div class="form_group">
                            <label for="contactComuna" class="form_label">Comuna / Ciudad <span class="required-asterisk">*</span></label>
                            <input type="text" id="contactComuna" name="comuna" class="form_input" placeholder="Ej: Providencia" required>
                        </div>
                        <div class="form_group">
                            <label for="contactRegion" class="form_label">Región <span class="required-asterisk">*</span></label>
                            <input type="text" id="contactRegion" name="region" class="form_input" placeholder="Ej: Región Metropolitana" required>
                        </div>
                    </div>

                    <div class="form_row">
                        <div class="form_group full_width">
                            <label for="contactAddress" class="form_label">Dirección de instalación <span class="required-asterisk">*</span></label>
                            <input type="text" id="contactAddress" name="address" class="form_input" placeholder="Calle, número, departamento" required>
                        </div>
                    </div>

                    <div class="form_row">
                        <div class="form_group full_width">
                            <label class="form_label">¿Qué tipo de equipo te interesa? <span class="required-asterisk">*</span></label>
                            <div class="radio_group horizontal">
                                <label class="radio_option">
                                    <input type="radio" name="equipment" value="gps">
                                    <span class="radio_custom"></span>
                                    <span class="radio_label">Rastreador GPS</span>
                                </label>
                                <label class="radio_option">
                                    <input type="radio" name="equipment" value="inmovilizador">
                                    <span class="radio_custom"></span>
                                    <span class="radio_label">Inmovilizador</span>
                                </label>
                                <label class="radio_option">
                                    <input type="radio" name="equipment" value="anti_jammer">
                                    <span class="radio_custom"></span>
                                    <span class="radio_label">Anti Jammer</span>
                                </label>
                                <label class="radio_option">
                                    <input type="radio" name="equipment" value="paquete">
                                    <span class="radio_custom"></span>
                                    <span class="radio_label">Paquete completo</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form_row">
                        <div class="form_group full_width">
                            <label for="contactMessage" class="form_label">Mensaje o consulta adicional</label>
                            <textarea id="contactMessage" name="message" class="form_input form_textarea" placeholder="Cuéntanos más sobre tu necesidad..." rows="4"></textarea>
                        </div>
                    </div>

                    <div class="form_actions">
                        <button type="submit" class="btn btn--primary btn--lg">
                            <span>Enviar Cotización</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </button>
                        <p class="form_footnote">Tus datos están seguros. No compartiremos tu información.</p>
                    </div>

                </div>

            </form>
        </div>
    </div>
</section>