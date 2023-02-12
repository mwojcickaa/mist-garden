let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(slideNumber) {
    slideIndex += slideNumber
    showSlides(slideIndex)
}

function currentSlide(slideNumber) {
    slideIndex = slideNumber
    showSlides(slideIndex)
}

function showSlides(slideNumber) {
    let slides = document.getElementsByClassName("background-color-second-section")
    let dots = document.getElementsByClassName("dot")
    if (slideNumber > slides.length) { slideIndex = 1 }
    if (slideNumber < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }
    slides[slideIndex - 1].style.display = "flex"
    dots[slideIndex - 1].className += " active"
}

function intervalSlide() {
    slideIndex += 1
    showSlides(slideIndex)
}

let myInterval = setInterval(intervalSlide, 3000)

function stopInterval() {
    clearInterval(myInterval)
}

document.getElementById("dot1").addEventListener("click", () => {
    currentSlide(1);
    stopInterval();
})
document.getElementById("dot2").addEventListener("click", () => {
    currentSlide(2);
    stopInterval();
})
document.getElementById("dot3").addEventListener("click", () => {
    currentSlide(3);
    stopInterval();
})

document.getElementById("arrow-right").addEventListener("click", () => {
    plusSlides(1);
    stopInterval();
})
document.getElementById("arrow-left").addEventListener("click", () => {
    plusSlides(-1);
    stopInterval();
})
