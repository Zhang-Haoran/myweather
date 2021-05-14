import axios from "axios";
const APIKey = require("./config.json").APIKey;

export async function getCurrentWeatherFromAPI(searchValue){
    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=${APIKey}&units=metric`;
    return new Promise((resolve, reject)=>{
        axios.get(currentWeatherURL).then((result)=>{
            const data = result.data;
            const date = new Date().toISOString().toString().split("T")[0];
            const currentWeather = {
                city: data.name,
                country: data.sys.country,
                weatherDescription: data.weather[0].description,
                weather: data.weather[0].main,
                currentTemperature: data.main.temp,
                highestTemperature: data.main.temp_max,
                lowestTemperature: data.main.temp_min,
                cloudsPercentage: data.clouds.all,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                date
            };
            resolve(currentWeather);
        })
    })

}

export async function getForecastWeatherFromAPI(searchValue){
    const forecastWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&APPID=2e9fc10d5be83f64466b524a0669c79d&units=metric`;
    axios.get(forecastWeatherURL).then((result)=>{
        return result;
    })
}
