//根据天气预报的气象信息 找到对应的天气图标
export const findWeatherIcon = (eachWeather) => {
    switch (eachWeather){
        case "Clear":
            return "CLEAR_DAY";
        case "Clouds":
            return "PARTLY_CLOUDY_DAY";
        case "Drizzle":
            return "RAIN";
        case "Rain":
            return "SLEET";
        default:
            return "CLOUDY"
    }
}
