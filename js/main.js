// Project data
const projects = [
    {
        title: "Strategic Conquest",
        description: "A turn-based strategy game featuring resource management and tactical combat.",
        image: "images/projects/strategic-conquest.jpg",
        tags: ["Unity", "C#", "Strategy"],
        link: "#"
    },
    {
        title: "Action Arena",
        description: "Fast-paced action game with dynamic combat mechanics and special abilities.",
        image: "images/projects/action-arena.jpg",
        tags: ["Unreal Engine", "C++", "Action"],
        link: "#"
    },
    {
        title: "FPS Combat",
        description: "First-person shooter with realistic physics and advanced weapon mechanics.",
        image: "images/projects/fps-combat.jpg",
        tags: ["Unity", "C#", "FPS"],
        link: "#"
    }
];

// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        // Close mobile menu after clicking a link
        navLinks.classList.remove('active');
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeProjects();
    initializeContactForm();
});

// Initialize project cards
function initializeProjects() {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return;

    projects.forEach(project => {
        const card = createProjectCard(project);
        projectGrid.appendChild(card);
    });
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card animate';
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" onerror="this.src='images/placeholder.jpg'">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                View Project <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;
    
    return card;
}

// Initialize contact form
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        try {
            // Here you would typically send the data to your backend
            console.log('Form submitted:', data);
            
            // Show success message
            showNotification('Message sent successfully!', 'success');
            form.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            showNotification('Error sending message. Please try again.', 'error');
        }
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    requestAnimationFrame(() => {
        notification.classList.add('show');
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification styles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 5px;
            color: white;
            font-weight: 500;
            transform: translateY(100px);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 1000;
        }

        .notification.show {
            transform: translateY(0);
            opacity: 1;
        }

        .notification.success {
            background-color: #4CAF50;
        }

        .notification.error {
            background-color: #f44336;
        }

        .notification.info {
            background-color: #2196F3;
        }
    </style>
`);

// Add scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
}); 