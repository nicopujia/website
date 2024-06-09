const menu = document.getElementById("nav-links");
const button = document.getElementById("menu-button");

function toggleMenu() {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    for (const icon of button.children) {
        icon.classList.toggle("hidden")
    }
}

button.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);