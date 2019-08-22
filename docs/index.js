////////////Google Map Appearence
const mainWrapper = document.querySelector(`.main-wrapper`);
const GoogleMap = document.querySelector(`.google-map`);
const barInfo = document.querySelector(`.bar-info p:nth-child(1)`);
const cross = document.querySelector(`.map .map-title svg`);
console.log(cross);
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
const navWrapper = document.querySelector(`.nav-wrapper`);
const menu = document.querySelector(`.menu`);
let check = false;
burger.addEventListener(`click` ,()=>{
    if (check == false){
        navWrapper.style.marginBottom = `330px`;
        menu.style.display = `block`;
        check = true;
    }else if (check == true){
        navWrapper.style.marginBottom = `0 `;
        setTimeout(() => {
            menu.style.display = `none`;
        }, 400);        
        check = false;
    }
    
})
//////////////////////////////////



