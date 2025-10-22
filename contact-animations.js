// Contact Page Animations
(function() {
    'use strict';
    
    // Wait for GSAP to be ready
    if (typeof gsap === 'undefined') {
        console.error('GSAP not loaded');
        return;
    }

    function initContactAnimations() {
        // Hero section animations
        gsap.from('.contact-title', {
            duration: 1.2,
            y: 50,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.3
        });

        gsap.from('.contact-subtitle', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.5
        });

        // Contact info section
        gsap.from('.contact-info h2', {
            duration: 1,
            x: -50,
            opacity: 0,
            ease: 'power2.out',
            delay: 0.7,
            scrollTrigger: {
                trigger: '.contact-info',
                start: 'top 80%',
                toggleActions: 'play none none none',
                once: true
            }
        });

        gsap.from('.contact-info > p', {
            duration: 1,
            x: -50,
            opacity: 0,
            ease: 'power2.out',
            delay: 0.9,
            scrollTrigger: {
                trigger: '.contact-info',
                start: 'top 80%',
                toggleActions: 'play none none none',
                once: true
            }
        });

        // Animate contact methods with stagger
        const contactMethods = document.querySelectorAll('.contact-method');
        gsap.from(contactMethods, {
            duration: 0.8,
            x: -30,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.contact-methods',
                start: 'top 80%',
                toggleActions: 'play none none none',
                once: true
            }
        });

        // Animate contact icons on hover
        contactMethods.forEach(method => {
            const icon = method.querySelector('.contact-icon');
            
            method.addEventListener('mouseenter', () => {
                gsap.to(icon, {
                    rotation: 360,
                    scale: 1.1,
                    duration: 0.6,
                    ease: 'back.out(1.7)'
                });
            });

            method.addEventListener('mouseleave', () => {
                gsap.to(icon, {
                    rotation: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });
        });

        // Animate form wrapper
        gsap.from('.contact-form-wrapper', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out',
            delay: 1.1,
            scrollTrigger: {
                trigger: '.contact-form-wrapper',
                start: 'top 80%',
                toggleActions: 'play none none none',
                once: true
            }
        });

        // Animate form groups
        const formGroups = document.querySelectorAll('.form-group');
        gsap.from(formGroups, {
            duration: 0.6,
            y: 20,
            opacity: 0,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.contact-form',
                start: 'top 70%',
                toggleActions: 'play none none none',
                once: true
            }
        });

        // Animate submit button
        gsap.from('.submit-button', {
            duration: 0.8,
            scale: 0,
            opacity: 0,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
                trigger: '.contact-form',
                start: 'top 70%',
                toggleActions: 'play none none none',
                once: true
            }
        });

        // Form input focus animations
        const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                gsap.to(this.parentElement.querySelector('label'), {
                    color: '#007bff',
                    scale: 1.05,
                    duration: 0.3
                });
            });

            input.addEventListener('blur', function() {
                gsap.to(this.parentElement.querySelector('label'), {
                    color: '#b0b0b0',
                    scale: 1,
                    duration: 0.3
                });
            });
        });

        // Form submit handler with animation
        const form = document.querySelector('.contact-form');
        const submitButton = document.querySelector('.submit-button');
        
        if (form && submitButton) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Animate button on submit
                gsap.to(submitButton, {
                    scale: 0.95,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    onComplete: () => {
                        // Show success animation
                        const originalHTML = submitButton.innerHTML;
                        submitButton.innerHTML = '<span>✓ Sent!</span>';
                        submitButton.style.background = 'linear-gradient(90deg, #28a745 0%, #20873a 100%)';
                        
                        // Reset after 2 seconds
                        setTimeout(() => {
                            submitButton.innerHTML = originalHTML;
                            submitButton.style.background = 'linear-gradient(90deg, #007bff 0%, #0056b3 100%)';
                            form.reset();
                        }, 2000);
                    }
                });
            });
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initContactAnimations);
    } else {
        initContactAnimations();
    }
})();
