import React from "react";

const Cursor = () => {
  return (
    <div className="cursor">
      <div className="cursor-helper cursor-view">
        <span>VIEW</span>
      </div>

      <div className="cursor-helper cursor-close">
        <span>Close</span>
      </div>

      <div className="cursor-helper cursor-link"></div>
    </div>
  );
};

export default Cursor;
