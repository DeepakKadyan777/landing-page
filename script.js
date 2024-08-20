let currentIndex = 0;
const items = document.querySelectorAll('.slider-item');

function showItem(index) {
    // Ensure the index is within bounds
    index = index < 0 ? items.length - 1 : index % items.length;

    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

function slide(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % items.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
    }
    showItem(currentIndex);
}

// Initialize the first item to be visible
document.addEventListener('DOMContentLoaded', function() {
    showItem(currentIndex);
});



// Initialize the slider
let currentTestimonialIndex = 0;

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.main-testimonial');
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'flex' : 'none';
    });
}

function ok(direction) {
    const testimonials = document.querySelectorAll('.main-testimonial');
    if (direction === 'next') {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    } else if (direction === 'prev') {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    }
    showTestimonial(currentTestimonialIndex);
}

// Initialize the first testimonial to be visible
document.addEventListener('DOMContentLoaded', function() {
    showTestimonial(currentTestimonialIndex);
});
document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.querySelector('.banner-close');
    const banner = document.querySelector('.banner');

    closeButton.addEventListener('click', function() {
        banner.style.display = 'none';
    });
});
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const closeToggle = document.getElementById('closeToggle');

// Toggle menu on clicking the hamburger icon
menuToggle.addEventListener('click', () => {
    navLinks.classList.add('active');
});

// Close the menu using the close button
closeToggle.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// Close the menu when clicking outside the nav or hamburger
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});
