import ReactAnimatedWeather from "react-animated-weather";
import {findWeatherIcon} from "../../utils/findWeatherIcon";
import {Body, Card, Container, Text, Title} from "./styles";


const Forecast = ({forecastWeather}) => {
    return (
        <Container>
            <Title>Forecast</Title>
            <Body>
                {forecastWeather.map((data) => {
                return (
                    <Card key={data.date + data.time}>
                        <Text>{data.date.substr(5, 5)}</Text>
                        <Text>{data.time.substr(0, 5)}</Text>
                        <ReactAnimatedWeather icon={findWeatherIcon(data.weather, data.time)}/>
                        <Text>{data.temperature.toFixed(1)}&#176;</Text>
                    </Card>
                );
            })}
            </Body>
        </Container>
    );
};
export default Forecast;
