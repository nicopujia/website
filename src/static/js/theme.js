const storageKey = "theme";
const lightTheme = "light";
const darkTheme = "dark";
const systemTheme = "system";
const themeBtn = document.getElementById("theme-btn");
const autoIcon = themeBtn.children.item(0);
const darkIcon = themeBtn.children.item(1);
const lightIcon = themeBtn.children.item(2);

function setDarkTheme(enabled) {
  document.documentElement.classList.toggle("dark", enabled);
}

function showSavedTheme() {
  let currentIcon;

  switch (localStorage.getItem(storageKey)) {
    case lightTheme:
      currentIcon = lightIcon;
      setDarkTheme(false);
      break;
    case darkTheme:
      currentIcon = darkIcon;
      setDarkTheme(true);
      break;
    default:
      currentIcon = autoIcon;
      setDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
      break;
  }

  for (const icon of themeBtn.children) {
    icon.classList.add("hidden");
  }

  currentIcon.classList.remove("hidden");
}

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
darkModeMediaQuery.addEventListener("change", (e) => {
  console.log(
    "localStorage.getItem(storageKey)",
    localStorage.getItem(storageKey)
  );
  if (localStorage.getItem(storageKey) === systemTheme) {
    setDarkTheme(e.matches);
  }
});

themeBtn.addEventListener("click", () => {
  switch (localStorage.getItem(storageKey)) {
    case lightTheme:
      localStorage.setItem(storageKey, systemTheme);
      break;
    case darkTheme:
      localStorage.setItem(storageKey, lightTheme);
      break;
    default:
      localStorage.setItem(storageKey, darkTheme);
      break;
  }
  showSavedTheme();
});

showSavedTheme();
