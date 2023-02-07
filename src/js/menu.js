function menu() {
    let menuLinks = document.getElementById("menu")
    let stickyIkon = document.getElementById("hamburger-ikon")
    if (menuLinks.style.display === "block") {
        menuLinks.classList.replace("menu-open", "menu-close")
        stickyIkon.classList.replace("sticky-menu-ikon", "menu-ikon")
        setTimeout(function () {
            menuLinks.style.display = "none";
        }, 300)
    } else {
        menuLinks.style.display = "block";
        menuLinks.classList.replace("menu-close", "menu-open")
        stickyIkon.classList.replace("menu-ikon", "sticky-menu-ikon")
    }

}

