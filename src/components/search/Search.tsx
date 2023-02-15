import * as React from "react";
import { Button } from "../button";
import SearchInput from "./parts/SearchInput";
import "./Search.scss";

export interface ISearchProps {}

const Search = (props: ISearchProps) => {
  return (
    <div className="search">
      <SearchInput />
      <Button className="button-search" type="button">
        Tìm
      </Button>
    </div>
  );
};

export default Search;
