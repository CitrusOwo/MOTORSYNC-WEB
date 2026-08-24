/* ═══════════════════════════════════════
   SLIDER MODULE
   Touch/mouse drag, arrow navigation
   ═══════════════════════════════════════ */

export function initSlider() {
    const wrapper = document.querySelector('.catalog_slider_wrapper');
    const track = document.getElementById('catalogTrack');
    const prevBtn = document.querySelector('.catalog_arrow--prev');
    const nextBtn = document.querySelector('.catalog_arrow--next');

    if (!track || !wrapper) return;

    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    const cardWidth = 300 + 24; // card width + gap

    function getMaxTranslate() {
        const trackWidth = track.scrollWidth;
        const wrapperWidth = wrapper.clientWidth;
        return Math.min(0, -(trackWidth - wrapperWidth));
    }

    function setTranslate(value) {
        const max = getMaxTranslate();
        currentTranslate = Math.max(max, Math.min(0, value));
        track.style.transform = `translateX(${currentTranslate}px)`;
    }

    // ─── Arrow Navigation ───
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            setTranslate(currentTranslate + cardWidth);
            prevTranslate = currentTranslate;
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            setTranslate(currentTranslate - cardWidth);
            prevTranslate = currentTranslate;
        });
    }

    // ─── Drag/Touch ───
    function pointerDown(e) {
        isDragging = true;
        startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        track.style.transition = 'none';
        track.style.cursor = 'grabbing';
    }

    function pointerMove(e) {
        if (!isDragging) return;
        const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        const diff = x - startX;
        setTranslate(prevTranslate + diff);
    }

    function pointerUp() {
        if (!isDragging) return;
        isDragging = false;
        track.style.transition = '';
        track.style.cursor = '';
        prevTranslate = currentTranslate;
    }

    // Mouse events
    track.addEventListener('mousedown', pointerDown);
    window.addEventListener('mousemove', pointerMove);
    window.addEventListener('mouseup', pointerUp);

    // Touch events
    track.addEventListener('touchstart', pointerDown, { passive: true });
    window.addEventListener('touchmove', pointerMove, { passive: true });
    window.addEventListener('touchend', pointerUp);

    // Prevent link drag interference
    track.addEventListener('dragstart', e => e.preventDefault());
}
