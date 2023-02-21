import React from "react";
import "./CardComponent.scss";

interface ICardAddress {
  text: string;
}

const CardAddress = ({ text }: ICardAddress) => {
  return <span className="card-address">{text}</span>;
};

export default CardAddress;
