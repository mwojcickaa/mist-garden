let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(slideNumber) {
    slideIndex += slideNumber
    showSlides(slideIndex)
    stopInterval()
}

function currentSlide(slideNumber) {
    slideIndex = slideNumber
    showSlides(slideIndex)
    stopInterval()
}

function showSlides(slideNumber) {
    let slides = document.getElementsByClassName("background-color-second-section")
    let dots = document.getElementsByClassName("dot")
    if (slideNumber > slides.length) {
        slideIndex = 1
    }
    else if (slideNumber < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
        dots[i].className = dots[i].className.replace("active", "")
    }
    slides[slideIndex - 1].style.display = "flex"
    dots[slideIndex - 1].className += " active"
}

function intervalSlide() {
    slideIndex += 1
    showSlides(slideIndex)
}

let myInterval = setInterval(intervalSlide, 5000)

function stopInterval() {
    clearInterval(myInterval)
}

document.getElementById("dot1").addEventListener("click", () => currentSlide(1))
document.getElementById("dot2").addEventListener("click", () => currentSlide(2))
document.getElementById("dot3").addEventListener("click", () => currentSlide(3))

document.getElementById("arrow-right").addEventListener("click", () => plusSlides(1))
document.getElementById("arrow-left").addEventListener("click", () => plusSlides(-1))
