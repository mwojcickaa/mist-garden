function menu() {
    let menu = document.getElementById("menu")
    let stickyMenuIcon = document.getElementById("hamburger-icon")
    if (menu.style.display === "block") {
        menu.classList.replace("menu-open", "menu-close")
        stickyMenuIcon.classList.remove("sticky-menu-icon")
        stickyMenuIcon.classList += " menu-close"
        setTimeout(function () {
            menu.style.display = "none"
        }, 300)
    } else {
        menu.style.display = "block"
        menu.classList.replace("menu-close", "menu-open")
        stickyMenuIcon.classList.remove("menu-close")
        stickyMenuIcon.classList += " sticky-menu-icon"
    }
}