import React from "react";
import "./ProgressBar.scss";

const ProgressBar = () => {
  return (
    <div className="progress-bar">
      <div className="progress-bar--title">
        <h3 className="progress-bar--title-heading">Mức độ sạch sẽ</h3>
        <span className="progress-bar--title-number">4.8</span>
      </div>
      <div className="progress-bar--percent">
        <span className="progress-bar--percent-level"></span>
      </div>
    </div>
  );
};

export default ProgressBar;
