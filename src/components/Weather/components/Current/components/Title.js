import styled, { css } from "styled-components";
const Title = styled.h2`
  margin: 0;
  ${({ type }) =>
    type === "Title" &&
    css`
      font-size: 3rem;
    `}
  ${({ type }) =>
    type === "Subtitle" &&
    css`
      font-size: 1.5rem;
    `}
`;
export default Title;
