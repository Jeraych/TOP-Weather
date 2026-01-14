import "./style.css";
import { getWeather } from "./api";
import { renderWeather, renderHome } from "./dom";
console.log("Webpack is running");

renderHome();
console.log("Generating home page");

getWeather("Auckland").then(renderWeather);
console.log(getWeather("Auckland"));
console.log("Arranging Auckland weather");

const form = document.getElementById("city-form");
form.addEventListener("submit", async e=> {
    e.preventDefault();
    const city = document.getElementById("city-input").value;
    const weather = await getWeather(city);
    console.log("Arranging " + city + " weather");
    console.log(weather);
    renderWeather(weather);
})