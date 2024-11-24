// Optional: Form handling or additional JS functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded");
    // Example: Add form submission or dynamic project loading
});
const sliderContainer = document.querySelector('.slider-container');
const sliderCards = document.querySelectorAll('.slider-card');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;
const totalSlides = sliderCards.length;

// Update slider based on current slide
function updateSlider() {
    const width = sliderCards[0].clientWidth;
    sliderContainer.style.transform = `translateX(-${currentSlide * (width + 30)}px)`; // Adjust for card margin
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

// Next Button Functionality
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
});

// Previous Button Functionality
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
});

// Dot Navigation
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentSlide = parseInt(e.target.getAttribute('data-slide'));
        updateSlider();
    });
});

// Initialize slider
updateSlider();


// JavaScript to handle form submission
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email) {
        alert("Please fill in the required fields.");
        return;
    }

    // Here you can handle the form data, e.g., send it via AJAX, or display a success message.
    alert(`Message sent by ${name} with email: ${email}. Subject: ${subject}, Message: ${message}`);
});
// Example: Copy email to clipboard
document.querySelector('.contact-section').addEventListener('click', () => {
    const email = 'Youremail@Gmail.Com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard!');
    });
});

