import styled from "styled-components";
import responsive from "../../../../../../responsive/responsive";

const Title = styled.h1`
  margin-top: 4rem;
  margin-bottom: 0;
  margin-left: 3rem;
  font-size: 3.5rem;
  font-weight: 50;
  @media only screen and ${responsive.xs} {
    font-size: 3rem;
    margin-top: 0.5rem;
  }

  @media only screen and ${responsive.sm} {
    font-size: 3.5rem;
    margin-top: 1rem;
  }

  @media only screen and ${responsive.md} {
    font-size: 3.5rem;
    margin-top: 2rem;
  }

  @media only screen and ${responsive.lg} {
    font-size: 3.5rem;
    margin-top: 3rem;
  }

  @media only screen and ${responsive.xl} {
    font-size: 3.5rem;
    margin-top: 4rem;
  } ;
`;

export default Title;
