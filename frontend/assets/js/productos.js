/* ═══════════════════════════════════════
   PRODUCTOS.JS - Base de datos de productos
   ═══════════════════════════════════════ */

export const PRODUCTS = [
    // ═══ GPS VL103M 4G (Micrófono espía + Botón de pánico) ═══
    {
        id: 'gps-vl103m-4g',
        sku: 'VL103M-4G',
        name: 'GPS VL103M 4G',
        category: 'Vehicular',
        brand: 'MotorSync',
        model: 'VL103M',
        price: 790.00,
        oldPrice: 990.00,
        stock: 'available',
        stockQty: 12,
        warranty: '2 años',
        compatibility: 'Universal (12V - 24V)',
        badges: ['new', 'best'],
        images: [
            { src: 'frontend/assets/img/productos/gps-vl103m-4g.jpg', alt: 'GPS VL103M 4G - Micrófono espía y botón de pánico' }
        ],
        desc: 'Rastreador GPS 4G con micrófono de escucha ambiental y botón de pánico para emergencias. Seguridad total para tu vehículo.',
        fullDesc: `<p><strong>El GPS VL103M 4G</strong> es el dispositivo de seguridad más completo del mercado. No solo rastrea tu vehículo en tiempo real con tecnología 4G, sino que además incorpora un potente <strong>micrófono de escucha ambiental (espía)</strong> y un <strong>botón de pánico</strong> para situaciones de emergencia.</p>
                   <p><strong>Características destacadas:</strong></p>
                   <ul>
                       <li><strong>Micrófono ambiental:</strong> Permite escuchar lo que sucede dentro del vehículo de forma remota desde tu smartphone.</li>
                       <li><strong>Botón de pánico:</strong> En caso de robo o emergencia, el conductor puede presionarlo para enviar una alerta inmediata al centro de monitoreo y a tu teléfono.</li>
                       <li><strong>Conexión 4G LTE:</strong> Red de última generación para una transmisión de datos rápida y estable.</li>
                       <li><strong>Corte de motor remoto:</strong> Inmoviliza el vehículo desde tu smartphone en caso de robo.</li>
                       <li><strong>Ideal para flotas y seguridad personal:</strong> Perfecto para conductores de aplicaciones, taxis, repartidores y familias.</li>
                   </ul>`,
        specs: [
            'Red: 4G LTE / 3G / 2G',
            'Micrófono de escucha ambiental integrado',
            'Botón de pánico inalámbrico (incluido)',
            'Precisión GPS: < 5 metros',
            'Alimentación: 12V - 24V DC',
            'Consumo: < 1.5W (en reposo)',
            'Batería de respaldo: 4 horas',
            'Temperatura de trabajo: -20°C a 70°C',
            'Dimensiones: 85mm x 50mm x 15mm'
        ],
        installation: [
            'Conectar el dispositivo a la batería del vehículo (12V/24V).',
            'Colocar la antena en un lugar despejado para máxima recepción satelital.',
            'Vincular el botón de pánico inalámbrico al dispositivo (emparejamiento automático).',
            'Descargar la app MotorSync y escanear el código QR del dispositivo para vincularlo.'
        ],
        faq: [
            { q: '¿El micrófono se activa solo o se puede controlar?', a: 'El micrófono se activa de forma remota a través de la aplicación cuando tú lo deseas, para escuchar el ambiente dentro del vehículo.' },
            { q: '¿Qué alcance tiene el botón de pánico?', a: 'El botón de pánico inalámbrico tiene un alcance de aproximadamente 15 metros, por lo que el conductor puede llevarlo en el bolsillo o llavero.' },
            { q: '¿Incluye la SIM card y el plan de datos?', a: 'Sí, el dispositivo incluye una SIM card con datos activada para que el rastreo funcione desde el primer momento.' }
        ]
    },

    // ═══ GPS VL110C 4G ═══
    {
        id: 'gps-vl110c-4g',
        sku: 'VL110C-4G',
        name: 'GPS VL110C 4G',
        category: 'Vehicular',
        brand: 'MotorSync',
        model: 'VL110C',
        price: 690.00,
        oldPrice: 890.00,
        stock: 'available',
        stockQty: 15,
        warranty: '2 años',
        compatibility: 'Universal (12V - 24V)',
        badges: ['new', 'best'],
        images: [
            { src: 'frontend/assets/img/productos/gps-vl110c-4g.jpg', alt: 'GPS VL110C 4G - Rastreador GPS 4G' }
        ],
        desc: 'Rastreador GPS 4G de última generación para vehículos ligeros, flotas y motos. Corte de motor remoto y precisión satelital.',
        fullDesc: `<p><strong>El GPS VL110C 4G</strong> es el dispositivo más avanzado para la gestión y seguridad de tu flota. Con tecnología 4G LTE, ofrece una velocidad de transmisión y precisión inigualables, permitiéndote monitorear tus vehículos en tiempo real desde cualquier lugar del mundo.</p>
                   <p><strong>Características destacadas:</strong></p>
                   <ul>
                       <li><strong>Conexión 4G LTE:</strong> Red de última generación para una transmisión de datos más rápida y estable.</li>
                       <li><strong>Corte de motor remoto:</strong> Inmoviliza el vehículo desde tu smartphone en caso de robo.</li>
                       <li><strong>Precisión satelital:</strong> GPS + LBS para una ubicación exacta incluso en zonas urbanas.</li>
                       <li><strong>Ideal para flotas y motos:</strong> Diseño compacto y resistente para todo tipo de vehículos.</li>
                   </ul>`,
        specs: [
            'Red: 4G LTE / 3G / 2G',
            'Precisión GPS: < 5 metros',
            'Alimentación: 12V - 24V DC',
            'Consumo: < 1.5W (en reposo)',
            'Batería de respaldo: 4 horas',
            'Temperatura de trabajo: -20°C a 70°C',
            'Dimensiones: 75mm x 45mm x 12mm'
        ],
        installation: [
            'Conectar el dispositivo a la batería del vehículo (12V/24V).',
            'Colocar la antena en un lugar despejado para máxima recepción satelital.',
            'Descargar la app MotorSync y escanear el código QR del dispositivo para vincularlo.',
            'Configurar las geocercas y alertas desde la app.'
        ],
        faq: [
            { q: '¿Funciona con cualquier tipo de vehículo?', a: 'Sí, es universal y compatible con automóviles, camionetas, flotas comerciales y motos (12V/24V).' },
            { q: '¿Incluye la SIM card y el plan de datos?', a: 'Sí, el dispositivo incluye una SIM card con datos activada para que el rastreo funcione desde el primer momento.' },
            { q: '¿Puedo ver el historial de rutas?', a: 'Sí, la app guarda el historial de rutas de los últimos 90 días para que puedas revisarlos en cualquier momento.' }
        ]
    },

    // ═══ ANTI-JAMMER YB70 ═══
    {
        id: 'anti-jammer-yb70',
        sku: 'YB70-ANTI',
        name: 'Anti Jammer YB70',
        category: 'Vehicular',
        brand: 'MotorSync',
        model: 'YB70',
        price: 899.00,
        oldPrice: null,
        stock: 'available',
        stockQty: 8,
        warranty: '1 año',
        compatibility: 'Universal (12V - 24V)',
        badges: ['new', 'best'],
        images: [
            { src: 'frontend/assets/img/productos/anti-jammer-yb70.jpg', alt: 'Anti Jammer YB70 - Inhibidor de Señal GPS' }
        ],
        desc: 'Antena de alta ganancia para neutralizar inhibidores de señal GPS. Protección contra bloqueo satelital.',
        fullDesc: `<p><strong>El Anti Jammer YB70</strong> es una solución de seguridad avanzada diseñada para neutralizar inhibidores de señal GPS (jammers).</p>
                   <p>Estos dispositivos son utilizados por delincuentes para bloquear la señal de tu rastreador GPS y evitar que se detecte el vehículo o su ubicación. El YB70 detecta la presencia de estos bloqueadores y los neutraliza, asegurando que tu sistema de rastreo siga funcionando ininterrumpidamente.</p>
                   <p><strong>Características destacadas:</strong></p>
                   <ul>
                       <li>Neutralización de inhibidores de frecuencia GPS (L1, L2, L5).</li>
                       <li>Antena de alta sensibilidad para detección temprana.</li>
                       <li>Fácil instalación Plug & Play en sistemas de 12V y 24V.</li>
                       <li>Ideal para flotas, vehículos de carga y alta seguridad.</li>
                   </ul>`,
        specs: [
            'Frecuencia de operación: GPS L1/L2/L5 (1575.42 MHz)',
            'Ganancia de antena: > 25 dBi',
            'Rango de detección: 50 - 150 metros',
            'Alimentación: 12V - 24V DC',
            'Consumo: 350 mA max',
            'Temperatura de trabajo: -20°C a 75°C',
            'Dimensiones: 95mm x 50mm x 15mm'
        ],
        installation: [
            'Conectar el cable de alimentación al sistema eléctrico del vehículo (12V/24V).',
            'Montar la antena en un lugar despejado (techo o parabrisas) para máxima recepción.',
            'Conectar el dispositivo al rastreador GPS existente.',
            'Verificar que la señal GPS se mantenga estable incluso en zonas con posibles inhibidores.'
        ],
        faq: [
            { q: '¿Qué es un inhibidor de señal GPS (Jammer)?', a: 'Es un dispositivo ilegal que emite una señal de radiofrecuencia para bloquear las señales de los satélites GPS, impidiendo que el rastreador transmita la ubicación del vehículo.' },
            { q: '¿El Anti Jammer YB70 funciona con todos los GPS del mercado?', a: 'Sí, es universal y se conecta al sistema eléctrico y al rastreador mediante sus conectores estándar.' },
            { q: '¿Es difícil de instalar?', a: 'No, tiene una instalación simple (Plug & Play). Recomendamos la instalación profesional para garantizar el correcto funcionamiento de la antena.' },
            { q: '¿Qué pasa si detecta un jammer?', a: 'El dispositivo automáticamente activa su sistema de neutralización, permitiendo que tu GPS siga enviando la señal de ubicación sin interrupciones.' }
        ]
    }
];

// ─── Helpers ───
export function getProductById(id) {
    return PRODUCTS.find(p => p.id === id);
}

export function getProductSVG(product) {
    if (product.images && product.images.length > 0 && product.images[0].src) {
        return `<img src="${product.images[0].src}" alt="${product.images[0].alt || product.name}" loading="lazy" style="max-width: 100%; max-height: 120px; object-fit: contain; display: block; margin: 0 auto; width: auto; height: auto;">`;
    }
    return `<div style="width: 100%; height: 120px; display: flex; align-items: center; justify-content: center; color: #aaa; font-size: 0.85rem; background: #f5f5f5; border-radius: 8px;"><span>Sin imagen</span></div>`;
}