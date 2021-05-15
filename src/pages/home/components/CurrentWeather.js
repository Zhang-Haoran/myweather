import styled from "styled-components";
import ReactAnimatedWeather from 'react-animated-weather';

const Title = styled.h1`
  margin-top: 5rem;
  margin-bottom: 0;
  margin-left: 3rem;
  font-size: 3.5rem;
  font-weight: 50;
  font-family: sans-serif;
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
  div{
    display: flex;
    flex-direction: column;
  }
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
  border-radius: 10px;
  font-size: 2rem;
  padding: 1rem 1rem;
`;

//当前天气组件
const CurrentWeather = ({currentWeather}) => {
    const renderWeatherIcon = () => {
        if (currentWeather.weather === "Clear") {
            return (
                <ReactAnimatedWeather icon="CLEAR_DAY" size={128}/>
            )
        } else if (currentWeather.weather === "Clouds") {
            return (
                <ReactAnimatedWeather icon="PARTLY_CLOUDY_DAY" size={128}/>
            )
        } else if (currentWeather.weather === "Drizzle") {
            return (
                <ReactAnimatedWeather icon="RAIN" size={128}/>
            )
        } else if (currentWeather.weather === "Rain") {
            return (
                <ReactAnimatedWeather icon="SLEET" size={128}/>
            )
        } else {
            return (
                <ReactAnimatedWeather icon="CLOUDY" size={128}/>
            )
        }
    }
    return (
        <>
            <Title>{currentWeather.city}</Title>
            <Subtitle>{currentWeather.date}</Subtitle>
            <InfoSection>
                <PrimaryInfo>
                    <span>{renderWeatherIcon()}</span>
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