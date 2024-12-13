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


// SLIDESHOW CAROUSEL
back = document.getElementById('back')
next = document.getElementById('next')
portfolio = document.querySelectorAll('.PORTFOLIO')
let count = 0

next.addEventListener('click', () => {
  if(count === 2){
    portfolio.forEach(a => {
      a.style.transform = `translateX(0%)`
  })
  count = 0
  }
  else{
  count++
  portfolio.forEach(a => {
    a.style.transform = `translateX(-${100 * count}%)`
  })}
})

back.addEventListener('click', () => {
  if(count === 0){
    portfolio.forEach(a => {
      a.style.transform = `translateX(-200%)`
  })
  count = 2
  }
  else{
  count--
  portfolio.forEach(a => {
    a.style.transform = `translateX(-${100 * count}%)`
  })}
})
  
  
  