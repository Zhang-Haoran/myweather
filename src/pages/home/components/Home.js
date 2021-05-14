import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import styled from "styled-components";
import img from '../../../assets/images/home.jpg';
import {useState} from "react";
import {getCurrentWeatherFromAPI} from "../../../services/openWeatherAPI";

//Home 页面的各组件 组合
const HomeBackground = styled.div`
  background: url(${props => props.img});
  background-size: cover;
  height: 100vh;
`;
const Home = () => {
    const [searchBarValue, setSearchBarValue] = useState("");
    const [currentWeather,setCurrentWeather] = useState({});
    //当输入框发生变化时
    const handleSearchBarChange = (event) => {
        //改变用户框的state
        setSearchBarValue(event.target.value)
    }

    const handleSubmit = (event) =>{
        console.log(searchBarValue);
        event.preventDefault();
        getCurrentWeatherFromAPI(searchBarValue).then((result)=>{
            setCurrentWeather(result);
        })
    }

    return(
        <HomeBackground img={img}>
            {/*把onchange作为props传给子组件*/}
            <SearchBar value = {searchBarValue} onChange = {handleSearchBarChange} submit = {handleSubmit}/>
        </HomeBackground>
    )
}
export default Home;