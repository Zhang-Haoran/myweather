import styled from "styled-components";
import ReactAnimatedWeather from 'react-animated-weather';
import {findWeatherIcon} from "../../../utils/findWeatherIcon";

const Title = styled.h1`
  margin-top: 5rem;
  margin-bottom: 0;
  margin-left: 3rem;
  font-size: 3.5rem;
  font-weight: 50;
  font-family: cursive;
`;

const Subtitle = styled.h2`
  margin-left: 3rem;
  margin-top: 0;
  font-family: cursive;
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: cursive;
`;

const PrimaryInfo = styled.div`
  margin-top: 3rem;
  display: flex;
  border-radius: 1rem;
  padding: 1rem;
  font-family: cursive;
  div{
    display: flex;
    flex-direction: column;
  }
  &:hover{
    box-shadow: 0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  }
`;

const WeatherDescription = styled.span`
  margin-left: 3rem;
  font-size: 2rem;
  font-family: cursive;
`;
const WeatherTemperature = styled.span`
  margin-left: 3rem;
  font-size: 5rem;
  font-family: cursive;
`;

const SecondaryInfo = styled.span`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  font-size: 1.5rem;
  padding: 1rem;
  font-family: cursive;
  &:hover{
    box-shadow: 0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  }
`;

//当前天气组件
const CurrentWeather = ({currentWeather}) => {
    return (
        <>
            <Title>{currentWeather.city}</Title>
            <Subtitle>{currentWeather.date}</Subtitle>
            <InfoSection>
                <PrimaryInfo>
                    <ReactAnimatedWeather icon={findWeatherIcon(currentWeather.weather,new Date().toTimeString().split(" ")[0])} size={128}/>
                    <div>
                        <WeatherTemperature>{currentWeather.currentTemperature}&#176;</WeatherTemperature>
                        <WeatherDescription>{currentWeather.weatherDescription}</WeatherDescription>
                    </div>
                </PrimaryInfo>
                <SecondaryInfo>
                    <div>Highest: {currentWeather.highestTemperature}&#176; Lowest: {currentWeather.lowestTemperature}&#176;</div>
                    <div>Humidity: {currentWeather.humidity}% Wind: {currentWeather.windSpeed}mph</div>
                </SecondaryInfo>
            </InfoSection>
        </>
    )
}
export default CurrentWeather;
