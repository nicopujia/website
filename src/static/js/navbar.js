const navbar = document.getElementById('navbar')
const mobileMenu = document.getElementById('mobile-menu')
const mobileMenuButton = document.getElementById('mobile-menu-button')

mobileMenuButton.addEventListener('click', () => {
    navbar.classList.remove('motion-safe:animate-fade-in-after-draw-svg-path')
    navbar.classList.toggle('backdrop-blur-lg')
    mobileMenu.classList.toggle('backdrop-blur-lg')
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
    for (const icon of mobileMenuButton.children) {
        icon.classList.toggle('hidden')
    }
})