import styled, { css } from "styled-components";
import responsive from "../../../../../../responsive/responsive";

const Card = styled.div`
  display: flex;
  border-radius: 1rem;
  font-size: 1.5rem;
  padding: 1rem;
  margin-top: 1rem;

  &:hover {
    box-shadow: 0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  }

  ${(props) =>
    props.type === "Secondary" &&
    css`
      flex-direction: column;
      justify-content: space-around;
      background-color: rgba(255, 255, 255, 0.2);
      font-size: 1.5rem;
      backdrop-filter: blur(10px);
    `}

  @media only screen and ${responsive.xs} {
    font-size: 1rem;
  };
  @media only screen and ${responsive.sm} {
    font-size: 1.5rem;
  };

  @media only screen and ${responsive.md} {
    font-size: 1.5rem;
  };

  @media only screen and ${responsive.lg} {
    font-size: 1.5rem;
  };

  @media only screen and ${responsive.xl} {
    font-size: 1.5rem;
  };
`;

export default Card;
