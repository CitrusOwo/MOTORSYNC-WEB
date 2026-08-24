/* ═══════════════════════════════════════
   NAVBAR MODULE
   Scroll effects, side drawer, scroll spy
   ═══════════════════════════════════════ */

export function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navHamburger = document.getElementById('navHamburger');
    const navDrawer = document.getElementById('navDrawer');
    const navOverlay = document.getElementById('navOverlay');
    const navDrawerClose = document.getElementById('navDrawerClose');
    const navLinks = document.querySelectorAll('.nav_link');
    const drawerLinks = document.querySelectorAll('.nav_drawer_link');

    // Scroll: add solid background
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('nav--scrolled', window.scrollY > 80);
    }, { passive: true });

    function openDrawer() {
        navHamburger.classList.add('nav_hamburger--active');
        navHamburger.setAttribute('aria-expanded', 'true');
        navDrawer.classList.add('nav_drawer--open');
        navOverlay.classList.add('nav_overlay--open');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        navHamburger.classList.remove('nav_hamburger--active');
        navHamburger.setAttribute('aria-expanded', 'false');
        navDrawer.classList.remove('nav_drawer--open');
        navOverlay.classList.remove('nav_overlay--open');
        document.body.style.overflow = '';
    }

    // Hamburger toggle
    if (navHamburger && navDrawer) {
        navHamburger.addEventListener('click', () => {
            const isOpen = navDrawer.classList.contains('nav_drawer--open');
            isOpen ? closeDrawer() : openDrawer();
        });
    }

    // Close via overlay click
    if (navOverlay) {
        navOverlay.addEventListener('click', closeDrawer);
    }

    // Close via X button
    if (navDrawerClose) {
        navDrawerClose.addEventListener('click', closeDrawer);
    }

    // Close drawer on link click
    drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    // Close drawer on desktop nav link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navDrawer && navDrawer.classList.contains('nav_drawer--open')) {
                closeDrawer();
            }
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navDrawer && navDrawer.classList.contains('nav_drawer--open')) {
            closeDrawer();
        }
    });

    // Scroll spy: highlight active section link
    const sections = document.querySelectorAll('section[id]');
    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('nav_link--active', link.getAttribute('href') === `#${id}`);
                });
                drawerLinks.forEach(link => {
                    link.classList.toggle('nav_drawer_link--active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { rootMargin: '-40% 0px -60% 0px' });

    sections.forEach(s => spyObserver.observe(s));
}
