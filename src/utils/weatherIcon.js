export const findWeatherIcon = (eachWeather) => {
    if (eachWeather === "Clear") {
        return "CLEAR_DAY"
    } else if (eachWeather=== "Clouds") {
        return "PARTLY_CLOUDY_DAY"
    } else if (eachWeather === "Drizzle") {
        return "RAIN"
    } else if (eachWeather === "Rain") {
        return "SLEET"
    } else {
        return "CLOUDY"
    }
}