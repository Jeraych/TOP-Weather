export function renderWeather(weather) {
    console.log("Rendering weather to DOM");
    document.getElementById("location").textContent = weather.location;
    // document.getElementById("weather-icon").src = weather.icon;
    document.getElementById("temp").textContent = weather.temp + " °C";
    document.getElementById("conditions").textContent = weather.conditions;
    document.getElementById("temp-range").textContent = weather.tempMin + " °C" + " - " + weather.tempMax + " °C";
    document.getElementById("humidity").textContent = "Humidity: " + weather.humidity;
    document.getElementById("wind").textContent = "Wind: " + weather.wind;
    document.getElementById("sunrise").textContent = "Sunrise: " + weather.sunrise;
    document.getElementById("sunset").textContent = "Sunset: " + weather.sunset;

    const hours = weather.hours;
    const hourly = document.getElementById("hourly-forecast");
    hourly.innerHTML = ""; // clear old data

    hours.forEach(hour => {
        const hourEl = document.createElement("div");
        hourEl.classList.add("hour");

        hourEl.innerHTML = `
          <strong>${hour.datetime.slice(0, 5)}</strong>
          <div>${hour.temp}°C</div>
          <div>${hour.conditions}</div>
        `;


        hourly.appendChild(hourEl);
    });
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