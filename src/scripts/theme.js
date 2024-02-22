document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-theme-button");
    const lightIcon = document.getElementById("light-theme-icon");
    const darkIcon = document.getElementById("dark-theme-icon");

    function setDarkMode(enabled) {
        if (enabled) {
            lightIcon.classList.add("hidden");
            darkIcon.classList.remove("hidden");
            document.documentElement.classList.remove("dark");
        } else {
            lightIcon.classList.remove("hidden");
            darkIcon.classList.add("hidden");
            document.documentElement.classList.add("dark");

        }
    }

    setDarkMode(!window.matchMedia('(prefers-color-scheme: dark)').matches);

    toggleButton.addEventListener("change", () => {
        setDarkMode(toggleButton.checked);
    })
})
