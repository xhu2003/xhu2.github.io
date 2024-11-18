// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    // Fade in effect for page content
    document.body.classList.add('loaded');

    // Check if we're on home page
    const isHomePage = document.querySelector('.name-title');
    
    if (isHomePage) {
        // Add hover effect to name title
        const nameTitle = document.querySelector('.name-title');
        nameTitle.addEventListener('mouseover', function() {
            this.style.letterSpacing = '1.2rem';
        });
        nameTitle.addEventListener('mouseout', function() {
            this.style.letterSpacing = '0.8rem';
        });

        // Add typing effect to subtitle
        const subtitle = document.querySelector('.subtitle');
        const originalText = subtitle.textContent;
        subtitle.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < originalText.length) {
                subtitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000); // Start typing after 1 second

        // Add hover effect to Enter Gallery button
        const galleryButton = document.querySelector('.nav-link');
        galleryButton.addEventListener('mouseover', function() {
            this.innerHTML = 'EXPLORE →';
        });
        galleryButton.addEventListener('mouseout', function() {
            this.innerHTML = 'Enter Gallery <span class="arrow-icon">→</span>';
        });

        // Add click effect anywhere on the page
        document.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.classList.add('click-ripple');
            ripple.style.left = e.clientX + 'px';
            ripple.style.top = e.clientY + 'px';
            document.body.appendChild(ripple);

            // Remove ripple after animation
            setTimeout(() => ripple.remove(), 1000);
        });
    }

    // Portfolio page interactions remain the same
    const portfolioPhotos = document.querySelectorAll('.photo-item');
    if (portfolioPhotos.length > 0) {
        portfolioPhotos.forEach(photo => {
            photo.addEventListener('click', function() {
                const title = this.querySelector('.photo-overlay p').textContent;
                showPhotoInfo(title);
                this.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            });
        });
    }
});

// Photo info function remains the same
function showPhotoInfo(title) {
    const infoBox = document.createElement('div');
    infoBox.className = 'photo-info';
    infoBox.innerHTML = `
        <div class="info-content">
            <h3>${title}</h3>
            <p>Click anywhere to close</p>
        </div>
    `;
    document.body.appendChild(infoBox);
    infoBox.addEventListener('click', function() {
        this.remove();
    });
}