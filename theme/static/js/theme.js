const storageKey = 'theme'
const lightTheme = 'light'
const darkTheme = 'dark'
const themeButton = document.getElementById('theme-button')
const autoIcon = themeButton.children.item(0)
const darkIcon = themeButton.children.item(1)
const lightIcon = themeButton.children.item(2)

function setDarkTheme(enabled) {
    document.documentElement.classList.toggle('dark', enabled)
}

function showSavedTheme() {
    let currentIcon

    switch (localStorage.getItem(storageKey)) {
        case lightTheme:
            currentIcon = lightIcon
            setDarkTheme(false)
            break;
        case darkTheme:
            currentIcon = darkIcon
            setDarkTheme(true)
            break;
        default:
            currentIcon = autoIcon
            setDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)
            break;
    }

    for (const icon of themeButton.children) {
        icon.classList.add('hidden')
    }

    currentIcon.classList.remove('hidden')
}

themeButton.addEventListener('click', () => {
    switch (localStorage.getItem(storageKey)) {
        case lightTheme:
            localStorage.setItem(storageKey, null)
            break;
        case darkTheme:
            localStorage.setItem(storageKey, lightTheme)
            break;
        default:
            localStorage.setItem(storageKey, darkTheme)
            break;
    }
    showSavedTheme()
})

showSavedTheme()