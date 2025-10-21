// Utils: header height + keep CSS var in sync
function getHeaderHeight() {
    const hdr = document.querySelector('header');
    if (hdr && hdr.offsetHeight) return hdr.offsetHeight;
    const raw = getComputedStyle(document.documentElement).getPropertyValue('--header-h').trim();
    const n = parseInt(raw, 10);
    return Number.isFinite(n) ? n : 0;
}
function syncHeaderCssVar() {
    const hdr = document.querySelector('header');
    if (!hdr) return;
    const h = hdr.offsetHeight;
    if (h) document.documentElement.style.setProperty('--header-h', `${h}px`);
}
window.addEventListener('load', syncHeaderCssVar);
window.addEventListener('resize', () => {
    // Debounce resize to avoid thrashing
    clearTimeout(window.__hdrSzT);
    window.__hdrSzT = setTimeout(syncHeaderCssVar, 100);
});

// Header-aware smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetSel = this.getAttribute('href');
        const target = document.querySelector(targetSel);
        if (!target) return;
        e.preventDefault();

        const SAFETY = 8; // extra breathing room under the header
        const top = target.getBoundingClientRect().top + window.pageYOffset - getHeaderHeight() - SAFETY;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});

// Section-by-section smooth scroll (wheel/keys) for specific sections
(function enableSectionSnapScroll() {
    const SECTION_IDS = ['hero','about','education','projects','experience','skills'];
    const sections = SECTION_IDS
        .map(id => document.getElementById(id))
        .filter(Boolean);
    if (sections.length < 2) return; // only apply when multiple target sections exist

    let isAnimating = false;
    const throttleMs = 700; // lower = faster navigation

    function sectionTop(el) {
        const SAFETY = 8;
        return el.getBoundingClientRect().top + window.pageYOffset - getHeaderHeight() - SAFETY;
    }
    function getCurrentIndex() {
        const y = window.pageYOffset;
        // Choose the section whose top is closest to (or just below) current scroll
        let idx = 0;
        let minDist = Infinity;
        for (let i = 0; i < sections.length; i++) {
            const top = sectionTop(sections[i]);
            const dist = Math.abs(top - y);
            if (dist < minDist) {
                minDist = dist;
                idx = i;
            }
        }
        return idx;
    }
    function scrollToIndex(idx) {
        if (idx < 0 || idx >= sections.length) return;
        isAnimating = true;
        window.scrollTo({ top: sectionTop(sections[idx]), behavior: 'smooth' });
        setTimeout(() => { isAnimating = false; }, throttleMs);
    }

    window.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (isAnimating) return;
        const dir = e.deltaY > 0 ? 1 : -1;
        const current = getCurrentIndex();
        const next = Math.min(Math.max(current + dir, 0), sections.length - 1);
        if (next !== current) scrollToIndex(next);
    }, { passive: false });

    window.addEventListener('keydown', (e) => {
        if (isAnimating) return;
        const current = getCurrentIndex();
        let next = null;
        if (['PageDown', 'ArrowDown', ' '].includes(e.key)) next = Math.min(current + 1, sections.length - 1);
        if (['PageUp', 'ArrowUp'].includes(e.key)) next = Math.max(current - 1, 0);
        if (next !== null && next !== current) {
            e.preventDefault();
            scrollToIndex(next);
        }
    });
})();