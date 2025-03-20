document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    let slides = document.getElementsByClassName("Slide");

    function showSlides() {
        if (slides.length === 0) return;

        // Remove "active" class from all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }

        // Move to the next slide
        slideIndex++;
        if (slideIndex >= slides.length) { slideIndex = 0; }

        // Add "active" class to the current slide
        slides[slideIndex].classList.add("active");

        setTimeout(showSlides, 8000); // Change slide every 8 seconds
    }

    // Ensure the first image is visible on page load
    if (slides.length > 0) {
        slides[0].classList.add("active");
    }

    showSlides(); // Start slideshow
});