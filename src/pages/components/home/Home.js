import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import styled from "styled-components";
import Cloudy from "../../../assets/Cloudy.jpg";
import Clear from "../../../assets/Clear.jpg"
import Clouds from "../../../assets/Clouds.jpg"
import Rain from "../../../assets/Rain.jpg"
import { useState } from "react";
import {
  getCurrentWeatherFromAPI,
  getForecastWeatherFromAPI,
} from "../../../services/openWeatherAPI";
import ForecastWeather from "./components/ForecastWeather";

//主页背景图片
const Background = styled.div`
  background: url(${(props) => props.img});
  height: 100vh;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
// 主页组件
const Home = () => {
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
  const handleBackground = () =>{
    const background = {
      Clouds,
      Clear,
      Rain,
      Cloudy
    }
    return currentWeather ? background[currentWeather.weather] : background["Cloudy"]
  }

  //短路计算，当当前天气和天气预报的state不为undefined，显示当前天气和天气预报
  return (
    <Background img={handleBackground}>
        <SearchBar
          value={searchBarValue}
          onChange={handleSearchBarChange}
          submit={handleSubmit}
          isResultFetched={(currentWeather && forecastWeather)}
        />
      {currentWeather && forecastWeather && (
        <CurrentWeather currentWeather={currentWeather} />
      )}
      {currentWeather && forecastWeather && (
        <ForecastWeather forecastWeather={forecastWeather} />
      )}
    </Background>
  );
};
export default Home;
