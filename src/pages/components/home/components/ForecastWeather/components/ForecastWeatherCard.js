//天气预报卡片，针对每一个预报
import styled from "styled-components";
import responsive from "../../../../../../responsive/responsive";

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
  @media only screen and ${responsive.xs}{
    background-size: 4rem 4rem;
    height: 4rem;
  };
  @media only screen and ${responsive.sm}{
    background-size: 5rem 5rem;
    height: 5rem;
  };

  @media only screen and  ${responsive.md}{
    background-size: 6rem 6rem;
    height: 6rem;
  };

  @media only screen and  ${responsive.lg}{
    background-size: 7rem 7rem;
    height: 7rem;
  };

  @media only screen and  ${responsive.xl}{
    background-size: 8rem 8rem;
    height: 8rem;
  };
`;

export default ForecastWeatherCard;