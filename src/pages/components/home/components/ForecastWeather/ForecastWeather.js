import ReactAnimatedWeather from "react-animated-weather";
import { findWeatherIcon } from "../../../../../utils/findWeatherIcon";
import ForecastWeatherSection from "./components/ForecastWeatherSection";
import ForecastWeatherCard from "./components/ForecastWeatherCard";
import Text from "./components/Text";
import ForecastTitle from "./components/ForecastTitle";
import { useEffect, useState } from "react";
import { resizeWeatherIcon } from "../../../../../utils/resizeWeatherIcon";

//天气预报组件
const ForecastWeather = ({ forecastWeather }) => {
  const [windowSize, setWindowSize] = useState(32);
  //每次渲染运行
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(resizeWeatherIcon(window, "forecast"));
    };
    window.addEventListener("resize", handleResize);
    //当组件卸载时，clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  //渲染天气预报卡片，针对每一个
  const renderForecastCard = forecastWeather.map((each) => {
    return (
      //每一个都是同样的样式
      <ForecastWeatherCard key={each.date + each.time}>
        <Text>{each.date.substr(5, 5)}</Text>
        <Text>{each.time.substr(0, 5)}</Text>
        <ReactAnimatedWeather
          icon={findWeatherIcon(each.weather, each.time)}
          size={windowSize}
        />
        <Text>{each.temperature.toFixed(1)}&#176;</Text>
      </ForecastWeatherCard>
    );
  });
  return (
    <>
      <ForecastTitle>Forecast</ForecastTitle>
      <ForecastWeatherSection>{renderForecastCard}</ForecastWeatherSection>
    </>
  );
};
export default ForecastWeather;
