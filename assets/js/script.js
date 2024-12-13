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
// })document.addEventListener('DOMContentLoaded', () => {
  const portfolioItems = document.querySelectorAll('.PORTOFOLIO');
  let isDragging = false;
  let startX = 0;
  let currentIndex = 0;

  // Helper to set the translation
  const setPortfolioPosition = () => {
    portfolioItems.forEach((item, index) => {
      item.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
      item.style.transition = 'transform 0.3s ease-in-out';
    });
  };

  // Initialize positions
  setPortfolioPosition();

  // Handle touch start
  portfolioItems.forEach((item) => {
    item.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
    });
  });

  // Handle touch move
  portfolioItems.forEach((item) => {
    item.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const currentX = e.touches[0].clientX;
      const deltaX = currentX - startX;

      portfolioItems.forEach((item) => {
        item.style.transform = `translateX(${deltaX}px)`;
        item.style.transition = 'none';
      });
    });
  });

  // Handle touch end
  portfolioItems.forEach((item) => {
    item.addEventListener('touchend', (e) => {
      isDragging = false;
      const movedBy = e.changedTouches[0].clientX - startX;

      if (movedBy < -50 && currentIndex < portfolioItems.length - 1) {
        // Swipe left
        currentIndex++;
      } else if (movedBy > 50 && currentIndex > 0) {
        // Swipe right
        currentIndex--;
      }

      setPortfolioPosition();
    });
  });
