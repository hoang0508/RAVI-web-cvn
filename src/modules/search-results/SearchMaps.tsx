import React from "react";
import bgMap from "../../assets/images/bg-map.png";
const SearchMaps = () => {
  return (
    <div
      className="search-maps background"
      style={{
        backgroundImage: `url(${bgMap})`,
      }}
    ></div>
  );
};

export default SearchMaps;
