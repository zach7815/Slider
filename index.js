let activeButton = document.querySelector(".active-button")
let hiddenButton = document.querySelector(".hidden-button")
let slides = document.querySelectorAll(".carouselImage")



hiddenButton.addEventListener("click",() =>{
   let i = 1;
    hiddenButton.classList.add("hidden-button")
    slides[i].classList.add("hidden")
    i-- 
    slides[i].classList.remove("hidden")
} )

activeButton.addEventListener("click", plusSlide)

function plusSlide(){
    let i = 0;
    hiddenButton.classList.remove("hidden-button")

    slides[i].classList.add("hidden")
    i++
    slides[i].classList.remove("hidden")
   
}