let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("background-color-second-section")
    let dots = document.getElementsByClassName("dot")
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length; i++ }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }
    slides[slideIndex - 1].style.display = "grid"
    dots[slideIndex - 1].className += " active"
}

function slider() {
    let slides = document.getElementsByClassName("background-color-second-section")
    slides.classList.add("animate")
    setTimeout(() => slides.classList.remove("animate"), 1000)
}
document.getElementsByClassName("background-color-second-section").addEventListener("click", slider())

function menu() {
    let menuLinks = document.getElementsByClassName("menu")
    Array.from(menuLinks).forEach((menuLinks) => {
        if (menuLinks.style.display === "block") {
            menuLinks.style.display = "none";
        } else {
            menuLinks.style.display = "block";
        }
    })
}
document.getElementsByClassName("menu-ikon").addEventListener("click", menu())


document.getElementById("year").innerHTML = new Date().getFullYear();