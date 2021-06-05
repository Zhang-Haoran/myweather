import { SearchOutlined } from "@ant-design/icons";
import {Form,Icon,Input} from "./styles";
// 参数从父组件传入
const SearchBar = ({ value, onChange, submit, isResultFetched }) => {
  return (
    <Form isResultFetched={isResultFetched} onSubmit={submit}>
      <Icon>
        <SearchOutlined />
      </Icon>
      <Input
        type="text"
        placeholder="Enter your city (eg. Melbourne,au)"
        value={value}
        onChange={onChange}
      />
    </Form>
  );
};
export default SearchBar;
