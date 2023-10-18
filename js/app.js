import getData from "../js/request.js";
import darkMode from "./dark-mode.js";
darkMode();

const cards = document.querySelector(".cards");

const api = "https://countries-api-v7sn.onrender.com/countries?limit=250";
getData(api)
  .then((data) => UpdateUI(data.data))
  .catch((error) => console.log(error));

//! UpadeteUi
function UpdateUI(countries) {
  cards.innerHTML = "";
  countries.forEach((country) => {
    const {
      name: { common, slug },
      population,
      region,
      capital,
      flags: { svg },
    } = country;
    const number = population.toLocaleString("en-US");
    const li = document.createElement("li");
    li.classList.add("cards__item");
    li.innerHTML += `
    <a href="./about.html?id=${slug}">
    <img
      src="${svg}"
      alt="germany-flag"
      width="267"
      height="160"
    />
    <div class="cards__item-inner">
      <h3 class="cards__title">${common}</h3>
      <p class="population">Population: <span>${number}</span></p>
      <p class="region">Region: <span>${region}</span></p>
      <p class="capital">Capital: <span>${capital}</span></p>
    </div>
    </a>
    `;
    cards.appendChild(li);
  });
}

export default UpdateUI;
