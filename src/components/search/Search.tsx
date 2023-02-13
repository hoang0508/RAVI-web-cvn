import * as React from "react";
import { IconClose, IconHotel } from "../icons";

export interface ISearchProps {}

const Search = (props: ISearchProps) => {
  return (
    <div className="search">
      <div>
        <span>
          <IconHotel />
        </span>
        <input type="text" />
        <span>
          <IconClose />
        </span>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Search;
