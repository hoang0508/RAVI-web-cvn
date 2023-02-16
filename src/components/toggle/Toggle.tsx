import React from "react";
import "./Toggle.scss";

interface IToggle {
  text: string;
}

const Toggle = ({ text }: IToggle) => {
  return (
    <div className="toggle">
      <span className="toggle-text">{text}</span>
      <div>
        <input type="checkbox" id="switch" className="switch-input" />
        <label htmlFor="switch" className="switch" />
      </div>
    </div>
  );
};

export default Toggle;
