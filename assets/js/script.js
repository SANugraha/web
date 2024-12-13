// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }

};


//SLIDESHOW CAROUSEL
// back = document.getElementById('back')
// next = document.getElementById('next')
// portfolio = document.querySelectorAll('.PORTFOLIO')
// let count = 0

// next.addEventListener('click', () => {
//   if(count === 2){
//     portfolio.forEach(a => {
//       a.style.transform = `translateX(0%)`
//   })
//   count = 0
//   }
//   else{
//   count++
//   portfolio.forEach(a => {
//     a.style.transform = `translateX(-${100 * count}%)`
//   })}
// })

// back.addEventListener('click', () => {
//   if(count === 0){
//     portfolio.forEach(a => {
//       a.style.transform = `translateX(-200%)`
//   })
//   count = 2
//   }
//   else{
//   count--
//   portfolio.forEach(a => {
//     a.style.transform = `translateX(-${100 * count}%)`
//   })}
// })
  
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.GRID-3');
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  // Helper to set the translation
  const setSliderPosition = () => {
    slider.style.transform = `translateX(${currentTranslate}px)`;
    slider.style.scrollSnapAlign = 'proximity';
  };

  // Handle touch start
  slider.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    prevTranslate = currentTranslate;
    slider.style.transition = 'none'; // Disable smooth transition while dragging
  });

  // Handle touch move
  slider.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touchDelta = e.touches[0].clientX - startX;
    currentTranslate = prevTranslate + touchDelta;
    setSliderPosition();
  });

  // Handle touch end
  slider.addEventListener('touchend', () => {
    isDragging = false;
    const sliderWidth = slider.offsetWidth;
    const threshold = sliderWidth / 4;

    if (currentTranslate - prevTranslate < -threshold) {
      // Swipe left
      currentTranslate -= sliderWidth;
    } else if (currentTranslate - prevTranslate > threshold) {
      // Swipe right
      currentTranslate += sliderWidth;
    }

    slider.style.transition = 'transform 0.3s ease-in-out';
    setSliderPosition();
  });
});
