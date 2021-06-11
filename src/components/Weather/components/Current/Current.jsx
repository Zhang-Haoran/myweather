import { Body, Container, Title } from "./styles";
import WeatherCard from "./components/WeatherCard";
import WindCard from "./components/WindCard";

const Current = ({ currentWeather }) => {
  return (
    <Container>
      <Title type="Title">
        {currentWeather.city},{currentWeather.country}
      </Title>
      <Title type="Subtitle">{currentWeather.date}</Title>
      <Body>
        <WeatherCard currentWeather={currentWeather} />
        <WindCard currentWeather={currentWeather} />
      </Body>
    </Container>
  );
};
export default Current;
