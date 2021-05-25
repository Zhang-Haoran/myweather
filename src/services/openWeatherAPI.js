import axios from "axios";
const APIKey = require("./config.json").APIKey;

//从后端获取当天天气的数据
export async function getCurrentWeatherFromAPI(searchValue) {
  const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=${APIKey}&units=metric`;
  return new Promise((resolve) => {
    axios
      .get(currentWeatherURL)
      .then((result) => {
        const data = result.data;
        const dateString = new Date().toString();
        //处理日期格式
        const date = `${dateString.split(" ")[0]} ${dateString.split(" ")[1]} ${
          dateString.split(" ")[2]
        } ${dateString.split(" ")[3]}`;
        //构造需要的数据
        const currentWeather = {
          city: data.name,
          weatherDescription: data.weather[0].description,
          weather: data.weather[0].main,
          currentTemperature: data.main.temp,
          highestTemperature: data.main.temp_max,
          lowestTemperature: data.main.temp_min,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          date,
        };
        resolve(currentWeather);
      })
      .catch(() => {
        alert("Current Weather Request failed");
      });
  });
}
//从后端获取天气预报的数据
export async function getForecastWeatherFromAPI(searchValue) {
  const forecastWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&APPID=${APIKey}&units=metric`;
  return new Promise((resolve) => {
    axios
      .get(forecastWeatherURL)
      .then((result) => {
        const forecastWeatherArray = [];
        result.data.list.map((eachItem) => {
          //构造需要的数据
          const forecastWeatherObject = {
            date: eachItem.dt_txt.split(" ")[0],
            time: eachItem.dt_txt.split(" ")[1],
            temperature: eachItem.main.temp,
            weather: eachItem.weather[0].main,
            weatherDescription: eachItem.weather[0].description,
          };
          forecastWeatherArray.push(forecastWeatherObject);
          return forecastWeatherArray;
        });
        resolve(forecastWeatherArray);
      })
      .catch(() => {
        alert("Weather Forecast Request failed");
      });
  });
}
