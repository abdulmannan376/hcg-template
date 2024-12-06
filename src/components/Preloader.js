import React from "react";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-after"></div>
      <div className="preloader-before"></div>
      <div className="preloader-block">
        <div className="title">Droow</div>
        <div className="percent">0</div>
        <div className="loading">loading...</div>
      </div>
      <div className="preloader-bar">
        <div className="preloader-progress"></div>
      </div>
    </div>
  );
};

export default Preloader;
