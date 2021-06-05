import styled from "styled-components";
//主页背景图片
export const Container = styled.div`
  background: url(${({ img }) => img}) center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  @media (max-height: 718px) {
    height: 100%;
  }
  @media (max-width: 509px) {
    width: 100vh;
  }
`;
