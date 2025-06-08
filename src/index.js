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
});

console.log('AM Portfolio loaded successfully');