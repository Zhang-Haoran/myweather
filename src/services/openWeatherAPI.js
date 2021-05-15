import axios from "axios";
const APIKey = require("./config.json").APIKey;

//GET current weather data from openWeather API
export async function getCurrentWeatherFromAPI(searchValue){
    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=${APIKey}&units=metric`;
    return new Promise((resolve)=>{
        axios.get(currentWeatherURL).then((result)=>{
            const data = result.data;
            const date = new Date().toISOString().toString().split("T")[0];
            const currentWeather = {
                city: data.name,
                weatherDescription: data.weather[0].description,
                weather: data.weather[0].main,
                currentTemperature: data.main.temp,
                highestTemperature: data.main.temp_max,
                lowestTemperature: data.main.temp_min,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                date
            };
            resolve(currentWeather);
        })
    })

}

export async function getForecastWeatherFromAPI(searchValue){
    const forecastWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&APPID=${APIKey}&units=metric`;
    return new Promise(((resolve) => {
        axios.get(forecastWeatherURL).then((result)=>{
            const forecastWeatherArray = [];
            for (let each of result.data.list){
                const forecastWeatherObject = {
                    date:each.dt_txt.split(" ")[0],
                    time:each.dt_txt.split(" ")[1],
                    temperature: each.main.temp,
                    weather: each.weather[0].main,
                    weatherDescription: each.weather[0].description
                };
                forecastWeatherArray.push(forecastWeatherObject);
            }
            resolve(forecastWeatherArray);
        })
    }))
}

