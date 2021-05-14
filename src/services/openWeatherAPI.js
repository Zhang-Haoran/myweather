import axios from "axios";

export async function getCurrentWeatherFromAPI(searchValue){
    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=2e9fc10d5be83f64466b524a0669c79d&units=metric`;
    axios.get(currentWeatherURL).then((result)=>{
        return result;
    })
}

export async function getForecastWeatherFromAPI(searchValue){
    const forecastWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&APPID=2e9fc10d5be83f64466b524a0669c79d&units=metric`;
    axios.get(forecastWeatherURL).then((result)=>{
        return result;
    })
}
