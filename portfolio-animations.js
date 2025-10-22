// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Hero section animations
gsap.from('.portfolio-title', {
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.3
});

gsap.from('.portfolio-subtitle', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.6
});

// Horizontal scroll setup with true infinite looping
const horizontalSection = document.querySelector('.horizontal-scroll-container');
const projectsWrapper = document.querySelector('.projects-wrapper');

if (horizontalSection && projectsWrapper) {
    // Clone all project cards multiple times for seamless infinite looping
    const cards = Array.from(projectsWrapper.querySelectorAll('.portfolio-card'));
    
    // Create 3 copies for seamless looping (original + 3 clones = 4 sets)
    for (let i = 0; i < 3; i++) {
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            projectsWrapper.appendChild(clone);
        });
    }

    // Get single set width
    const singleSetWidth = cards.reduce((total, card) => {
        return total + card.offsetWidth + 50; // 50 is the gap
    }, 0);

    // Create horizontal scroll animation with infinite loop
    const horizontalScroll = gsap.to(projectsWrapper, {
        x: -singleSetWidth * 3, // Scroll through 3 complete sets
        ease: 'none',
        scrollTrigger: {
            trigger: horizontalSection,
            start: 'top top',
            end: () => `+=${singleSetWidth * 6}`, // Make scroll area very long for infinite feel
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
                // When we've scrolled through one complete set, snap back seamlessly
                const currentX = gsap.getProperty(projectsWrapper, 'x');
                if (currentX <= -singleSetWidth) {
                    gsap.set(projectsWrapper, { x: currentX + singleSetWidth });
                }
            }
        }
    });

    // Animate buttons with slider effect (no fade effects on cards)
    const allCards = gsap.utils.toArray('.portfolio-card');
    
    allCards.forEach((card, index) => {
        // Button slider animation - animate only non-disabled buttons
        const button = card.querySelector('.portfolio-cta:not(.disabled)');
        if (button) {
            // Add continuous subtle slide animation
            gsap.to(button, {
                backgroundPosition: '200% center',
                duration: 3,
                ease: 'power1.inOut',
                repeat: -1,
                yoyo: true
            });
        }
    });

    // Update on window resize
    window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
    });
}

// Subtle parallax effect on card images (no opacity changes)
const cardImages = gsap.utils.toArray('.portfolio-card-image img');

cardImages.forEach(img => {
    gsap.to(img, {
        scale: 1.05,
        scrollTrigger: {
            trigger: img.closest('.portfolio-card'),
            containerAnimation: horizontalScroll,
            start: 'left right',
            end: 'right left',
            scrub: 1
        }
    });
});
