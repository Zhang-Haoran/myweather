import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import styled from "styled-components";
import img from '../../../assets/images/home.jpg';
import {useState} from "react";

const HomeBackground = styled.div`
  background: url(${props => props.img});
  background-size: cover;
  height: 100vh;
`;
const Home = () => {
    const [searchBarValue, setSearchBarValue] = useState("");
    const handleSearchBarChange = (event) => {
        setSearchBarValue(event.target.value)
    }
    console.log(searchBarValue)
    return(
        <HomeBackground img={img}>
            <SearchBar value = {searchBarValue} onChange = {(event) => handleSearchBarChange(event)}/>
            <CurrentWeather/>
        </HomeBackground>
    )
}
export default Home;