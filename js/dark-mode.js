function darkMode() {
  const modeBtn = document.querySelector(".header__dark-mode");
  const modeLocal = localStorage.getItem("mode")
    ? localStorage.getItem("mode")
    : null;

  if (modeLocal) {
    document.body.classList.add("dark-mode");
  }

  modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    modeLocal
      ? localStorage.setItem("mode", "")
      : localStorage.setItem("mode", "dark");
  });
}

export default darkMode;
