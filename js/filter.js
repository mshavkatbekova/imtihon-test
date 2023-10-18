import getData from "./request.js";
import UpdateUI from "./app.js";
const searchName = document.getElementById("searchName");

//!filter
searchName.addEventListener("input", () => {
  const inputValue = searchName.value.toLowerCase().trim();
  console.log(inputValue);
  const cardsItem = document.querySelectorAll(".cards__item");
  const cardsTitle = document.querySelectorAll(".cards__title");
  console.log(cardsTitle);
  cardsTitle.forEach((title, i) => {
    if (title.textContent.toLowerCase().includes(inputValue)) {
      cardsItem[i].style.display = "block";
    } else {
      cardsItem[i].style.display = "none";
    }
  });
});

//!Select
const selectCategory = document.querySelectorAll(".select-category");
const selectTitle = document.querySelector(".selectTitle");
selectCategory.forEach((category) => {
  category.addEventListener("click", () => {
    selectTitle.textContent = category.textContent;
    const cardsItem = document.querySelectorAll(".cards__item");
    const regions = document.querySelectorAll(".region");

    let selectApi;
    regions.forEach((item, i) => {
      if (item.textContent.includes(category.textContent)) {
        cardsItem[i].style.display = "block";
      } else if (category.textContent === "All") {
        selectApi =
          "https://countries-api-v7sn.onrender.com/countries?limit=250";
      } else {
        cardsItem[i].style.display = "none";
      }
    });

    getData(selectApi)
      .then((data) => {
        UpdateUI(data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
});
