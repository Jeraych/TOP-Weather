export async function getWeather(city) {
    console.log("Fetching weather data");
    const response = await fetch("");
    const data = await response.json();
    return data;
}