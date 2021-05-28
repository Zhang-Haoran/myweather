import styled, {css} from "styled-components";

const Description = styled.span`
  margin-left: 3rem;
  font-size: 2rem;
  ${(props) =>
    props.type === "Temperature" &&
    css`
      font-size: 5rem;
    `}
`;

export default Description;