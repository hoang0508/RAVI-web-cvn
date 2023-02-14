import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/button";
import "./Select.scss";

const SelectData = [
  {
    id: 1,
    text: "Đà Nẵng",
  },
  {
    id: 2,
    text: "Đà Nẵng",
  },
  {
    id: 3,
    text: "Đà Nẵng",
  },
  {
    id: 4,
    text: "Đà Nẵng",
  },
];

const Select = () => {
  const [selectActive, setSelectActive] = useState<number>();
  useEffect(() => {
    setSelectActive(1);
  }, []);
  const handleSelect = (id: number) => {
    setSelectActive(id);
  };
  return (
    <div className="select">
      {SelectData.map((item) => (
        <Button
          type="button"
          kind="sm"
          className={`${
            item.id === selectActive
              ? "button-select--active button-select"
              : "button-select"
          } `}
          key={item.id}
          onClick={() => handleSelect(item.id)}
        >
          {item.text}
        </Button>
      ))}
    </div>
  );
};

export default Select;
