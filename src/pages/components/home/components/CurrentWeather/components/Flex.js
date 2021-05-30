import styled, { css } from "styled-components";

const Flex = styled.div`
  display: flex;
  ${(props) =>
    props.type === "Space-around" &&
    css`
      justify-content: space-around;
    `}
  ${(props) =>
    props.type === "Vertical" &&
    css`
      flex-direction: column;
    `}
`;

export default Flex;
