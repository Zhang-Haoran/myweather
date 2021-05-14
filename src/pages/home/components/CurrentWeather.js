import {useEffect} from "react";
import axios from "axios";

const CurrentWeather = () => {
    useEffect(()=>{
        const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=melbourne&APPID=2e9fc10d5be83f64466b524a0669c79d&units=metric`;
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
        })
    },[])
    return(
        <></>
    )
}
export default CurrentWeather;