import styled, { css } from "styled-components";
const Text = styled.p`
  margin: 1rem;
  ${({ type }) =>
    type === "Weather" &&
    css`
      font-size: 2rem;
    `}
  ${({ type }) =>
    type === "Temperature" &&
    css`
      font-size: 5rem;
    `}
  ${({ type }) =>
    type === "Other" &&
    css`
      font-size: 1.75rem;
    `}
`;
export default Text;
