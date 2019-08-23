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

//////////////////Landing Carousel
const landingButtons = document.querySelectorAll(`.landing-btn`);
const landingSlides = document.querySelectorAll(`.landing-slide`);

landingButtons.forEach((e , i) => {
    e.addEventListener(`click` , ()=>{
        for (let i = 0; i < landingButtons.length; i++) {
            landingButtons[i].classList.remove(`active-btn`);
        }
        landingButtons[i].classList.add(`active-btn`);
        for (let i = 0; i < landingButtons.length; i++) {
            landingSlides[i].style.transition = `all 0.3s ease-in-out`;
            landingSlides[i].classList.remove(`active`);          
        }
        landingSlides[i].classList.add(`active`);
    })
});
//////////////////////////////////


////////////////Mobile Menu Button
const burger = document.querySelector(`.burger`);
const burgerLines = document.querySelectorAll(`.burger .subline`);
const navWrapper = document.querySelector(`.nav-wrapper`);
const menu = document.querySelector(`.menu`);
let check = false;
burger.addEventListener(`click` ,()=>{
    if (check == false){
        navWrapper.style.marginBottom = `330px`;
        menu.style.display = `block`;
        check = true;
        //Animation
        burgerLines.forEach(e =>{
            e.style.transition = `all 0.3s ease-in-out`;
        })
        burgerLines[1].style.display = `none`;
        burgerLines[0].style.top = `50%`;
        burgerLines[0].style.transform = `translate(0,-50%)`;
        burgerLines[2].style.bottom = `50%`;
        burgerLines[2].style.transform = `translate(0,50%)`;
        setTimeout(()=>{
        burgerLines[0].style.transform = `rotate3d(0,0,1,-45deg)`;
        burgerLines[2].style.transform = `rotate3d(0,0,1,45deg)`;
        },500);
    }else if (check == true){
        navWrapper.style.marginBottom = `0 `;
        setTimeout(() => {
            menu.style.display = `none`;
        }, 400);        
        check = false;

        //Animation     
            burgerLines[0].style.transform = `rotate(0deg)`;
            burgerLines[2].style.transform = `rotate(0deg)`;
        setTimeout(()=>{    
        burgerLines[1].style.display = `block`;
        burgerLines[0].style.top = `0`;    
        burgerLines[2].style.bottom = `0`;
        },500);
    }
    
})

//////////////////////////////////



