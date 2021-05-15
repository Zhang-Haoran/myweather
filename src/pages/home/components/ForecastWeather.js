import styled from "styled-components";
//天气预报组件样式
const ForecastWeatherSection = styled.section`
  display: flex;
  overflow-x: scroll;
`;
//天气预报卡片，针对每一个预报
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
//天气预报组件
const ForecastWeather = ({forecastWeather})=> {
    //渲染天气预报卡片，针对每一个
    const renderForecastCard = forecastWeather.map((each)=>{
        return(
            //每一个都是同样的样式
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