import styled from "styled-components";
import {SearchOutlined} from "@ant-design/icons";

const SearchSection = styled.div`
  background: white;
  position: relative;
  top: 5rem;
  width: 40rem;
  height: 3rem;
  margin: 0 auto;
  border-radius: 20px;
`;

const SearchInput = styled.input`
  width: 90%;
  position: absolute;
  top: 0.5rem;
  left: 8%;
  border: none;
  height: 2rem;
  border-radius: 20px;
`;

const SearchIcon = styled.span`
  position: absolute;
  top: 0.8rem;
  left: 1rem;
  height: 2rem;
  width: 2rem;
  font-size: 1.5rem;
`;

const SearchBar = ({value,onChange}) => {
    return (
        <SearchSection>
            <SearchIcon>
                <SearchOutlined/>
            </SearchIcon>
            <SearchInput type="text" placeholder="Enter your city" value={value} onChange={onChange}/>
        </SearchSection>
    )
}
export default SearchBar;