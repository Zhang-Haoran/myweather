import styled, {css} from "styled-components";

const Card = styled.div`
  margin-top: 3rem;
  display: flex;
  border-radius: 1rem;
  font-size: 1.5rem;
  padding: 1rem;

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
`;

export default Card;