/**
 * TRUST BRANDS SLIDER
 * Auto-slide con marcas de empresas
 */

document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('brandsTrack');
    const dotsContainer = document.getElementById('brandsDots');
    
    if (!track || !dotsContainer) return;

    const slides = track.querySelectorAll('.trust-brands-slide');
    const totalSlides = slides.length;
    
    // Calcular cuántas se ven a la vez según el ancho
    let slidesPerView = 6;
    
    function getSlidesPerView() {
        if (window.innerWidth <= 480) return 2;
        if (window.innerWidth <= 768) return 3;
        if (window.innerWidth <= 1024) return 5;
        return 6;
    }

    slidesPerView = getSlidesPerView();
    const totalGroups = Math.ceil(totalSlides / slidesPerView);
    let currentIndex = 0;
    let autoSlideInterval = null;

    // Crear dots
    function createDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalGroups; i++) {
            const dot = document.createElement('span');
            dot.dataset.index = i;
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', function() {
                goToSlide(parseInt(this.dataset.index));
                resetAutoSlide();
            });
            dotsContainer.appendChild(dot);
        }
    }

    // Ir a un slide específico
    function goToSlide(index) {
        if (index < 0) index = totalGroups - 1;
        if (index >= totalGroups) index = 0;
        
        currentIndex = index;
        const offset = -index * (100 / slidesPerView) * slidesPerView;
        track.style.transform = `translateX(${offset / slidesPerView}%)`;
        
        // Actualizar dots
        const dots = dotsContainer.querySelectorAll('span');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Siguiente slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    // Resetear auto-slide
    function resetAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }
        startAutoSlide();
    }

    // Iniciar auto-slide
    function startAutoSlide() {
        if (totalGroups <= 1) return;
        autoSlideInterval = setInterval(nextSlide, 3000);
    }

    // Recalcular en resize
    let resizeTimeout = null;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            const newSlidesPerView = getSlidesPerView();
            if (newSlidesPerView !== slidesPerView) {
                slidesPerView = newSlidesPerView;
                const newTotalGroups = Math.ceil(totalSlides / slidesPerView);
                // Recrear dots y resetear
                createDots();
                if (currentIndex >= newTotalGroups) {
                    currentIndex = newTotalGroups - 1;
                }
                goToSlide(currentIndex);
                resetAutoSlide();
            }
        }, 250);
    });

    // Pausar auto-slide al hacer hover
    const slider = document.querySelector('.trust-brands-slider');
    slider.addEventListener('mouseenter', function() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }
    });
    
    slider.addEventListener('mouseleave', function() {
        startAutoSlide();
    });

    // Inicializar
    createDots();
    goToSlide(0);
    startAutoSlide();
});