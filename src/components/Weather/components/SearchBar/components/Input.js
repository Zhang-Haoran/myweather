//搜索栏输入样式
import styled from "styled-components";

const Input = styled.input`
  width: 90%;
  position: absolute;
  left: 10%;
  top: 0.2rem;
  border: none;
  height: 2.5rem;
  border-radius: 20px;
  font-family: cursive;
  font-size: 1.5rem;
  &:focus {
    outline: none;
  }
`;

export default Input;
