function menu() {
    let menuLinks = document.getElementById("menu")
    // let animateMenu = document.getElementById("hamburger-menu")
    if (menuLinks.style.display === "block") {
        menuLinks.classList.replace("menu-open", "menu-close")
        setTimeout(function () {
            menuLinks.style.display = "none";
        }, 300)
    } else {
        menuLinks.style.display = "block";
        menuLinks.classList.replace("menu-close", "menu-open")
    }

}

