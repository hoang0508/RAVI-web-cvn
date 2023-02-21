import React from "react";
import "./CardComponent.scss";

interface ICardTitle {
  title: string;
}

const CardTitle = ({ title }: ICardTitle) => {
  return <h3 className="card-title">{title}</h3>;
};

export default CardTitle;
