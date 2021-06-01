import styled from "styled-components";
import responsive from "../../../../../../responsive/responsive";

const ForecastTitle = styled.div`
  font-size: 3rem;
  margin-left: 3rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  @media only screen and ${responsive.xs} {
    font-size: 2rem;
  }
  @media only screen and ${responsive.sm} {
    font-size: 3rem;
  }

  @media only screen and ${responsive.md} {
    font-size: 3rem;
  }

  @media only screen and ${responsive.lg} {
    font-size: 3rem;
  }

  @media only screen and ${responsive.xl} {
    font-size: 3rem;
  } ;
`;

export default ForecastTitle;
