document.addEventListener('DOMContentLoaded', () => {
    const openMenuButton = document.getElementById('open-menu-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
    }

    openMenuButton.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
})