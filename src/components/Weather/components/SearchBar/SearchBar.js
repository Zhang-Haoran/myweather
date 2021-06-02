import { SearchOutlined } from "@ant-design/icons";
import Container from "./components/Container";
import Input from "./components/Input";
import Icon from "./components/Icon";

// 参数从父组件传入
const SearchBar = ({ value, onChange, submit, isResultFetched }) => {
  return (
    <Container isResultFetched={isResultFetched} onSubmit={submit}>
      <Icon>
        <SearchOutlined />
      </Icon>
      <Input
        type="text"
        placeholder="Enter your city (eg. Melbourne,au)"
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};
export default SearchBar;
