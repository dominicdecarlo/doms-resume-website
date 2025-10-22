// GSAP Hero Animation - Blow people away entrance effect
(function() {
    'use strict';
    
    // Wait for DOM and GSAP to be ready
    if (typeof gsap === 'undefined') {
        console.error('GSAP not loaded');
        return;
    }

    // Create floating particles in the background
    function createParticles() {
        const particlesContainer = document.querySelector('.hero-particles');
        if (!particlesContainer) return;

        const particleCount = 25;
        const colors = ['#007bff', '#0056b3', '#4a9eff', '#6ab7ff'];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random size between 4px and 20px
            const size = Math.random() * 16 + 4;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            // Random starting position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            particlesContainer.appendChild(particle);

            // Animate each particle with GSAP
            gsap.to(particle, {
                x: `${Math.random() * 400 - 200}px`,
                y: `${Math.random() * 400 - 200}px`,
                rotation: Math.random() * 360,
                opacity: Math.random() * 0.6 + 0.2,
                scale: Math.random() * 1.5 + 0.5,
                duration: Math.random() * 10 + 5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: Math.random() * 2
            });
        }
    }

    // Main entrance animation
    function animateHeroEntrance() {
        // Create timeline for coordinated animations
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        // Hide elements initially
        gsap.set('.hero-title .word', { opacity: 0, y: 100, rotationX: -90 });
        gsap.set('.hero-subtitle', { opacity: 0, x: -50 });
        gsap.set('.hero-description', { opacity: 0, x: -50 });
        gsap.set('.cta-button', { opacity: 0, scale: 0 });
        gsap.set('.hero-image img', { opacity: 0, scale: 0.8, rotation: -5 });

        // Animate title words with stagger
        tl.to('.hero-title .word', {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: 'back.out(1.7)'
        }, 0.3);

        // Add glow effect to "Dominic"
        tl.to('.hero-title .word.glow', {
            textShadow: '0 0 20px #007bff, 0 0 40px #007bff, 0 0 60px #007bff',
            duration: 0.8,
            repeat: 1,
            yoyo: true
        }, '-=0.5');

        // Animate subtitle
        tl.to('.hero-subtitle', {
            opacity: 1,
            x: 0,
            duration: 0.8
        }, '-=0.6');

        // Animate description
        tl.to('.hero-description', {
            opacity: 1,
            x: 0,
            duration: 0.8
        }, '-=0.5');

        // Animate CTA button with bounce
        tl.to('.cta-button', {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)'
        }, '-=0.4');

        // Animate hero image (combined in one smooth animation)
        tl.to('.hero-image img', {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: 'power2.out',
            onComplete: () => {
                // Start floating animation after entrance completes
                gsap.to('.hero-image img', {
                    y: -20,
                    duration: 2.5,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
            }
        }, '-=1');

        // Add hover effects for CTA button
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('mouseenter', () => {
                gsap.to(ctaButton, {
                    scale: 1.1,
                    boxShadow: '0 10px 30px rgba(0, 123, 255, 0.4)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            ctaButton.addEventListener('mouseleave', () => {
                gsap.to(ctaButton, {
                    scale: 1,
                    boxShadow: '0 0 0 rgba(0, 123, 255, 0)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        }

    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
            animateHeroEntrance();
        });
    } else {
        createParticles();
        animateHeroEntrance();
    }
})();
