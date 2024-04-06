



let currentIndex = 0;

function showSlide(index) {
  const wrapper = document.querySelector('.slider-wrapper');
  const slideWidth = document.querySelector('.slide').offsetWidth;
  wrapper.style.transform = `translateX(-${index * slideWidth}px)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + getTotalSlides()) % getTotalSlides();
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % getTotalSlides();
  showSlide(currentIndex);
}

function getTotalSlides() {
  return document.querySelectorAll('.slide').length;
}



