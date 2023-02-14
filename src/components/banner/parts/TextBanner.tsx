import React from "react";

interface IText {
  text: string;
}

const TextBanner = ({ text }: IText) => {
  return <p className="text-banner">{text}</p>;
};

export default TextBanner;
