import styled from "styled-components";
import ReactAnimatedWeather from "react-animated-weather";
import {findWeatherIcon} from "../../../../utils/findWeatherIcon";
//天气预报组件样式
const ForecastWeatherSection = styled.section`
  display: flex;
  margin-bottom: 1rem;
  overflow-x: scroll;
`;

//天气预报卡片，针对每一个预报
const ForecastWeatherCard = styled.div`
  flex-shrink: 0; //卡片日期的拉升
  background-color: white;
  opacity: 0.5;
  background-size: 10rem 10rem;
  height: 10rem;
  margin: 0 1rem 0 1rem;
  padding: 1rem 2.5rem 2rem 2.5rem;
  text-align: center;

  &:hover {
    box-shadow: 0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem;
`;

const ForecastTitle = styled.div`
  font-size: 3rem;
  margin-left: 3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
//天气预报组件
const ForecastWeather = ({forecastWeather}) => {
    //渲染天气预报卡片，针对每一个
    const renderForecastCard = forecastWeather.map((each) => {
        return (
            //每一个都是同样的样式
            <ForecastWeatherCard key={each.date + each.time}>
                <Text>{each.date.substr(5, 5)}</Text>
                <Text>{each.time.substr(0, 5)}</Text>
                <ReactAnimatedWeather icon={findWeatherIcon(each.weather, each.time)} size={64}/>
                <Text>{each.temperature}&#176;</Text>
            </ForecastWeatherCard>
        )
    })
    return (
        <>
            <ForecastTitle>Forecast</ForecastTitle>
            <ForecastWeatherSection>
                {renderForecastCard}
            </ForecastWeatherSection>
        </>

    )
}
export default ForecastWeather;
