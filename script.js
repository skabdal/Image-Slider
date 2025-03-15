let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    // Move to the next or previous slide
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    
    // Update the transform property to show the current slide
    document.querySelector('.slider').style.transform = `translateX(${-currentIndex * 100}%)`;
}


