export function renderWeather(weather) {
    console.log("Rendering weather to DOM");
    document.getElementById("location").textContent = weather.location;
    document.getElementById("weather-icon").src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${weather.icon}.png`;
    document.getElementById("temp").textContent = weather.temp + " °C";
    document.getElementById("conditions").textContent = weather.conditions;
    document.getElementById("temp-range").textContent = weather.tempMin + " °C" + " - " + weather.tempMax + " °C";
    document.getElementById("humidity").innerHTML =
        "<strong>Humidity:</strong> " + weather.humidity;

    document.getElementById("wind").innerHTML =
        "<strong>Wind:</strong> " + weather.wind;

    document.getElementById("sunrise").innerHTML =
        "<strong>Sunrise:</strong> " + weather.sunrise;

    document.getElementById("sunset").innerHTML =
        "<strong>Sunset:</strong> " + weather.sunset;


    const hours = weather.hours;
    const hourly = document.getElementById("hourly-forecast");
    hourly.innerHTML = ""; // clear old data

    hours.forEach(hour => {
        const hourEl = document.createElement("div");
        hourEl.classList.add("hour");

        hourEl.innerHTML = `
          <strong>${hour.datetime.slice(0, 5)}</strong>
          <img
            class="hour-icon"
            src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${hour.icon}.png"
            alt="${hour.conditions}"
          />
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