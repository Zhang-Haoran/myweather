import styled, {css} from "styled-components";
import ReactAnimatedWeather from 'react-animated-weather';
import {findWeatherIcon} from "../../../../utils/findWeatherIcon";
import highest from "../../../../assets/highest.png";
import lowest from "../../../../assets/lowest.png";
import wind from "../../../../assets/wind.png";
import humidity from "../../../../assets/humidity.png";

const Flex = styled.div`
  display: flex;
  ${(props) => props.type === "Space-around" && css`
    justify-content: space-around;
  `}
  ${(props) => props.type === "Vertical" && css`
    flex-direction: column;
  `}
`;

const Description = styled.span`
  margin-left: 3rem;
  font-size: 2rem;
  ${(props) => props.type === "Temperature" && css`
    font-size: 5rem;
  `}
`;

const Card = styled.div`
  margin-top: 3rem;
  display: flex;
  border-radius: 1rem;
  font-size: 1.5rem;
  padding: 1rem;

  &:hover {
    box-shadow: 0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  }

  ${(props) => props.type === "Secondary" && css`
    flex-direction: column;
    justify-content: space-around;
    background-color: rgba(255, 255, 255, 0.2);
    font-size: 1.5rem;
    backdrop-filter: blur(10px);
  `}
`;

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
const Image = styled.img`
  height: 1.5rem;
  margin: 0.5rem;
`;

//当前天气组件
const CurrentWeather = ({currentWeather}) => {
    return (
        <>
            <Title>{currentWeather.city}</Title>
            <Subtitle>{currentWeather.date}</Subtitle>
            <Flex type="Space-around">
                <Card type="Primary">
                    <ReactAnimatedWeather
                        icon={findWeatherIcon(currentWeather.weather, new Date().toTimeString().split(" ")[0])}
                        size={128}/>
                    <Flex type="Vertical">
                        <Description type="Temperature">{currentWeather.currentTemperature}&#176;</Description>
                        <Description type="Description">{currentWeather.weatherDescription}</Description>
                    </Flex>
                </Card>
                <Card type="Secondary">
                    <div>
                        <Image src={highest} alt="highest temperature"/>Highest: {currentWeather.highestTemperature}&#176;
                        <Image src={humidity} alt="humidity"/>Humidity: {currentWeather.humidity}%
                    </div>
                    <div>
                        <Image src={lowest} alt="lowest temperature"/>Lowest: {currentWeather.lowestTemperature}&#176;
                        <Image src={wind} alt="wind"/>Wind: {currentWeather.windSpeed}mph
                    </div>
                </Card>
            </Flex>
        </>
    )
}
export default CurrentWeather;
