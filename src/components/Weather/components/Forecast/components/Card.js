import styled from "styled-components";
const Card = styled.div`
  background-color: white;
  opacity: 0.5;
  margin: 0 1.5rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  flex-shrink: 0;
  &:hover {
    box-shadow: 0 0.2rem 0.5rem 0 black;
  }
`;
export default Card;
