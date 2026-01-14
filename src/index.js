import "./style.css";
import { getWeather } from "./api";
import { renderWeather, renderHome } from "./dom";
console.log("Webpack is running");
renderHome();
console.log("Generating home page");
// getWeather("Auckland").then(renderWeather);
console.log(getWeather("Auckland"));
console.log("Arranging Auckland weather");