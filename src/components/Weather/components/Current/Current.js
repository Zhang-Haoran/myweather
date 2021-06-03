import ReactAnimatedWeather from "react-animated-weather";
import { findWeatherIcon } from "../../../../utils/findWeatherIcon";
import highest from "../../../../assets/highest.png";
import lowest from "../../../../assets/lowest.png";
import wind from "../../../../assets/wind.png";
import humidity from "../../../../assets/humidity.png";
import Container from "./components/Container";
import Title from "./components/Title";
import Body from "./components/Body";
import Image from "./components/Image";
import Text from "./components/Text";
import Card from "./components/Card";
import Flex from "./components/Flex";

const Current = ({ currentWeather }) => {
  return (
    <Container>
      <Title type="Title">
        {currentWeather.city},{currentWeather.country}
      </Title>
      <Title type="Subtitle">{currentWeather.date}</Title>
      <Body>
        <Card type="Weather">
          <ReactAnimatedWeather
            icon={findWeatherIcon(
              currentWeather.weather,
              new Date().toTimeString().split(" ")[0]
            )}
            size={204}
          />
          <Flex>
            <Text type="Temperature">
              {currentWeather.currentTemperature.toFixed(1)}&#176;
            </Text>
            <Text type="Weather">{currentWeather.weatherDescription}</Text>
          </Flex>
        </Card>
        <Card type="Wind">
          <Text type="Other">
            <Image src={highest} />
            Highest: {currentWeather.highestTemperature.toFixed(1)}&#176;
          </Text>
          <Text type="Other">
            <Image src={lowest} />
            Lowest: {currentWeather.lowestTemperature.toFixed(1)}&#176;
          </Text>
          <Text type="Other">
            <Image src={humidity} />
            Humidity: {currentWeather.humidity}%
          </Text>
          <Text type="Other">
            <Image src={wind} />
            Wind: {currentWeather.windSpeed}mph
          </Text>
        </Card>
      </Body>
    </Container>
  );
};
export default Current;
