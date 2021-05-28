import { SearchOutlined } from "@ant-design/icons";
import SearchSection from "./components/SearchSection";
import SearchInput from "./components/SearchInput";
import SearchIcon from "./components/SearchIcon";



// 参数从父组件传入
const SearchBar = ({ value, onChange, submit, isResultFetched }) => {
  return (
    <SearchSection isResultFetched={isResultFetched} onSubmit={submit}>
      <SearchIcon>
        <SearchOutlined />
      </SearchIcon>
      {/*输入框onChange被设置为传入的参数，value也被作为参数传回*/}
      <SearchInput
        type="text"
        placeholder="Enter your city"
        value={value}
        onChange={onChange}
      />
    </SearchSection>
  );
};
export default SearchBar;
