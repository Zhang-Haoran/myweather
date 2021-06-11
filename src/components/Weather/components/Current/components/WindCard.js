import highest from "../../../../../assets/images/highest.png";
import lowest from "../../../../../assets/images/lowest.png";
import wind from "../../../../../assets/images/wind.png";
import humidity from "../../../../../assets/images/humidity.png";
import { Card, Text, Image } from "./styles";

const WindCard = ({ currentWeather }) => {
  return (
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
  );
};
export default WindCard;
