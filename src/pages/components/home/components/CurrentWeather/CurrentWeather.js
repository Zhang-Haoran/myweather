import ReactAnimatedWeather from "react-animated-weather";
import { findWeatherIcon } from "../../../../../utils/findWeatherIcon";
import highest from "../../../../../assets/highest.png";
import lowest from "../../../../../assets/lowest.png";
import wind from "../../../../../assets/wind.png";
import humidity from "../../../../../assets/humidity.png";
import Flex from "./components/Flex";
import Description from "./components/Description";
import Card from "./components/Card";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Image from "./components/Image";
import {resizeWeatherIcon} from "../../../../../utils/resizeWeatherIcon";
import {useState,useEffect} from "react";

//当前天气组件
const CurrentWeather = ({ currentWeather }) => {
  const [windowSize, setWindowSize] = useState(128);

  //每次渲染运行
  useEffect(()=>{
    const handleResize = () =>{
      setWindowSize(resizeWeatherIcon(window,"current"))
    }
    window.addEventListener('resize',handleResize);
    //当组件卸载时，clean up
    return () => window.removeEventListener('resize', handleResize);

  },[])
  return (
    <>
      <Title>{currentWeather.city}</Title>
      <Subtitle>{currentWeather.date}</Subtitle>
      <Flex type="Space-around">
        <Card type="Primary">
          <ReactAnimatedWeather
            icon={findWeatherIcon(
              currentWeather.weather,
              new Date().toTimeString().split(" ")[0]
            )}
            size={windowSize}
          />
          <Flex type="Vertical">
            <Description type="Temperature">
              {currentWeather.currentTemperature.toFixed(1)}&#176;
            </Description>
            <Description type="Description">
              {currentWeather.weatherDescription}
            </Description>
          </Flex>
        </Card>
        <Card type="Secondary">
          <div>
            <Image src={highest} alt="highest temperature" />
            Highest: {currentWeather.highestTemperature.toFixed(1)}&#176;
            <Image src={humidity} alt="humidity" />
            Humidity: {currentWeather.humidity}%
          </div>
          <div>
            <Image src={lowest} alt="lowest temperature" />
            Lowest: {currentWeather.lowestTemperature.toFixed(1)}&#176;
            <Image src={wind} alt="wind" />
            Wind: {currentWeather.windSpeed}mph
          </div>
        </Card>
      </Flex>
    </>
  );
};
export default CurrentWeather;
