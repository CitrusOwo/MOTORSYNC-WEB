/**
 * ============================================================
 * AUTO PNG + LOGOS EN ÓRBITA + VIDA EN EL CENTRO
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', function() {
    
    const container = document.getElementById('hero-globe-container');
    if (!container) return;
    
    // ─── Configuración ───
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;
    
    // ─── Escena ───
    const scene = new THREE.Scene();
    
    // ─── Cámara ───
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5.5);
    camera.lookAt(0, 0, 0);
    
    // ─── Renderer ───
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    
    // ─── LUZ ───
    const ambientLight = new THREE.AmbientLight(0x446688, 0.8);
    scene.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(0, 1, 2);
    scene.add(dirLight);
    
    // ─── Cargar texturas ───
    const textureLoader = new THREE.TextureLoader();
    
    // ─── ⭐ AUTO PNG ⭐ ───
    const carTexture = textureLoader.load('frontend/assets/img/auto.png');
    
    const img = new Image();
    img.src = 'frontend/assets/img/auto.png';
    let carWidth = 2.8;
    let carHeight = 1.0;
    img.onload = function() {
        const aspectRatio = img.width / img.height;
        carWidth = 2.8;
        carHeight = carWidth / aspectRatio;
        carSprite.scale.set(carWidth, carHeight, 1);
    };
    
    const carMaterial = new THREE.SpriteMaterial({
        map: carTexture,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        opacity: 0.95,
    });
    const carSprite = new THREE.Sprite(carMaterial);
    carSprite.scale.set(2.8, 1.0, 1);
    carSprite.position.x = 0.6;
    carSprite.renderOrder = 10;
    scene.add(carSprite);
    
    // ─── ⭐ VIDA EN EL CENTRO ───
    
    // 1. Anillo pulsante central
    const centerRingGeo = new THREE.RingGeometry(0.15, 0.35, 32);
    const centerRingMat = new THREE.MeshBasicMaterial({
        color: 0x4A9EFF,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide,
        depthWrite: false,
    });
    const centerRing = new THREE.Mesh(centerRingGeo, centerRingMat);
    centerRing.position.set(0, 0, 0);
    centerRing.renderOrder = 8;
    scene.add(centerRing);
    
    // 2. Anillo exterior del centro
    const outerCenterRingGeo = new THREE.RingGeometry(0.4, 0.6, 32);
    const outerCenterRingMat = new THREE.MeshBasicMaterial({
        color: 0x4A9EFF,
        transparent: true,
        opacity: 0.15,
        side: THREE.DoubleSide,
        depthWrite: false,
    });
    const outerCenterRing = new THREE.Mesh(outerCenterRingGeo, outerCenterRingMat);
    outerCenterRing.position.set(0, 0, 0);
    outerCenterRing.renderOrder = 7;
    scene.add(outerCenterRing);
    
    // 3. Punto brillante en el centro
    const dotGeo = new THREE.CircleGeometry(0.06, 16);
    const dotMat = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
        depthWrite: false,
    });
    const centerDot = new THREE.Mesh(dotGeo, dotMat);
    centerDot.position.set(0, 0, 0);
    centerDot.renderOrder = 9;
    scene.add(centerDot);
    
    // 4. Partículas flotando dentro del círculo
    const particleCount = 30;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 2);
    const particleSpeeds = [];
    const particleRadii = [];
    const particleAngles = [];
    
    for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 0.2 + Math.random() * 0.8;
        particleAngles.push(angle);
        particleRadii.push(radius);
        particleSpeeds.push(0.005 + Math.random() * 0.015);
        particlePositions[i * 2] = Math.cos(angle) * radius;
        particlePositions[i * 2 + 1] = Math.sin(angle) * radius;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 2));
    
    const particleMat = new THREE.PointsMaterial({
        color: 0x4A9EFF,
        size: 0.03,
        transparent: true,
        opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    particles.renderOrder = 6;
    scene.add(particles);
    
    // 5. Pequeños destellos (sparks) ocasionales
    const sparkGroup = new THREE.Group();
    sparkGroup.position.set(0, 0, 0);
    scene.add(sparkGroup);
    
    const sparkCount = 8;
    const sparks = [];
    for (let i = 0; i < sparkCount; i++) {
        const sparkGeo = new THREE.CircleGeometry(0.015, 6);
        const sparkMat = new THREE.MeshBasicMaterial({
            color: 0x4A9EFF,
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide,
            depthWrite: false,
        });
        const spark = new THREE.Mesh(sparkGeo, sparkMat);
        const angle = (i / sparkCount) * Math.PI * 2;
        spark.userData = {
            angle: angle,
            radius: 0.3 + Math.random() * 0.4,
            phase: Math.random() * Math.PI * 2,
            active: false,
            timer: 0,
            duration: 0.5 + Math.random() * 0.5
        };
        spark.position.set(
            Math.cos(angle) * spark.userData.radius,
            Math.sin(angle) * spark.userData.radius,
            0
        );
        sparkGroup.add(spark);
        sparks.push(spark);
    }
    
    // ─── ⭐ 3 LOGOS EN ÓRBITA ⭐ ───
    const logoTexture = textureLoader.load('frontend/assets/img/LOGO MOTORSYNC-INICIO.png');
    
    const logos = [];
    const logoCount = 3;
    
    const logoData = [
        { radius: 2.0, speed: 0.004, label: 'arriba' },
        { radius: 1.6, speed: 0.005, label: 'abajo-der' },
        { radius: 1.2, speed: 0.006, label: 'abajo-izq' }
    ];
    
    for (let i = 0; i < logoCount; i++) {
        const data = logoData[i];
        const radius = data.radius;
        
        const material = new THREE.SpriteMaterial({
            map: logoTexture,
            transparent: true,
            depthWrite: false,
            opacity: 0,
        });
        const sprite = new THREE.Sprite(material);
        
        const startAngle = Math.random() * Math.PI * 2;
        const x = Math.cos(startAngle) * radius;
        const y = Math.sin(startAngle) * radius;
        sprite.position.set(x, y, 0);
        
        const scale = 0.35;
        sprite.scale.set(scale, scale, 1);
        sprite.renderOrder = 5;
        
        sprite.userData = {
            angle: startAngle,
            radius: radius,
            speed: data.speed,
            state: 'hidden',
            timer: Math.random() * 4,
            delay: 2 + Math.random() * 2,
            fadeDuration: 2.0,
            visibleDuration: 3 + Math.random() * 2,
            phase: i * 2.1
        };
        
        scene.add(sprite);
        logos.push(sprite);
    }
    
    // ─── 3 ANILLOS DE ÓRBITA ───
    const orbitColors = [0x4A9EFF, 0x4A9EFF, 0x4A9EFF];
    const orbitOpacities = [0.2, 0.15, 0.10];
    
    logoData.forEach((data, index) => {
        const radius = data.radius;
        const orbitPoints = [];
        for (let i = 0; i <= 60; i++) {
            const angle = (i / 60) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            orbitPoints.push(new THREE.Vector3(x, y, 0));
        }
        const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints);
        const orbitMat = new THREE.LineBasicMaterial({
            color: orbitColors[index],
            transparent: true,
            opacity: orbitOpacities[index],
            depthTest: true,
        });
        const orbitLine = new THREE.Line(orbitGeo, orbitMat);
        orbitLine.renderOrder = 1;
        scene.add(orbitLine);
    });
    
    // ─── ANILLO EXTERNO ───
    const outerPoints = [];
    for (let i = 0; i <= 80; i++) {
        const angle = (i / 80) * Math.PI * 2;
        const x = Math.cos(angle) * 2.4;
        const y = Math.sin(angle) * 2.4;
        outerPoints.push(new THREE.Vector3(x, y, 0));
    }
    const outerGeo = new THREE.BufferGeometry().setFromPoints(outerPoints);
    const outerMat = new THREE.LineBasicMaterial({
        color: 0x4A9EFF,
        transparent: true,
        opacity: 0.05,
    });
    const outerLine = new THREE.Line(outerGeo, outerMat);
    outerLine.renderOrder = 0;
    scene.add(outerLine);
    
    // ─── ESTRELLAS ───
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 300;
    const starsPositions = new Float32Array(starsCount * 2);
    for (let i = 0; i < starsCount; i++) {
        starsPositions[i * 2] = (Math.random() - 0.5) * 10;
        starsPositions[i * 2 + 1] = (Math.random() - 0.5) * 10;
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 2));
    const starsMaterial = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: 0.018,
        transparent: true,
        opacity: 0.5,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    stars.renderOrder = 0;
    scene.add(stars);
    
    // ─── ANIMACIÓN ───
    function animate() {
        requestAnimationFrame(animate);
        
        const delta = 0.016;
        const time = Date.now() / 1000;
        
        // ─── Animar centro ───
        // Anillo pulsante
        const pulseScale = 1 + 0.15 * Math.sin(time * 2);
        centerRing.scale.set(pulseScale, pulseScale, 1);
        centerRing.material.opacity = 0.3 + 0.15 * Math.sin(time * 2 + 0.5);
        
        // Anillo exterior
        const outerPulse = 1 + 0.2 * Math.sin(time * 1.5 + 1);
        outerCenterRing.scale.set(outerPulse, outerPulse, 1);
        outerCenterRing.material.opacity = 0.1 + 0.1 * Math.sin(time * 1.5 + 1);
        
        // Punto central (brillo)
        centerDot.material.opacity = 0.7 + 0.3 * Math.sin(time * 3);
        const dotScale = 1 + 0.2 * Math.sin(time * 3);
        centerDot.scale.set(dotScale, dotScale, 1);
        
        // ─── Animar partículas ───
        const positions = particles.geometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
            particleAngles[i] += particleSpeeds[i];
            const r = particleRadii[i] + 0.05 * Math.sin(time * particleSpeeds[i] * 3 + i);
            positions[i * 2] = Math.cos(particleAngles[i]) * r;
            positions[i * 2 + 1] = Math.sin(particleAngles[i]) * r;
        }
        particles.geometry.attributes.position.needsUpdate = true;
        particles.material.opacity = 0.3 + 0.2 * Math.sin(time * 0.5);
        
        // ─── Animar sparks ───
        sparks.forEach((spark) => {
            const data = spark.userData;
            data.timer += delta;
            
            if (!data.active) {
                if (data.timer > 1 + Math.random() * 2) {
                    data.active = true;
                    data.timer = 0;
                    data.duration = 0.3 + Math.random() * 0.5;
                    data.angle = Math.random() * Math.PI * 2;
                    data.radius = 0.3 + Math.random() * 0.4;
                }
            } else {
                const progress = data.timer / data.duration;
                if (progress >= 1) {
                    data.active = false;
                    data.timer = 0;
                    spark.material.opacity = 0;
                } else {
                    const ease = 1 - progress * progress * (3 - 2 * progress);
                    spark.material.opacity = ease * 0.8;
                    const r = data.radius + progress * 0.2;
                    spark.position.set(
                        Math.cos(data.angle + progress * 2) * r,
                        Math.sin(data.angle + progress * 2) * r,
                        0
                    );
                    const s = 0.5 + progress * 2;
                    spark.scale.set(s, s, 1);
                }
            }
        });
        
        // ─── Logos en órbita ───
        logos.forEach((logo) => {
            const data = logo.userData;
            
            data.angle += data.speed;
            const x = Math.cos(data.angle) * data.radius;
            const y = Math.sin(data.angle) * data.radius;
            logo.position.set(x, y, 0);
            
            data.timer += delta;
            
            switch (data.state) {
                case 'hidden':
                    if (data.timer >= data.delay) {
                        data.state = 'fadeIn';
                        data.timer = 0;
                    }
                    break;
                    
                case 'fadeIn':
                    const progressIn = data.timer / data.fadeDuration;
                    if (progressIn >= 1) {
                        logo.material.opacity = 1;
                        data.state = 'visible';
                        data.timer = 0;
                    } else {
                        const ease = progressIn * progressIn * (3 - 2 * progressIn);
                        logo.material.opacity = ease;
                        const s = 0.2 + ease * 0.2;
                        logo.scale.set(s, s, 1);
                    }
                    break;
                    
                case 'visible':
                    logo.material.opacity = 0.95 + 0.05 * Math.sin(data.timer * 1.5);
                    logo.scale.set(0.4, 0.4, 1);
                    
                    if (data.timer >= data.visibleDuration) {
                        data.state = 'fadeOut';
                        data.timer = 0;
                    }
                    break;
                    
                case 'fadeOut':
                    const progressOut = data.timer / data.fadeDuration;
                    if (progressOut >= 1) {
                        logo.material.opacity = 0;
                        data.state = 'hidden';
                        data.timer = 0;
                        data.delay = 2 + Math.random() * 3;
                        data.visibleDuration = 3 + Math.random() * 2;
                    } else {
                        const ease = 1 - progressOut * progressOut * (3 - 2 * progressOut);
                        logo.material.opacity = ease;
                        const s = 0.3 + ease * 0.15;
                        logo.scale.set(s, s, 1);
                    }
                    break;
            }
            
            logo.material.rotation += 0.003;
        });
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // ─── RESIZE ───
    function resize() {
        const newWidth = container.clientWidth || 480;
        const newHeight = container.clientHeight || 480;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    }
    
    window.addEventListener('resize', resize);
    
});