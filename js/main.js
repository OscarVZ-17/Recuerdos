document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const loginPage = document.getElementById('loginPage');
    const galleryPage = document.getElementById('galleryPage');
    const siBtn = document.getElementById('siBtn');
    const noBtn = document.getElementById('noBtn');
    const exitBtn = document.getElementById('exitBtn');
    const bgMusic = document.getElementById('bgMusic');

    // Initialize volume control
    const volumeControl = new VolumeControl(bgMusic);

    // Initialize gallery
    const gallery = new Gallery();

    // Play background music
    document.addEventListener('click', () => {
        bgMusic.play().catch(error => console.log('Audio autoplay failed:', error));
    }, { once: true });

    // Calculate boundaries for "No" button movement
    const calculateBoundaries = () => {
        const padding = 20; // Padding from screen edges
        return {
            minX: padding,
            maxX: window.innerWidth - noBtn.offsetWidth - padding,
            minY: padding,
            maxY: window.innerHeight - noBtn.offsetHeight - padding
        };
    };

    // Move "No" button randomly within boundaries
    const moveNoButton = () => {
        const bounds = calculateBoundaries();
        const randomX = Math.random() * (bounds.maxX - bounds.minX) + bounds.minX;
        const randomY = Math.random() * (bounds.maxY - bounds.minY) + bounds.minY;
        
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    };

    // Move button on hover/touch
    noBtn.addEventListener('mouseover', moveNoButton);
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveNoButton();
    });

    // Update boundaries on window resize
    window.addEventListener('resize', () => {
        const bounds = calculateBoundaries();
        const currentX = parseInt(noBtn.style.left);
        const currentY = parseInt(noBtn.style.top);

        // Keep button within new boundaries
        if (currentX < bounds.minX || currentX > bounds.maxX ||
            currentY < bounds.minY || currentY > bounds.maxY) {
            moveNoButton();
        }
    });

    // Handle "Sí" button click
    siBtn.addEventListener('click', () => {
        loginPage.classList.remove('active');
        galleryPage.classList.add('active');
    });

    // Handle exit button
    exitBtn.addEventListener('click', () => {
        window.close();
    });
});