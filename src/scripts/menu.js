document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const menuIcon = menuButton.children.item(0);
    const crossIcon = menuButton.children.item(1);

    const menu = document.getElementById("nav-links");

    function toggleMenu() {
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");
        menuIcon.classList.toggle("hidden");
        crossIcon.classList.toggle("hidden");
    }

    menuButton.addEventListener("click", toggleMenu);
    menu.addEventListener("click", toggleMenu);
})