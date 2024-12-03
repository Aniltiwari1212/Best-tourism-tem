

const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) =>{
    if(!menu.classList.contains("active")){
        return;
    }
  if(e.target.closest(".menu-item-has-children")){
       const hasChildren = e.target.closest(".menu-item-has-children");
     showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click",() =>{
     hideSubMenu();
})
menuTrigger.addEventListener("click",() =>{
     toggleMenu();
})
closeMenu.addEventListener("click",() =>{
     toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click",() =>{
    toggleMenu();
})
function toggleMenu(){
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren){
   subMenu = hasChildren.querySelector(".sub-menu");
   subMenu.classList.add("active");
   subMenu.style.animation = "slideLeft 0.5s ease forwards";
   const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
   menu.querySelector(".current-menu-title").innerHTML=menuTitle;
   menu.querySelector(".mobile-menu-head").classList.add("active");
}

function  hideSubMenu(){  
   subMenu.style.animation = "slideRight 0.5s ease forwards";
   setTimeout(() =>{
      subMenu.classList.remove("active");	
   },300); 
   menu.querySelector(".current-menu-title").innerHTML="";
   menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function(){
    if(this.innerWidth >991){
        if(menu.classList.contains("active")){
            toggleMenu();
        }

    }
}





const
range = document.getElementById('range'),
tooltip = document.getElementById('tooltip'),
setValue = ()=>{
    const
        newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
        newPosition = 16 - (newValue * 0.32);
    tooltip.innerHTML = `<span>${range.value}</span>`;
    tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
    document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
};
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);



/*
inspiration
https://cz.pinterest.com/pin/830703093790696716/
*/

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 4,
      slideShadows: true
    },
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    breakpoints: {
      560: {
        slidesPerView: 2.5
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
  



  $(document).ready(function() {
    var owl = $('.owl-carousel');
    $('.logoSlider').owlCarousel({
      loop:true,
      autoplay:true,
      margin:15,
      nav:false,
      dots:true,
      responsive:{
  
        0:{
  
          items:2
        },
        768:{
  
          items:3
        },
        1024:{
  
          items:4,
          margin:20
        }
      }
    });
    
  });



  

// Just added bootstrap v4.5 css
// You don't need any other library to run this counter
const animationDuration = 3000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round( animationDuration / frameDuration );

const easeOutQuad = t => t * ( 2 - t );

const animateCountUp = el => {
	let frame = 0;
	const countTo = parseInt( el.innerHTML, 10 );
	
	const counter = setInterval( () => {
		frame++;

		const progress = easeOutQuad( frame / totalFrames );

		const currentCount = Math.round( countTo * progress );


		if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
			el.innerHTML = currentCount;
		}

		if ( frame === totalFrames ) {
			clearInterval( counter );
		}
	}, frameDuration );
};

	const countupEls = document.querySelectorAll( '.timer' );
	countupEls.forEach( animateCountUp );
