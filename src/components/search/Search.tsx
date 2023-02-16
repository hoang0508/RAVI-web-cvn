import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import SearchInput from "./parts/SearchInput";
import "./Search.scss";

export interface ISearchProps {}

const Search = (props: ISearchProps) => {
  const navigate = useNavigate();
  const handleNaviSearch = () => {
    navigate("/search-result");
  };
  return (
    <div className="search">
      <SearchInput />
      <Button
        className="button-search"
        type="button"
        onClick={() => handleNaviSearch()}
      >
        Tìm
      </Button>
    </div>
  );
};

export default Search;
