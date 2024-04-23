// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery img');
const totalImages = galleryImages.length;
let currentImageIndex = 0;

// Function to display the current image
function showImage(index) {
    galleryImages.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Event listeners for next and previous buttons
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
});

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
});

// Show the first image initially
showImage(currentImageIndex);
