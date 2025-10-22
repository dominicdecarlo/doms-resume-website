// GSAP Section Header Animations with ScrollTrigger
(function() {
    'use strict';
    
    // Wait for GSAP and ScrollTrigger to be ready
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.error('GSAP or ScrollTrigger not loaded');
        return;
    }

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    function initSectionAnimations() {
        // About Me header animation - Simple fade in
        const aboutHeader = document.querySelector('#about h2');
        if (aboutHeader) {
            // Simple fade in
            gsap.fromTo(aboutHeader, 
                {
                    opacity: 0,
                    y: 30
                },
                {
                    scrollTrigger: {
                        trigger: aboutHeader,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                        once: true
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out'
                }
            );

            // Pulsing glow effect that repeats
            gsap.to(aboutHeader, {
                scrollTrigger: {
                    trigger: aboutHeader,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                    once: true
                },
                textShadow: '0 0 30px rgba(0, 123, 255, 0.8), 0 0 60px rgba(0, 123, 255, 0.4)',
                duration: 1,
                delay: 0.5,
                yoyo: true,
                repeat: 2,
                ease: 'sine.inOut'
            });
        }        // Animate About text content
        const aboutText = document.querySelector('.about-text');
        if (aboutText) {
            const paragraphs = aboutText.querySelectorAll('p');
            gsap.fromTo(paragraphs,
                {
                    opacity: 0,
                    x: -50
                },
                {
                    scrollTrigger: {
                        trigger: aboutText,
                        start: 'top 70%',
                        toggleActions: 'play none none none',
                        once: true
                    },
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out',
                    delay: 0.5
                }
            );
        }

        // Animate About tags with stagger
        const aboutTags = document.querySelectorAll('.about-tags .tag');
        if (aboutTags.length > 0) {
            gsap.fromTo(aboutTags,
                {
                    opacity: 0,
                    scale: 0,
                    rotation: -180
                },
                {
                    scrollTrigger: {
                        trigger: '.about-tags',
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                        once: true
                    },
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'back.out(2)',
                    delay: 0.8
                }
            );

            // Add hover animation for tags
            aboutTags.forEach(tag => {
                tag.addEventListener('mouseenter', () => {
                    gsap.to(tag, {
                        scale: 1.15,
                        backgroundColor: '#007bff',
                        color: '#fff',
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                });

                tag.addEventListener('mouseleave', () => {
                    gsap.to(tag, {
                        scale: 1,
                        backgroundColor: '#2c2c2c',
                        color: '#ddd',
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                });
            });
        }

        // Animate About photo
        const aboutPhoto = document.querySelector('.about-photo');
        if (aboutPhoto) {
            gsap.fromTo(aboutPhoto,
                {
                    opacity: 0,
                    scale: 0.8,
                    rotation: 5
                },
                {
                    scrollTrigger: {
                        trigger: aboutPhoto,
                        start: 'top 75%',
                        toggleActions: 'play none none none',
                        once: true
                    },
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    delay: 0.3
                }
            );
        }

        // EDUCATION SECTION ANIMATIONS - Snap scroll triggered
        const educationSection = document.querySelector('#education');
        const educationHeader = document.querySelector('#education h2');
        const educationHeaderDiv = document.querySelector('.education-header');
        const courseworkHeading = document.querySelector('#education h3');
        const courseCards = document.querySelectorAll('.course-card');
        
        if (educationSection && educationHeader && courseworkHeading) {
            // Set initial state - hidden
            gsap.set(educationHeader, { opacity: 0, x: -100 });
            if (educationHeaderDiv) gsap.set(educationHeaderDiv, { opacity: 0, x: -80 });
            gsap.set(courseworkHeading, { opacity: 0, y: 20 });
            if (courseCards.length > 0) gsap.set(courseCards, { opacity: 0, y: 30, scale: 0.9 });

            // Create ScrollTrigger that fires when section is at top (snap scroll position)
            ScrollTrigger.create({
                trigger: educationSection,
                start: 'top top+=100', // When section reaches near the top
                onEnter: () => {
                    // Animate main header
                    gsap.to(educationHeader, {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        ease: 'power3.out'
                    });

                    // Add pulsing glow effect to header
                    gsap.to(educationHeader, {
                        textShadow: '0 0 20px rgba(0, 123, 255, 0.6)',
                        duration: 0.8,
                        delay: 0.5,
                        yoyo: true,
                        repeat: 1,
                        ease: 'sine.inOut'
                    });

                    // Animate education header content (logo + text)
                    if (educationHeaderDiv) {
                        gsap.to(educationHeaderDiv, {
                            opacity: 1,
                            x: 0,
                            duration: 1.2,
                            ease: 'back.out(1.2)',
                            delay: 0.3
                        });
                    }

                    // Animate "Relevant Coursework" subheading
                    gsap.to(courseworkHeading, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        delay: 0.6
                    });

                    // Animate course cards with stagger
                    if (courseCards.length > 0) {
                        gsap.to(courseCards, {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.6,
                            stagger: 0.08,
                            ease: 'back.out(1.5)',
                            delay: 0.8
                        });
                    }
                },
                once: true
            });
        }

        // EXPERIENCE SECTION ANIMATIONS - Snap scroll triggered
        const experienceSection = document.querySelector('#experience');
        const experienceHeader = document.querySelector('#experience h2');
        const jobCards = document.querySelectorAll('.job-card');
        
        if (experienceSection && experienceHeader) {
            // Set initial state - hidden
            gsap.set(experienceHeader, { opacity: 0, x: -80, scale: 0.9 });
            gsap.set(jobCards, { opacity: 0, y: 80, rotationX: -15, scale: 0.9 });

            // Create ScrollTrigger that fires when section is at top (snap scroll position)
            ScrollTrigger.create({
                trigger: experienceSection,
                start: 'top top+=100', // When section reaches near the top
                onEnter: () => {
                    // Animate Experience header
                    gsap.to(experienceHeader, {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        duration: 1,
                        ease: 'power3.out'
                    });

                    // Pulsing glow effect
                    gsap.to(experienceHeader, {
                        textShadow: '0 0 25px rgba(0, 123, 255, 0.6)',
                        duration: 0.8,
                        delay: 0.6,
                        yoyo: true,
                        repeat: 2,
                        ease: 'sine.inOut'
                    });

                    // Animate job cards with stagger
                    gsap.to(jobCards, {
                        opacity: 1,
                        y: 0,
                        rotationX: 0,
                        scale: 1,
                        duration: 1,
                        stagger: 0.2,
                        ease: 'power3.out',
                        delay: 0.3
                    });
                },
                once: true
            });
        }

        // Animate job cards individual elements and hover effects
        if (jobCards.length > 0) {
            jobCards.forEach((card, index) => {
                // Card entrance animation
                gsap.fromTo(card,
                    {
                        opacity: 0,
                        y: 80,
                        rotationX: -15,
                        scale: 0.9
                    },
                    {
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 80%',
                            toggleActions: 'play none none none',
                            once: true
                        },
                        opacity: 1,
                        y: 0,
                        rotationX: 0,
                        scale: 1,
                        duration: 1,
                        ease: 'power3.out',
                        delay: index * 0.2
                    }
                );

                // Company icon animation
                const companyIcon = card.querySelector('.company-icon');
                if (companyIcon) {
                    gsap.fromTo(companyIcon,
                        {
                            scale: 0,
                            rotation: -180
                        },
                        {
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 75%',
                                toggleActions: 'play none none none',
                                once: true
                            },
                            scale: 1,
                            rotation: 0,
                            duration: 0.8,
                            ease: 'back.out(2)',
                            delay: index * 0.2 + 0.3
                        }
                    );

                    // Add continuous subtle rotation on hover
                    companyIcon.addEventListener('mouseenter', () => {
                        gsap.to(companyIcon, {
                            rotation: 360,
                            duration: 0.6,
                            ease: 'power2.inOut'
                        });
                    });
                }

                // Animate job text content
                const jobHeader = card.querySelector('.job-header h3');
                if (jobHeader) {
                    gsap.fromTo(jobHeader,
                        {
                            opacity: 0,
                            x: -30
                        },
                        {
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 75%',
                                toggleActions: 'play none none none',
                                once: true
                            },
                            opacity: 1,
                            x: 0,
                            duration: 0.8,
                            ease: 'power2.out',
                            delay: index * 0.2 + 0.4
                        }
                    );
                }

                const jobDescription = card.querySelector('p:last-child');
                if (jobDescription) {
                    gsap.fromTo(jobDescription,
                        {
                            opacity: 0,
                            y: 20
                        },
                        {
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 70%',
                                toggleActions: 'play none none none',
                                once: true
                            },
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: 'power2.out',
                            delay: index * 0.2 + 0.6
                        }
                    );
                }

                // Add hover lift effect to entire card
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -10,
                        boxShadow: '0 20px 40px rgba(0, 123, 255, 0.2)',
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        boxShadow: '0 0 0 rgba(0, 123, 255, 0)',
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                });
            });
        }

        // PROJECTS SECTION ANIMATIONS
        const projectsHeader = document.querySelector('#projects h2');
        const projectSection = document.querySelector('#projects');
        const projectCards = document.querySelectorAll('.project-card');
        const projectsCTA = document.querySelector('#projects .cta-button');
        
        if (projectsHeader && projectSection) {
            // Set initial state - hidden
            gsap.set(projectsHeader, { opacity: 0, scale: 0.8 });
            if (projectCards.length > 0) gsap.set(projectCards, { opacity: 0, scale: 0.7 });
            if (projectsCTA) gsap.set(projectsCTA, { opacity: 0, scale: 0 });

            // Create ScrollTrigger that fires when section is at top (snap scroll position)
            ScrollTrigger.create({
                trigger: projectSection,
                start: 'top top+=100', // When section reaches near the top
                onEnter: () => {
                    // Animate header
                    gsap.to(projectsHeader, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: 'back.out(1.5)'
                    });

                    // Animate project cards with zoom and stagger
                    if (projectCards.length > 0) {
                        gsap.to(projectCards, {
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            stagger: 0.15,
                            ease: 'back.out(1.7)',
                            delay: 0.3
                        });
                    }

                    // Animate CTA button
                    if (projectsCTA) {
                        gsap.to(projectsCTA, {
                            opacity: 1,
                            scale: 1,
                            duration: 0.6,
                            ease: 'elastic.out(1, 0.5)',
                            delay: 1.5
                        });
                    }
                },
                once: true
            });

            // Add hover effects for project cards
            if (projectCards.length > 0) {
                projectCards.forEach(card => {
                    card.addEventListener('mouseenter', () => {
                        gsap.to(card, {
                            scale: 1.05,
                            y: -15,
                            boxShadow: '0 20px 40px rgba(0, 123, 255, 0.3)',
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    });

                    card.addEventListener('mouseleave', () => {
                        gsap.to(card, {
                            scale: 1,
                            y: 0,
                            boxShadow: '0 15px 25px rgba(0, 0, 0, 0.3)',
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    });
                });
            }
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSectionAnimations);
    } else {
        initSectionAnimations();
    }
})();
