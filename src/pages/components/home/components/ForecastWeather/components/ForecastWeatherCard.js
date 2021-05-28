//天气预报卡片，针对每一个预报
import styled from "styled-components";

const ForecastWeatherCard = styled.div`
  flex-shrink: 0; //卡片日期的拉升
  background-color: white;
  opacity: 0.5;
  background-size: 10rem 10rem;
  height: 10rem;
  margin: 0 1rem 0 1rem;
  padding: 1rem 2.5rem 2rem 2.5rem;
  text-align: center;
  border-radius: 1rem;

  &:hover {
    box-shadow: 0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  }
`;

export default ForecastWeatherCard;