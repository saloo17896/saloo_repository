// Sample project data
const projects = [
    {
        title: "Strategic Battle Arena",
        description: "A multiplayer strategic combat game with real-time tactical gameplay.",
        image: "https://via.placeholder.com/300x200",
        tags: ["Strategy", "Multiplayer", "Unity"],
        link: "#"
    },
    {
        title: "FPS Adventure",
        description: "First-person shooter with immersive storyline and dynamic combat system.",
        image: "https://via.placeholder.com/300x200",
        tags: ["FPS", "Action", "Unreal Engine"],
        link: "#"
    },
    {
        title: "Action RPG",
        description: "Role-playing game featuring intense action combat and character progression.",
        image: "https://via.placeholder.com/300x200",
        tags: ["RPG", "Action", "Unity"],
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

// Generate project cards
function createProjectCard(project) {
    return `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link" target="_blank">View Project</a>
            </div>
        </div>
    `;
}

// Populate projects section
const projectGrid = document.querySelector('.project-grid');
projects.forEach(project => {
    projectGrid.innerHTML += createProjectCard(project);
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

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