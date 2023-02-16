import React from "react";
import SearchFilter from "../modules/search-results/SearchFilter";
import SearchList from "../modules/search-results/SearchList";
import "../modules/search-results/GlobalSearch.scss";
import SearchMaps from "../modules/search-results/SearchMaps";

const SearchPage = () => {
  return (
    <div>
      <SearchFilter />
      <div className="flex search-main">
        <SearchList />
        <SearchMaps />
      </div>
    </div>
  );
};

export default SearchPage;
