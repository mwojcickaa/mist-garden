function menu() {
    // debugger
    let menu = document.getElementById("menu")
    let stickyMenuIcon = document.getElementById("hamburger-icon")
    let hamburger = document.getElementById("hamburger")
    let hamburgerInput = document.getElementById("checkbox")
    if (menu.style.display === "block") {
        menu.classList.replace("menu-open", "menu-close")
        stickyMenuIcon.classList.remove("sticky-menu-icon")
        stickyMenuIcon.classList += " menu-close"
        hamburger.classList.remove("sticky-hamburger")
        hamburgerInput.classList.remove("sticky-hamburger")
        hamburgerInput.classList += " input"
        setTimeout(function () {
            menu.style.display = "none"
        }, 300)
    } else {
        menu.style.display = "block"
        menu.classList.replace("menu-close", "menu-open")
        stickyMenuIcon.classList.remove("menu-close")
        stickyMenuIcon.classList += " sticky-menu-icon"
        hamburger.classList += " sticky-hamburger"
        hamburgerInput.classList.remove("input")
        hamburgerInput.classList += " sticky-hamburger"
    }
}

document.getElementById("hamburger-icon").addEventListener("click", menu)