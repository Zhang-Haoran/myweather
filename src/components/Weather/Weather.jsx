import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Current from "./components/Current";
import Cloudy from "../../assets/images/Cloudy.jpg";
import Clear from "../../assets/images/Clear.jpg";
import Clouds from "../../assets/images/Clouds.jpg";
import Rain from "../../assets/images/Rain.jpg";
import {
  getCurrentWeatherFromAPI,
  getForecastWeatherFromAPI,
} from "../../services/openWeatherAPI";
import Forecast from "./components/Forecast";
import { Container } from "./styles";

// 主页组件
const Weather = () => {
  //搜索栏数值
  const [searchBarValue, setSearchBarValue] = useState("");
  //当前天气，从后端获取
  const [currentWeather, setCurrentWeather] = useState(undefined);
  //天气预报，从后端获取
  const [forecastWeather, setForecastWeather] = useState(undefined);
  //当输入框发生变化时
  const handleSearchBarChange = (event) => {
    //改变用户框的state
    setSearchBarValue(event.target.value);
  };
  //提交搜索表单
  const handleSubmit = (event) => {
    //阻止页面跳转
    event.preventDefault();
    //从后端获取天气数据，异步
    getCurrentWeatherFromAPI(searchBarValue).then((result) => {
      //改变当天天气的state
      setCurrentWeather(result);
    });
    //从后端获取天气预报，异步
    getForecastWeatherFromAPI(searchBarValue).then((result) => {
      //改变天气预报的state
      setForecastWeather(result);
    });
  };

  //根据当前天气背景切换
  const handleBackground = () => {
    const background = {
      Clouds,
      Clear,
      Rain,
      Cloudy,
    };
    return (
      (currentWeather && background[currentWeather.weather]) ||
      background["Cloudy"]
    );
  };

  //短路计算，当当前天气和天气预报的state不为undefined，显示当前天气和天气预报
  return (
    <Container img={handleBackground}>
      <SearchBar
        value={searchBarValue}
        onChange={handleSearchBarChange}
        submit={handleSubmit}
        isResultFetched={currentWeather && forecastWeather}
      />
      {currentWeather && forecastWeather && (
        <Current currentWeather={currentWeather} />
      )}
      {currentWeather && forecastWeather && (
        <Forecast forecastWeather={forecastWeather} />
      )}
    </Container>
  );
};
export default Weather;
