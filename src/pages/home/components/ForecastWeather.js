import styled from "styled-components";

const ForecastWeatherSection = styled.section`
  display: flex;
  overflow-x: scroll;
`;

const ForecastWeatherCard = styled.div`
  flex-shrink: 0;
  background-color: white;
  opacity: 0.5;
  background-size: 10rem 10rem;
  height: 10rem;
  margin: 1rem 1rem;
  &:hover{
    box-shadow: 0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  }
`;
const ForecastWeather = ({forecastWeather})=> {

    const renderForecastCard = forecastWeather.map((each)=>{
        return(
            <ForecastWeatherCard>{each.date} {each.time} {each.weather} {each.temperature}</ForecastWeatherCard>
        )
    })
    return(
        <ForecastWeatherSection>
            {renderForecastCard}
        </ForecastWeatherSection>
    )
}
export default ForecastWeather;