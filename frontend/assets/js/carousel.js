/* ============================================================
   DEVICES CAROUSEL
   Modern carousel with smooth transitions
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const carousel = document.querySelector('.devices-carousel');

  if (!carousel) return;

  const track = carousel.querySelector('.devices-carousel_track');
  const slides = Array.from(track.querySelectorAll('.device-showcase-card'));
  const prevButton = carousel.querySelector('.devices-carousel_nav--prev');
  const nextButton = carousel.querySelector('.devices-carousel_nav--next');
  const indicators = Array.from(document.querySelectorAll('.devices-carousel_indicator'));

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  let slideWidth = slides[0].getBoundingClientRect().width + 32; // include gap

  // Calculate slide width on resize
  const updateSlideWidth = () => {
    slideWidth = slides[0].getBoundingClientRect().width + 32;
    moveToSlide(currentIndex);
  };

  window.addEventListener('resize', updateSlideWidth);

  // Move to specific slide
  const moveToSlide = (index) => {
    const offset = -index * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
    currentIndex = index;

    // Update indicators
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });

    // Update nav buttons state
    prevButton.disabled = index === 0;
    nextButton.disabled = index === slides.length - 1;
  };

  // Previous button
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        moveToSlide(currentIndex - 1);
      }
    });
  }

  // Next button
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      if (currentIndex < slides.length - 1) {
        moveToSlide(currentIndex + 1);
      }
    });
  }

  // Indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      moveToSlide(index);
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
      moveToSlide(currentIndex - 1);
    } else if (e.key === 'ArrowRight' && currentIndex < slides.length - 1) {
      moveToSlide(currentIndex + 1);
    }
  });

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  const handleSwipe = () => {
    const swipeThreshold = 50;

    if (touchStartX - touchEndX > swipeThreshold && currentIndex < slides.length - 1) {
      // Swipe left - next slide
      moveToSlide(currentIndex + 1);
    } else if (touchEndX - touchStartX > swipeThreshold && currentIndex > 0) {
      // Swipe right - previous slide
      moveToSlide(currentIndex - 1);
    }
  };

  // Auto-play (optional - commented out by default)
  /*
  let autoplayInterval;

  const startAutoplay = () => {
    autoplayInterval = setInterval(() => {
      if (currentIndex < slides.length - 1) {
        moveToSlide(currentIndex + 1);
      } else {
        moveToSlide(0);
      }
    }, 5000); // Change slide every 5 seconds
  };

  const stopAutoplay = () => {
    clearInterval(autoplayInterval);
  };

  // Start autoplay
  startAutoplay();

  // Pause autoplay on hover
  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);

  // Pause autoplay on focus
  carousel.addEventListener('focusin', stopAutoplay);
  carousel.addEventListener('focusout', startAutoplay);
  */

  // Initialize
  moveToSlide(0);

});
