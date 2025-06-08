import './styles/main.css';

// Portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
    const featuredImage = document.getElementById('featured-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Update featured image
            const newImageSrc = this.getAttribute('data-image');
            featuredImage.src = newImageSrc;
            
            // Smooth transition effect
            featuredImage.style.opacity = '0';
            setTimeout(() => {
                featuredImage.style.opacity = '1';
            }, 150);
        });
    });

    // Contact form functionality
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link
        const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        const mailtoLink = `mailto:martinez.l.amy@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
        
        // Open email client
        window.location.href = mailtoLink;
    });
});

console.log('AM Portfolio loaded successfully');