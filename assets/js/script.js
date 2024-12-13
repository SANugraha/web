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
  
const sliderWrapper = document.querySelector('.GRID-3');
    const sliderItems = document.querySelectorAll('PORTFOLIO');
    const leftArrow = document.getElementById('back');
    const rightArrow = document.getElementById('next');

    let currentIndex = 0;
    let isTouching = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    // Update slider position
    function updateSliderPosition() {
      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Left arrow click event
    leftArrow.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
      }
    });

    // Right arrow click event
    rightArrow.addEventListener('click', () => {
      if (currentIndex < sliderItems.length - 1) {
        currentIndex++;
        updateSliderPosition();
      }
    });

    // Touch start
    sliderWrapper.addEventListener('touchstart', (e) => {
      isTouching = true;
      startX = e.touches[0].clientX;
      prevTranslate = currentTranslate;
    });

    // Touch move
    sliderWrapper.addEventListener('touchmove', (e) => {
      if (!isTouching) return;

      const currentX = e.touches[0].clientX;
      const diffX = currentX - startX;

      currentTranslate = prevTranslate + diffX;
      sliderWrapper.style.transform = `translateX(${currentTranslate}px)`;
    });

    // Touch end
    sliderWrapper.addEventListener('touchend', (e) => {
      isTouching = false;

      const movedBy = currentTranslate - prevTranslate;

      if (movedBy < -50 && currentIndex < sliderItems.length - 1) {
        currentIndex++;
      } else if (movedBy > 50 && currentIndex > 0) {
        currentIndex--;
      }

      updateSliderPosition();
    });
  
  