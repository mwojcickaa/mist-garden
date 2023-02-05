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

function showNavbar() {
    document.getElementsByClassName("menu").className = "show"
}