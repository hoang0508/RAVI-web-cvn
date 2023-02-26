import TextArea from "antd/es/input/TextArea";
import React from "react";

interface ITextAreaComp {
  value: string;
  placeholder: string;
  name?: string;
}

const TextAreaComp = ({ value, placeholder, name }: ITextAreaComp) => {
  return (
    <>
      <TextArea
        name={name}
        className="textarea-custom"
        value={value}
        placeholder={placeholder}
        rows={5}
      />
    </>
  );
};

export default TextAreaComp;
