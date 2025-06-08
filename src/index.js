import './styles/main.css';

// Portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
    const featuredImage = document.getElementById('featured-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        // Click/tap event for changing featured image
        thumbnail.addEventListener('click', function() {
            changeFeaturedImage(this);
        });
        
        // Touch event for mobile
        thumbnail.addEventListener('touchend', function(e) {
            e.preventDefault();
            changeFeaturedImage(this);
        });
    });

    function changeFeaturedImage(thumbnail) {
        // Remove active class from all thumbnails
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        
        // Add active class to clicked thumbnail
        thumbnail.classList.add('active');
        
        // Update featured image
        const newImageSrc = thumbnail.getAttribute('data-image');
        featuredImage.src = newImageSrc;
        
        // Smooth transition effect
        featuredImage.style.opacity = '0';
        setTimeout(() => {
            featuredImage.style.opacity = '1';
        }, 150);
    }

    // Contact form functionality
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Create mailto link
        const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        const mailtoLink = `mailto:amymartinezgd@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
        
        // Open email client
        window.location.href = mailtoLink;
    });

    // Smooth scrolling for better UX (if adding navigation later)
    function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    }
});

console.log('AM Portfolio loaded successfully');