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
        
        // Get the new image source
        const newImageSrc = thumbnail.getAttribute('data-image');
        
        // Only fade if it's a different image
        if (featuredImage.src.includes(newImageSrc.split('/').pop())) {
            return; // Same image, no need to transition
        }
        
        // Smooth crossfade transition
        featuredImage.style.opacity = '0';
        
        // Wait for fade out to complete, then change source and fade in
        setTimeout(() => {
            featuredImage.src = newImageSrc;
            
            // Wait a tiny bit for the new image to load, then fade in
            featuredImage.onload = () => {
                featuredImage.style.opacity = '1';
            };
            
            // Fallback in case onload doesn't fire
            setTimeout(() => {
                featuredImage.style.opacity = '1';
            }, 50);
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