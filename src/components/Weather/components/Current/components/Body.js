import styled from "styled-components";
import responsive from "../../../../../responsive/responsive";
const Body = styled.div`
  display: flex;
  justify-content: space-around;
  @media ${responsive.md} {
    flex-direction: column;
  }
`;
export default Body;
