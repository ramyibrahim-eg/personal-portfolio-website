import React from "react";

const ThemeItem = ({ img, color, changeColor }) => {
  return (
    <img
      src={img}
      alt="color"
      className="theme_img"
      onClick={() => {
        changeColor(color);
      }}
    />
  );
};

export default ThemeItem;
