import styled from "styled-components";
import responsive from "../../../../../../responsive/responsive";

const Text = styled.p`
  font-size: 1.5rem;
  margin: 0.2rem;
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

export default Text;
