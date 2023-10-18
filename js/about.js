import getData from "../js/request.js";
import darkMode from "./dark-mode.js";
darkMode();
const query = window.location.search;
const urlParams = new URLSearchParams(query).get("id");
const api = `https://countries-api-v7sn.onrender.com/countries/slug/${urlParams}`;

const countryInfo = document.querySelector(".country-info");

getData(api)
  .then((data) => {
    about([data]);
  })
  .catch((error) => {
    console.log(error.message);
  });

//! AboutUi
function about(data) {
  data.forEach((item) => {
    const {
      name: { nativeName, common },
      flags: { svg },
      region,
      subregion,
      languages,
      capital,
      borders,
      currencies,
      population,
    } = item;
    const number = population.toLocaleString("en-US");
    console.log(borders);
    countryInfo.innerHTML += `
    <img
    class="country-info__img"
    src="${svg}"
    alt="germany-flag"
    width="560"
    height="400"
  />
  <div class="country-info__content">
    <h2>${common}</h2>
    <ul class="country-info__list">
      <li class="country-info__item">
        <p class="name">
          Native Name:
          <span>${nativeName}</span>
        </p>
        <p class="population">
          Population:
          <span>${number}</span>
        </p>
        <p class="region">
          Region:
          <span>${region}</span>
        </p>
        <p class="sub-region">
          Sub Region:
          <span>${subregion ? subregion : "No subregion"}</span>
        </p>
        <p class="capital">
          Capital:
          <span>${capital[0] ? capital[0] : "No Capital"}</span>
        </p>
      </li>
      <li class="country-info__item">
        <p class="name">
          Top Level Domain:
          <span></span>
        </p>
        <p class="population">
          Currencies:
          <span>${currencies[0] ? currencies : "No currencies"}</span>
        </p>
        <p class="region">
          Languages:
          <span>${languages}</span>
        </p>
      </li>
    </ul>
    <div class="country-info__borders">
      <h3>Border Countries:</h3>
      ${
        borders[0]
          ? borders
              .map((item) => {
                return `
        <a href="./about.html?id=${item.slug}">${item.common}</a>
        `;
              })
              .join("")
          : "No borders"
      }
    </div>
  </div
    `;
  });
}

//?
