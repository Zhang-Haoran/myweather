import styled from "styled-components";
const Title = styled.h1`
  
`;

const Subtitle = styled.h2`
  
`;

const PrimaryInfo = styled.h3`
  
`;

const SecondaryInfo = styled.h4`
  
`;


const CurrentWeather = ({currentWeather}) => {
    return (
        <>
            <Title>{currentWeather.city}</Title>
            <Subtitle>{currentWeather.date}</Subtitle>
            <PrimaryInfo>{currentWeather.weather} {currentWeather.weatherDescription} {currentWeather.currentTemperature}</PrimaryInfo>
            <SecondaryInfo>
                {currentWeather.highestTemperature}
                {currentWeather.lowestTemperature}
                {currentWeather.humidity}
                {currentWeather.windSpeed}
            </SecondaryInfo>
        </>
    )
}
export default CurrentWeather;