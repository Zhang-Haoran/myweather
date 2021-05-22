import styled from "styled-components";
import {SearchOutlined} from "@ant-design/icons";
//搜索区域样式
const SearchSection = styled.form`
  background: white;
  position: relative;
  top: 2rem;
  width: 40rem;
  min-height: 3rem;
  margin: 0 auto;
  border-radius: 20px;
  font-family: cursive;
`;
//搜索栏输入样式
const SearchInput = styled.input`
  width: 90%;
  position: absolute;
  top: 0.8rem;
  left: 8%;
  border: none;
  height: 1.5rem;
  border-radius: 20px;
  font-family: cursive;
`;
//搜索图标样式
const SearchIcon = styled.span`
  position: absolute;
  top: 0.8rem;
  left: 1rem;
  height: 2rem;
  width: 2rem;
  font-size: 1.5rem;
  font-family: cursive;
`;

// 参数从父组件传入
const SearchBar = ({value,onChange,submit}) => {
    return (
        <SearchSection onSubmit={submit}>
            <SearchIcon>
                <SearchOutlined/>
            </SearchIcon>
            {/*输入框onChange被设置为传入的参数，value也被作为参数传回*/}
            <SearchInput type="text" placeholder="Enter your city" value={value} onChange={onChange}/>
        </SearchSection>
    )
}
export default SearchBar;