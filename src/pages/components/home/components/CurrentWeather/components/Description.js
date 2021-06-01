import styled, { css } from "styled-components";
import responsive from "../../../../../../responsive/responsive";

const Description = styled.span`
  margin-left: 3rem;
  font-size: 2rem;
  @media only screen and ${responsive.xs} {
    font-size: 1.5rem;
  }
  @media only screen and ${responsive.sm} {
    font-size: 2rem;
  }

  @media only screen and ${responsive.md} {
    font-size: 2rem;
  }

  @media only screen and ${responsive.lg} {
    font-size: 2rem;
  }

  @media only screen and ${responsive.xl} {
    font-size: 2rem;
  }
  ${(props) =>
    props.type === "Temperature" &&
    css`
      @media only screen and ${responsive.xs} {
        font-size: 4rem;
      }
      @media only screen and ${responsive.sm} {
        font-size: 5rem;
      }

      @media only screen and ${responsive.md} {
        font-size: 5rem;
      }

      @media only screen and ${responsive.lg} {
        font-size: 5rem;
      }

      @media only screen and ${responsive.xl} {
        font-size: 5rem;
      } ;
    `}
`;

export default Description;
