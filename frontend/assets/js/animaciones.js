/* ═══════════════════════════════════════
   ANIMATIONS MODULE
   Scroll reveals, counters, stagger,
   lazy loading, page transition
   ═══════════════════════════════════════ */

// ─── Scroll Reveal (IntersectionObserver) ───
export function initScrollAnimations() {
    const animatedEls = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    animatedEls.forEach(el => observer.observe(el));
}

// ─── Stagger children animation ───
export function initStaggerAnimations() {
    const staggerGroups = document.querySelectorAll('[data-stagger]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const children = entry.target.querySelectorAll('[data-animate]');
                children.forEach((child, i) => {
                    setTimeout(() => {
                        child.classList.add('animated');
                    }, i * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    staggerGroups.forEach(group => observer.observe(group));
}

// ─── Animated Counters ───
export function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
}

function animateCounter(el) {
    const target = parseInt(el.dataset.counter);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(easeOutQuart(progress) * target);
        el.textContent = value.toLocaleString() + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target.toLocaleString() + suffix;
        }
    }

    requestAnimationFrame(update);
}

// ─── Pricing Toggle (Monthly/Annual) ───
export function initPricingToggle() {
    const toggle = document.getElementById('pricingToggleBtn');
    if (!toggle) return;

    const amounts = document.querySelectorAll('[data-price-monthly]');
    const labelMonthly = document.getElementById('labelMonthly');
    const labelAnnual = document.getElementById('labelAnnual');
    let isAnnual = false;

    toggle.addEventListener('click', () => {
        isAnnual = !isAnnual;
        toggle.classList.toggle('active', isAnnual);

        if (labelMonthly) labelMonthly.classList.toggle('billing-toggle__label--active', !isAnnual);
        if (labelAnnual) labelAnnual.classList.toggle('billing-toggle__label--active', isAnnual);

        amounts.forEach(el => {
            const monthly = parseInt(el.dataset.priceMonthly);
            const annual = parseInt(el.dataset.priceAnnual);
            const target = isAnnual ? annual : monthly;

            el.classList.add('animating');
            setTimeout(() => {
                el.textContent = target;
                el.classList.remove('animating');
            }, 200);
        });
    });
}

// ─── Lazy Loading Images ───
export function initLazyLoad() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    if (!lazyImages.length) return;

    if ('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                    }
                    img.removeAttribute('data-src');
                    img.classList.add('lazy-loaded');
                    imgObserver.unobserve(img);
                }
            });
        }, { rootMargin: '100px 0px' });

        lazyImages.forEach(img => imgObserver.observe(img));
    } else {
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.add('lazy-loaded');
        });
    }
}

// ─── Page Load Transition ───
export function initPageLoad() {
    document.documentElement.classList.add('is-loading');

    window.addEventListener('load', () => {
        requestAnimationFrame(() => {
            document.documentElement.classList.remove('is-loading');
            document.documentElement.classList.add('is-loaded');
        });
    });
}

// ─── Stat Bars Animation ───
export function initStatBars() {
    const bars = document.querySelectorAll('.stat_bar_fill');

    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                barObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    bars.forEach(bar => barObserver.observe(bar));
}

// ─── Parallax subtle on scroll ───
export function initParallax() {
    const parallaxEls = document.querySelectorAll('[data-parallax]');
    if (!parallaxEls.length) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                parallaxEls.forEach(el => {
                    const speed = parseFloat(el.dataset.parallax) || 0.1;
                    const rect = el.getBoundingClientRect();
                    const offset = (rect.top + scrollY - window.innerHeight / 2) * speed;
                    el.style.transform = `translateY(${offset}px)`;
                });
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ─── Navbar progress indicator ───
export function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = (window.scrollY / scrollHeight) * 100;
                progressBar.style.width = `${progress}%`;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}
