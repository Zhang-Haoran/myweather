import ReactAnimatedWeather from "react-animated-weather";
import { findWeatherIcon } from "../../../utils/findWeatherIcon";
import { Card, Text, Flex } from "./styles";

const WeatherCard = ({ currentWeather }) => {
  return (
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
  );
};
export default WeatherCard;
