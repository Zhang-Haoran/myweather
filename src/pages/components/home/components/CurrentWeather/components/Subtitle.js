import styled from "styled-components";
import responsive from "../../../../../../responsive/responsive";

const Subtitle = styled.h2`
  margin-left: 3rem;
  margin-top: 0;
  @media only screen and ${responsive.xs} {
    font-size: 1rem;
  }
  @media only screen and ${responsive.sm} {
    font-size: 1.5rem;
  }

  @media only screen and ${responsive.md} {
    font-size: 1.5rem;
  }

  @media only screen and ${responsive.lg} {
    font-size: 1.5rem;
  }

  @media only screen and ${responsive.xl} {
    font-size: 1.5rem;
  } ;
`;

export default Subtitle;
