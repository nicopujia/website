document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-theme-button");
    const lightIcon = toggleButton.children.item(0);
    const darkIcon = toggleButton.children.item(1);

    function toggleTheme() {
        lightIcon.classList.toggle("hidden");
        darkIcon.classList.toggle("hidden");
        document.documentElement.classList.toggle("dark");
    }

    const systemThemeIsDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemThemeIsDarkMode) {
        lightIcon.classList.add("hidden");
        darkIcon.classList.remove("hidden");
        document.documentElement.classList.add("dark");
    }

    toggleButton.addEventListener("click", toggleTheme);
})
