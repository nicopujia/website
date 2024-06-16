const navbar = document.getElementById('navbar')
const links = document.getElementById('navbar-links')
const menuBtn = document.getElementById('navbar-menu-btn')

menuBtn.addEventListener('click', () => {
    navbar.classList.remove('motion-safe:animate-fade-in-after-draw-svg-path')
    navbar.classList.remove('motion-safe:opacity-0')
    navbar.classList.toggle('backdrop-blur-lg')
    links.classList.toggle('backdrop-blur-lg')
    links.classList.toggle('hidden')
    links.classList.toggle('flex')
    for (const icon of menuBtn.children) {
        icon.classList.toggle('hidden')
    }
})