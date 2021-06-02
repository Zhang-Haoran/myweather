import Container from "./components/Container";
import Title from "./components/Title";
import Card from "./components/Card";
import Text from "./components/Text";
import Body from "./components/Body";
import ReactAnimatedWeather from "react-animated-weather";
import {findWeatherIcon} from "../../../../utils/findWeatherIcon";

const Forecast = ({ forecastWeather }) => {
  const renderForecastCard = forecastWeather.map((data) => {
    return (
        <Card key={data.date + data.time}>
          <Text>{data.date.substr(5,5)}</Text>
          <Text>{data.time.substr(0,5)}</Text>
          <ReactAnimatedWeather icon={findWeatherIcon(data.weather,data.time)}/>
          <Text>{data.temperature.toFixed(1)}&#176;</Text>
        </Card>
    );
  });
  return (
    <Container>
      <Title>Forecast</Title>
      <Body>{renderForecastCard}</Body>
    </Container>
  );
};
export default Forecast;
