import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import styled from "styled-components";
import img from '../../../assets/home.jpg';
import {useState} from "react";
import {getCurrentWeatherFromAPI, getForecastWeatherFromAPI} from "../../../services/openWeatherAPI";
import ForecastWeather from "./components/ForecastWeather";

//主页背景图片
const HomeBackground = styled.div`
  background: url(${props => props.img});
  height: 100vh;
  background-size:100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
// 主页组件
const Home = () => {
    //搜索栏数值
    const [searchBarValue, setSearchBarValue] = useState("");
    //当前天气，从后端获取
    const [currentWeather,setCurrentWeather] = useState(undefined);
    //天气预报，从后端获取
    const [forecastWeather, setForecastWeather] = useState(undefined);
    //当输入框发生变化时
    const handleSearchBarChange = (event) => {
        //改变用户框的state
        setSearchBarValue(event.target.value)
    }
    //提交搜索表单
    const handleSubmit = (event) =>{
        //阻止页面跳转
        event.preventDefault();
        //从后端获取天气数据，异步
        getCurrentWeatherFromAPI(searchBarValue).then((result)=>{
            //改变当天天气的state
            setCurrentWeather(result);
        });
        //从后端获取天气预报，异步
        getForecastWeatherFromAPI(searchBarValue).then((result)=>{
            //改变天气预报的state
            setForecastWeather(result);
        })
    }

    //条件渲染，当当前天气和天气预报的state不为undefined，说明从后端获取了数据
    if (currentWeather !== undefined && forecastWeather !== undefined){
        return(
            // 传入背景图片，需要import
            <HomeBackground img={img}>
                {/*把onchange作为props传给子组件*/}
                <SearchBar value = {searchBarValue} onChange = {handleSearchBarChange} submit = {handleSubmit} isResultFetched={true}/>
                {/*把当前天气的state传入 下一个组件*/}
                <CurrentWeather currentWeather = {currentWeather}/>
                {/*把天气预报state传入 下一个组件*/}
                <ForecastWeather forecastWeather={forecastWeather}/>
            </HomeBackground>
        )
    }
    return(
        <HomeBackground img={img}>
            {/*把onchange作为props传给子组件*/}
            <SearchBar value = {searchBarValue} onChange = {handleSearchBarChange} submit = {handleSubmit} isResultFetched ={false}/>
        </HomeBackground>
    )
}
export default Home;
