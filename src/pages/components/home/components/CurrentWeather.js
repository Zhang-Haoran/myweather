import styled from "styled-components";
import ReactAnimatedWeather from 'react-animated-weather';
import {findWeatherIcon} from "../../../../utils/findWeatherIcon";

const Title = styled.h1`
  margin-top: 5rem;
  margin-bottom: 0;
  margin-left: 3rem;
  font-size: 3.5rem;
  font-weight: 50;
`;

const Subtitle = styled.h2`
  margin-left: 3rem;
  margin-top: 0;
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-around;
`;

const PrimaryInfo = styled.div`
  margin-top: 3rem;
  display: flex;
  border-radius: 1rem;
  padding: 1rem;

  &:hover {
    box-shadow: 0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  }
`;
const FlexVertical = styled.div`
  display: flex;
  flex-direction: column;
`;

const WeatherDescription = styled.span`
  margin-left: 3rem;
  font-size: 2rem;
`;
const WeatherTemperature = styled.span`
  margin-left: 3rem;
  font-size: 5rem;
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

  &:hover {
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
                    <ReactAnimatedWeather
                        icon={findWeatherIcon(currentWeather.weather, new Date().toTimeString().split(" ")[0])}
                        size={128}/>
                    <FlexVertical>
                        <WeatherTemperature>{currentWeather.currentTemperature}&#176;</WeatherTemperature>
                        <WeatherDescription>{currentWeather.weatherDescription}</WeatherDescription>
                    </FlexVertical>
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
