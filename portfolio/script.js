// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinksElements = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger once on load

// Counter animation for stats
const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimatedStats = false;

const animateStats = () => {
    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;
    
    const statsTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (statsTop < windowHeight - 100 && !hasAnimatedStats) {
        hasAnimatedStats = true;
        
        statNumbers.forEach(stat => {
            const target = parseFloat(stat.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                
                if (current < target) {
                    if (target % 1 !== 0) {
                        stat.textContent = current.toFixed(1);
                    } else {
                        stat.textContent = Math.ceil(current);
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
                }
            };
            
            updateCounter();
        });
    }
};

window.addEventListener('scroll', animateStats);
animateStats(); // Trigger once on load

// Skill bars animation
const skillProgressBars = document.querySelectorAll('.skill-progress');
let hasAnimatedSkills = false;

const animateSkills = () => {
    const skillsSection = document.querySelector('.skills');
    if (!skillsSection) return;
    
    const skillsTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (skillsTop < windowHeight - 100 && !hasAnimatedSkills) {
        hasAnimatedSkills = true;
        
        skillProgressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            setTimeout(() => {
                bar.style.width = progress + '%';
            }, 300);
        });
    }
};

window.addEventListener('scroll', animateSkills);
animateSkills(); // Trigger once on load

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                if (card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact form handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields!');
            return;
        }
        
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address!');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert(`Thank you, ${name}! Your message has been sent successfully. I will get back to you soon!`);
        
        // Reset form
        contactForm.reset();
    });
}

// Typing effect for hero section (optional enhancement)
const heroTitle = document.querySelector('.hero-text h1');
if (heroTitle) {
    const originalText = heroTitle.innerHTML;
    // You can implement a typing effect here if desired
}

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const floatItems = document.querySelectorAll('.float-item');
    
    floatItems.forEach((item, index) => {
        const speed = (index + 1) * 0.5;
        item.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
    });
});

// Add hover effect to timeline items
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        timelineItems.forEach(i => {
            if (i !== item) {
                i.style.opacity = '0.5';
            }
        });
    });
    
    item.addEventListener('mouseleave', () => {
        timelineItems.forEach(i => {
            i.style.opacity = '1';
        });
    });
});

// Add particle effect on hero section (optional)
const heroSection = document.querySelector('.hero');
if (heroSection) {
    // Create particles on click
    heroSection.addEventListener('click', (e) => {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.background = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        particle.style.pointerEvents = 'none';
        particle.style.animation = 'particleFade 1s ease-out forwards';
        
        heroSection.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    });
}

// Add CSS for particle animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes particleFade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(3);
        }
    }
`;
document.head.appendChild(style);

// Language proficiency tooltip
const languageItems = document.querySelectorAll('.language-item');

languageItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.cursor = 'pointer';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Intersection Observer for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

revealElements.forEach(element => {
    observer.observe(element);
});

// Console message for developers
console.log('%cWelcome to My Portfolio!', 'color: #e74c3c; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ for China University Admission', 'color: #3498db; font-size: 14px;');
console.log('%cFeel free to explore the code and customize it for your needs!', 'color: #27ae60; font-size: 12px;');
