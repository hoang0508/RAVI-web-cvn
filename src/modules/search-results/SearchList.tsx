import React from "react";
import CardSearchItem from "../../components/cards/card-search/CardSearchItem";
import { Gap } from "../../components/common/gap";
import { Heading } from "../../components/common/heading";
import { RegisterMail } from "../../components/register-mail";
import { Toggle } from "../../components/toggle";
import "./SearchList.scss";

const SearchList = () => {
  return (
    <div className="search-list">
      <div className="search-list--heading">
        <Heading
          size="small"
          heading="Đà Nẵng: Tìm thấy 312 khách sạn"
          className=""
        ></Heading>
        <Toggle text="Giá bao gồm thuế" />
      </div>
      <div className="search-list--item">
        {Array(6)
          .fill(0)
          .map((item, index) => (
            <CardSearchItem key={index} />
          ))}
      </div>
      <Gap gap="gap-40" />
      <RegisterMail />
      <Gap gap="gap-40" />
      <div className="search-list--item">
        {Array(6)
          .fill(0)
          .map((item, index) => (
            <CardSearchItem key={index} />
          ))}
      </div>
    </div>
  );
};

export default SearchList;
