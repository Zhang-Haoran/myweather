import styled, { css } from "styled-components";
const Card = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  &:hover {
    box-shadow: 0 0.2rem 0.5rem 0 black;
  }
  ${({ type }) =>
    type === "Weather" &&
    css`
      display: flex;
    `}
  ${({ type }) =>
    type === "Wind" &&
    css`
      background-color: rgb(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
    `}
`;
export default Card;
