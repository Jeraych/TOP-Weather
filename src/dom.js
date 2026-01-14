export function renderWeather(weather) {
    console.log("Rendering weather to DOM")
}

export function renderHome() {
    const app = document.getElementById("app");

    const header = document.createElement("header");
    header.innerHTML = `
    <h1>Weather App</h1>
    <p>Check the weather for your city</p>`;
    app.appendChild(header);

    const form = document.createElement("form");
    form.id = "city-form";
    form.innerHTML = `
    <input type="text" id="city-input" placeholder="Enter city name" required autocomplete="off" />
    <button type="submit">Get Weather</button>`;
    app.appendChild(form);

    const display = document.createElement("section");
    display.innerHTML = `
    <h2 id="location"></h2>
    <div id="current-weather">
      <img id="weather-icon" src="" alt="Weather Icon" />
      <p id="temp"></p>
      <p id="conditions"></p>
      <p id="temp-range"></p>
      <p id="humidity"></p>
      <p id="wind"></p>
      <p id="sunrise"></p>
      <p id="sunset"></p>
    </div>

    <div id="hourly-forecast"></div>`;
    app.appendChild(display);
}