// Smooth scrolling for navigation links
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

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Typing effect
const typingText = document.querySelector('.typing-text');
const words = ['Frontend Developer', 'Web Designer', 'UI/UX Designer', 'Full Stack Developer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect when page loads
if (typingText) {
    setTimeout(typeEffect, 1000);
}

// Form submission using EmailJS (Gmail service)
// Note: EmailJS will use your Gmail App Password internally
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    // Initialize EmailJS - Replace with your Public Key from EmailJS dashboard
    if (typeof emailjs !== 'undefined') {
        emailjs.init("YOUR_PUBLIC_KEY");
    }
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formMessage = document.getElementById('form-message');
        const submitButton = contactForm.querySelector('.btn-submit');
        const originalButtonText = submitButton.textContent;
        
        // Disable button and show loading
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        formMessage.textContent = '';
        formMessage.className = 'form-message';
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // EmailJS template parameters (same format as Flask backend)
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_email: 'ammaroofficial99@gmail.com',
            subject: 'Portfolio Contact Form - Message from ' + name,
            reply_to: email
        };
        
        try {
            if (typeof emailjs === 'undefined') {
                throw new Error('EmailJS not loaded. Please check setup.');
            }
            
            // Send email using EmailJS
            // Replace these with your actual IDs from EmailJS dashboard:
            // - Service ID: Gmail service ID from EmailJS
            // - Template ID: Email template ID from EmailJS  
            // - Public Key: Your EmailJS public key
            await emailjs.send(
                'YOUR_SERVICE_ID',      // Replace with your Gmail Service ID
                'YOUR_TEMPLATE_ID',     // Replace with your Template ID
                templateParams,
                'YOUR_PUBLIC_KEY'       // Replace with your Public Key
            );
            
            formMessage.textContent = 'Thank you! Your message has been sent successfully.';
            formMessage.className = 'form-message success';
            contactForm.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            formMessage.textContent = 'Error sending message. Please try again or contact me directly at ammaroofficial99@gmail.com';
            formMessage.className = 'form-message error';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}

// Portfolio item animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

document.querySelectorAll('.portfolio-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease';
    observer.observe(item);
});
