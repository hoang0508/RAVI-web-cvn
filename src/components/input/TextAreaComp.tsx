import TextArea from "antd/es/input/TextArea";
import React from "react";

interface ITextAreaComp {
  value: string;
  placeholder: string;
}

const TextAreaComp = ({ value, placeholder }: ITextAreaComp) => {
  return (
    <>
      <TextArea
        className="textarea-custom"
        value={value}
        placeholder={placeholder}
        rows={5}
      />
    </>
  );
};

export default TextAreaComp;
