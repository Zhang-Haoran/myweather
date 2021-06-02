import styled from "styled-components";
import responsive from "../../../../../responsive/responsive";
//搜索区域样式
const Container = styled.form`
  background: white;
  opacity: 65%;
  position: relative;
  top: ${({ isResultFetched }) => (isResultFetched ? "5%" : "40%")};
  width: 30rem;
  min-height: 3rem;
  margin: 0 auto;
  border-radius: 20px;
  font-family: cursive;
  transition: 0.1s;
  @media ${responsive.md}{
    margin-bottom: 1.5rem;
  }
`;

export default Container;
