
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

toggle.forEach(element => {
  element.addEventListener('click', function(){
    nav.classList.toggle('show');
  })
});



const links = document.querySelectorAll('nav ul li');

const header = document.querySelector("#header");
const navHeight = header.offsetHeight

links.forEach(element => {
  element.addEventListener('click', function(){
    nav.classList.remove('show')
  })
});




 function navHeightScroll(){
  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  }else {
    header.classList.remove('scroll')
  }
}


/* slider swiper */

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el:'.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});


const backToTopButton = document.querySelector('.back-to-top');

function backToTop(){
  if(window.scrollY > 500) {
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}

const sections = document.querySelectorAll('section[id]');

function menuCurrentSection(){
  const checkPoint = window.pageYOffset + (window.innerHeight / 8) * 4

   for(const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkPointStart = checkPoint >= sectionTop
    const checkPointEnd = checkPoint <=  sectionTop + sectionHeight

    if(checkPointStart && checkPointEnd) {
      document.querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')
    }else {
      document.querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }
  }
}

/* When Scroll */

window.addEventListener('scroll', function(){
   navHeightScroll();
   backToTop();
   menuCurrentSection();
})


