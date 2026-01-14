export async function getWeather(city) {
    console.log("Fetching weather data");
    const API_KEY = '54PRMHDBPCVUKVUV2FM9FVFNY';
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?key=" + API_KEY);
    const data = await response.json();
    const today = data.days[0];
    return {
        location: data.address,
        temp: today.temp,
        tempMax: today.tempmax,
        tempMin: today.tempmin,
        conditions: today.conditions,
        icon: today.icon,
        humidity: today.humidity,
        wind: today.windspeed,
    };
}