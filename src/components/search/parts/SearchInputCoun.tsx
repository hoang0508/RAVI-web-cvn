import { count } from "console";
import React, { useState } from "react";
import { IconMinus, IconPlus } from "../../icons";
import "./SearchInputCount.scss";

interface ISearchInputCount {
  count: number;
}

const SearchInputCount = ({ count }: ISearchInputCount) => {
  const [inputCount, setInputCount] = useState(count);
  const handleDecrease = () => {
    if (inputCount === 0) return;
    setInputCount((inputCount) => inputCount - 1);
  };
  const handleIncrease = () => {
    setInputCount((inputCount) => inputCount + 1);
  };
  return (
    <>
      <div className="search-input--count">
        <button
          className="search-input--count-decrease"
          onClick={() => handleDecrease()}
        >
          <IconMinus />
        </button>
        <span className="search-input--count-number">{inputCount}</span>
        <button
          className="search-input--count-increase"
          onClick={() => handleIncrease()}
        >
          <IconPlus />
        </button>
      </div>
    </>
  );
};

export default SearchInputCount;
