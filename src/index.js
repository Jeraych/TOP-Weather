import "./style.css";
import { getWeather } from "./api";
import { renderWeather } from "./dom";
console.log("Webpack is running");

getWeather("Auckland").then(renderWeather);
console.log("Arranging Auckland weather");