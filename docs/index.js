////////////Google Map Appearence
const mainWrapper = document.querySelector(`.main-wrapper`);
const GoogleMap = document.querySelector(`.google-map`);
const barInfo = document.querySelector(`.bar-info p:nth-child(1)`);
const cross = document.querySelector(`.map .map-title svg`);
barInfo.addEventListener(`click` , ()=>{
    GoogleMap.style.display = `block`;
    setTimeout(()=>{
        GoogleMap.style.opacity = `1`;
        mainWrapper.style.opacity = '0.5';
    },200)
})
cross.addEventListener(`click`, ()=>{
    GoogleMap.style.opacity = `0`;
    setTimeout(()=>{
        GoogleMap.style.display = `none`;
        mainWrapper.style.opacity = '1';
    },200)
})
//////////////////////////////////

/////////////////////////////////////////////////////////////     Landing Carousel
const landingButtons = document.querySelectorAll(`.landing-btn`);
const landingSlides = document.querySelectorAll(`.landing-slide`);
var counter = 0;

//////////////////AutoSlide
var j = -1;
(function() {
        return function() {   
           if ( ++j < landingButtons.length ) {   
            for (let i = 0; i < landingButtons.length; i++) {
                landingButtons[i].classList.remove(`active-btn`);
                landingSlides[i].style.transition = `all 0.3s ease-in-out`;
                landingSlides[i].classList.remove(`active`);
            }   
            landingButtons[j].classList.add(`active-btn`);
            landingSlides[j].classList.add(`active`);
               setTimeout( arguments.callee, 4000 );    
           }
           if(j == landingButtons.length-1){
               j = -1;
           }
        }();    
})(); 
///////////////////////////

landingButtons.forEach((e , i) => {
    e.addEventListener(`click` , ()=>{
        if(i == landingButtons.length-1){
            j = -1;
        }else{
            j = i;
        }       
        for (let i = 0; i < landingButtons.length; i++) {
            landingButtons[i].classList.remove(`active-btn`);
            landingSlides[i].style.transition = `all 0.3s ease-in-out`;
            landingSlides[i].classList.remove(`active`);
        }
        landingButtons[i].classList.add(`active-btn`);
        landingSlides[i].classList.add(`active`);
    })
});
//////////////////////////////////


////////////////Mobile Menu Button
const burger = document.querySelector(`.burger`);
const subLine = document.querySelector(`.subline`);
const navWrapper = document.querySelector(`.nav-wrapper`);
const menu = document.querySelector(`.menu`);
let check = false;
burger.addEventListener(`click` ,()=>{
    if (check == false){
        navWrapper.style.marginBottom = `330px`;
        menu.style.display = `block`;
        check = true;
        //Animation
        burger.classList.add(`active`);
        setTimeout(()=>{
            burger.classList.add(`rotate`);
        },500);
    }else if (check == true){
        navWrapper.style.marginBottom = `0 `;
        setTimeout(() => {
            menu.style.display = `none`;
        }, 400);        
        check = false;

        //Animation    
        burger.classList.remove(`rotate`); 
        setTimeout(()=>{
            burger.classList.remove(`active`);
        },500);
    }
    
})

//////////////////////////////////////////////
const eye = document.querySelectorAll(`.eye`);
const star = document.querySelectorAll(`.star`);
const popUpEye = document.querySelectorAll(`.pop-up-eye`);
const popUpStar = document.querySelectorAll(`.pop-up-star`);


eye.forEach((e,i) =>{
    e.addEventListener(`mouseover` , ()=>{
        popUpEye[i].style.opacity = `1`;
    })
})
star.forEach((e,i) =>{
    e.addEventListener(`mouseover` , ()=>{
        popUpStar[i].style.opacity = `1`;
    })
})
eye.forEach((e,i) =>{
    e.addEventListener(`mouseout` , ()=>{
        popUpEye[i].style.opacity = `0`;
    })
})
star.forEach((e,i) =>{
    e.addEventListener(`mouseout` , ()=>{
        popUpStar[i].style.opacity = `0`;
    })
})
/////////////////////////////////////////////


//////////////////////////////////////////Brand Carousel
//Dots
const brandsCarouselElements = document.querySelectorAll(`.brands-carousel-element`);
const brandsFirstChild = document.querySelector(`.brands-carousel-element:first-child`);
const brandsLastChild = document.querySelector(`.brands-carousel-element:last-child`);
const brandButton = document.querySelectorAll(`.brand-button`);

const prev = document.querySelector(`#prevbtn`);
const next = document.querySelector(`#nextbtn`);
const carousel = document.querySelector(`.brands-carousel`);


brandsCarouselElements.forEach(e => {
    if(window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 1025px)").matches){
        e.style.margin = `0 16px`;   
        carousel.style.transform = `translateX(${-725 + 145 * -3}px)`
    }
    if(window.matchMedia("(min-width: 0px)").matches && window.matchMedia("(max-width: 425px)").matches){
        carousel.style.transform = `translateX(${193 * -8}px)`;
        e.style.margin = `0 40px`;    }
    if(window.matchMedia("(min-width: 440px)").matches && window.matchMedia("(max-width: 768px)").matches){
        e.style.margin = `0 19px`; 
        carousel.style.transform = `translateX(${-725 + 160 * -3}px)`
    }           
});

brandButton.forEach((e,i) =>{
    e.addEventListener(`click` , ()=>{
        for (let i = 0; i < brandButton.length; i++) {
            brandButton[i].style.backgroundColor = `#000`;
        }
        e.style.backgroundColor = `#a0a0a0`;
        brandsCarouselElements.forEach(e => {
            if(window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 1025px)").matches){
                e.style.transform = `translateX(${145 * -i}px)`;
            }
            if(window.matchMedia("(min-width: 0px)").matches && window.matchMedia("(max-width: 425px)").matches){
                e.style.transform = `translateX(${193 * -i}px)`;
            }
            if(window.matchMedia("(min-width: 440px)").matches && window.matchMedia("(max-width: 768px)").matches){
                e.style.transform = `translateX(${151 * -i}px)`;
            }           
        });
    })
})

//Arrows

var counter = 0;
var size = 131;
var begining = -size * 8;

if(window.matchMedia("(min-width: 1124px)").matches){
    carousel.style.transform = `translateX(${begining}px)`;   
}


next.addEventListener(`click` , ()=>{
        counter++;
        console.log(counter);                 
        carousel.addEventListener('transitionend' , ()=>{
            if(counter >= 12){
                carousel.style.transition = `none`;
            carousel.style.transform = `translateX(${begining}px)`;
            counter = 0;
            }
        })   
            carousel.style.transition = `all 0.3s ease-in-out`;
            carousel.style.transform = `translateX(${-size * counter + begining}px)`;   
})

prev.addEventListener(`click` , ()=>{
    counter--;
    console.log(counter);                 
    carousel.addEventListener('transitionend' , ()=>{
        if(counter <= -8){
        carousel.style.transition = `none`;
        carousel.style.transform = `translateX(${-size * 4 + begining}px)`;
        counter = 4;
        }
    })   
        carousel.style.transition = `all 0.3s ease-in-out`;
        carousel.style.transform = `translateX(${size * -counter + begining}px)`;   
})
////////////////////////////////////////////////////////
