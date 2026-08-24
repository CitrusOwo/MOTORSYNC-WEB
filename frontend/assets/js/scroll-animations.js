/* ============================================================
   SCROLL ANIMATIONS CONTROLLER
   Intersection Observer for scroll-triggered animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Skip all animations
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.classList.add('animate-in');
    });
    return;
  }

  // Intersection Observer options
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px', // Trigger 100px before element enters viewport
    threshold: 0.1
  };

  // Create observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animate-in class
        entry.target.classList.add('animate-in');

        // Optional: unobserve after animation (performance)
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with data-animate attribute
  const animatedElements = document.querySelectorAll('[data-animate], [data-stagger]');

  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // ═══════════════════════════════════════
  // COUNTER ANIMATIONS
  // ═══════════════════════════════════════

  const counters = document.querySelectorAll('.counter[data-count]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.count);
        const duration = parseInt(counter.dataset.duration) || 2000; // default 2 seconds
        const suffix = counter.dataset.suffix || '';
        const prefix = counter.dataset.prefix || '';

        animateCounter(counter, target, duration, prefix, suffix);

        counterObserver.unobserve(counter);
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  function animateCounter(element, target, duration, prefix = '', suffix = '') {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    element.classList.add('counting');

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        element.textContent = prefix + formatNumber(target) + suffix;
        clearInterval(timer);
        setTimeout(() => {
          element.classList.remove('counting');
        }, 100);
      } else {
        element.textContent = prefix + formatNumber(Math.floor(current)) + suffix;
      }
    }, 16);
  }

  function formatNumber(num) {
    // Add thousand separators
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // ═══════════════════════════════════════
  // PARALLAX EFFECT (Optional)
  // ═══════════════════════════════════════

  const parallaxElements = document.querySelectorAll('[data-parallax]');

  if (parallaxElements.length > 0) {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    });

    function updateParallax() {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.5;
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
    }
  }

  // ═══════════════════════════════════════
  // REVEAL ON HOVER (Optional enhancement)
  // ═══════════════════════════════════════

  const revealCards = document.querySelectorAll('[data-reveal-hover]');

  revealCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const revealElement = card.querySelector('[data-reveal-target]');
      if (revealElement) {
        revealElement.style.opacity = '1';
        revealElement.style.transform = 'translateY(0)';
      }
    });

    card.addEventListener('mouseleave', () => {
      const revealElement = card.querySelector('[data-reveal-target]');
      if (revealElement) {
        revealElement.style.opacity = '0';
        revealElement.style.transform = 'translateY(10px)';
      }
    });
  });

  // ═══════════════════════════════════════
  // PROGRESS BAR ANIMATION
  // ═══════════════════════════════════════

  const progressBars = document.querySelectorAll('[data-progress]');

  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const progress = parseInt(bar.dataset.progress) || 0;

        setTimeout(() => {
          bar.style.width = `${progress}%`;
        }, 100);

        progressObserver.unobserve(bar);
      }
    });
  }, {
    threshold: 0.5
  });

  progressBars.forEach(bar => {
    bar.style.width = '0%';
    bar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
    progressObserver.observe(bar);
  });

  // ═══════════════════════════════════════
  // STAGGER DELAY CALCULATOR
  // ═══════════════════════════════════════

  // Automatically calculate stagger delays for large lists
  const autoStaggerContainers = document.querySelectorAll('[data-auto-stagger]');

  autoStaggerContainers.forEach(container => {
    const children = Array.from(container.children);
    const delay = parseInt(container.dataset.autoStagger) || 50; // default 50ms

    children.forEach((child, index) => {
      child.style.transitionDelay = `${index * delay}ms`;
      child.style.opacity = '0';
      child.style.transform = 'translateY(20px)';
    });

    const autoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const children = Array.from(entry.target.children);
          children.forEach(child => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          });
          autoObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    autoObserver.observe(container);
  });

  // ═══════════════════════════════════════
  // UTILITY FUNCTIONS
  // ═══════════════════════════════════════

  // Add smooth scroll to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      if (href === '#' || href === '') return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const navHeight = document.querySelector('nav')?.offsetHeight || 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - navHeight - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ═══════════════════════════════════════
  // DEBUG MODE (Development only)
  // ═══════════════════════════════════════

  // Uncomment to see which elements are being animated
  /*
  if (window.location.hostname === 'localhost') {
    console.log('🎬 Animated elements:', animatedElements.length);
    console.log('🔢 Counter elements:', counters.length);
    console.log('📊 Progress bars:', progressBars.length);
  }
  */

});
