import { SearchOutlined } from "@ant-design/icons";
import SearchContainer from "./components/SearchContainer";
import SearchInput from "./components/SearchInput";
import SearchIcon from "./components/SearchIcon";

// 参数从父组件传入
const SearchBar = ({ value, onChange, submit, isResultFetched }) => {
  return (
    <SearchContainer isResultFetched={isResultFetched} onSubmit={submit}>
      <SearchIcon>
        <SearchOutlined />
      </SearchIcon>
      <SearchInput
        type="text"
        placeholder="Enter your city (eg. Melbourne,au)"
        value={value}
        onChange={onChange}
      />
    </SearchContainer>
  );
};
export default SearchBar;
