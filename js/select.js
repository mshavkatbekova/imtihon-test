const searchSelect = document.querySelector(".search__select");
const selectCategories = document.querySelector(".select-categories");

searchSelect.addEventListener("click", () => {
  selectCategories.classList.toggle("hidden");
});
