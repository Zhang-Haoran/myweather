//根据天气预报的气象信息 找到对应的天气图标
export const findWeatherIcon = (eachWeather,eachTime) => {
    const hours = eachTime.substr(0,2);
    switch (eachWeather){
        case "Clear":
            return hours >= 18 || hours <= 5 ? "CLEAR_NIGHT": "CLEAR_DAY";
        case "Clouds":
            return hours >= 18 || hours <= 5 ? "PARTLY_CLOUDY_NIGHT": "PARTLY_CLOUDY_DAY";
        case "Drizzle":
            return "RAIN";
        case "Rain" || "Thunderstorm":
            return "SLEET";
        case "Snow":
            return "SNOW";
        case "Fog":
            return "FOG";
        default:
            return "CLOUDY";
    }
    // 维尼老师建议写法
    // return{
    //     "Clear": hours >= 18 || hours <= 5 ? "CLEAR_NIGHT": "CLEAR_DAY",
    //     "Clouds": hours >= 18 || hours <= 5 ? "PARTLY_CLOUDY_NIGHT": "PARTLY_CLOUDY_DAY",
    //     "Drizzle": "RAIN",
    //     "Rain": "SLEET",
    //     "Thunderstorm": "SLEET",
    //     "Snow": "SNOW",
    //     "Fog": "FOG",
    // }[eachWeather]
}
