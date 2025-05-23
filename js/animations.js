// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
});

function initializeAnimations() {
    // Mouse trail effect
    const mouseTrail = debounce((e) => {
        const trail = document.createElement('div');
        trail.className = 'mouse-trail';
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        document.body.appendChild(trail);

        setTimeout(() => {
            trail.remove();
        }, 1000);
    }, 10);

    document.addEventListener('mousemove', mouseTrail);

    // Floating elements animation
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach(element => {
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        const randomDelay = Math.random() * 2;
        
        element.style.animation = `float ${3 + randomDelay}s ease-in-out infinite`;
        element.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });

    // 3D card effect with performance optimization
    const cards = document.querySelectorAll('.project-card');
    let frameId;

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (frameId) {
                cancelAnimationFrame(frameId);
            }

            frameId = requestAnimationFrame(() => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });
        });
        
        card.addEventListener('mouseleave', () => {
            if (frameId) {
                cancelAnimationFrame(frameId);
            }
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // Parallax scrolling with performance optimization
    const parallaxElements = document.querySelectorAll('.parallax');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                parallaxElements.forEach(element => {
                    const speed = element.dataset.speed || 0.5;
                    element.style.transform = `translateY(${scrolled * speed}px)`;
                });
                ticking = false;
            });
            ticking = true;
        }
    });

    // Glitch effect
    function createGlitchEffect(element) {
        const glitchText = element.textContent;
        const glitchContainer = document.createElement('div');
        glitchContainer.className = 'glitch-container';
        
        for (let i = 0; i < 3; i++) {
            const glitchLayer = document.createElement('div');
            glitchLayer.className = 'glitch-layer';
            glitchLayer.textContent = glitchText;
            glitchContainer.appendChild(glitchLayer);
        }
        
        element.textContent = '';
        element.appendChild(glitchContainer);
    }

    // Apply glitch effect to elements with glitch class
    document.querySelectorAll('.glitch').forEach(createGlitchEffect);

    // Loading overlay
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('fade-out');
        setTimeout(() => {
            loadingOverlay.remove();
        }, 500);
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate').forEach(element => {
        observer.observe(element);
    });
}

// Add CSS classes for animations
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .mouse-trail {
            position: fixed;
            width: 10px;
            height: 10px;
            background: var(--secondary-color);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.5;
            animation: fadeOut 1s ease-out forwards;
            z-index: 9999;
        }

        .glitch-container {
            position: relative;
            display: inline-block;
        }

        .glitch-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--dark-bg);
            color: var(--secondary-color);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            animation: glitch 2s infinite;
        }

        .glitch-layer:nth-child(2) {
            animation-delay: 0.1s;
            color: var(--primary-color);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        .glitch-layer:nth-child(3) {
            animation-delay: 0.2s;
            color: #fff;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        @keyframes fadeOut {
            to {
                opacity: 0;
                transform: scale(0);
            }
        }

        @keyframes glitch {
            0% {
                transform: translate(0);
            }
            20% {
                transform: translate(-2px, 2px);
            }
            40% {
                transform: translate(-2px, -2px);
            }
            60% {
                transform: translate(2px, 2px);
            }
            80% {
                transform: translate(2px, -2px);
            }
            100% {
                transform: translate(0);
            }
        }

        .fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
`); 