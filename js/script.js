window.onload = function() {
    /* Menu button*/
    let tlacitko = document.getElementById("click");    
    tlacitko.addEventListener("click", skrytOdkryt);

    /* SLide show */
    showSlides();
}

/* Menu button */

function skrytOdkryt() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("myMenu");
}

/* Slide show */
let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide-show");
    let dots = document.getElementsByClassName("dot");

    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
   
    setTimeout(showSlides, 1500); 
}