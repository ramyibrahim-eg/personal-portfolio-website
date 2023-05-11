import React, { useEffect, useState } from "react";
import "./themes.css";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { themes } from "../../data";
import ThemeItem from "./ThemeItem";

const getStorageColor = () => {
  let color = "hsl(271, 76%, 53%)";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }
  return color;
};

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);

  const [color, setColor] = useState(getStorageColor());

  const [theme, setTheme] = useState(getStorageTheme());

  const changeColor = (color) => {
    setColor(color);
  };

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--first-c", color);
    localStorage.setItem("color", color);

    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [color, theme]);

  return (
    <div className={`${showSwitcher ? "show_switcher" : ""} style_switcher`}>
      <div
        className="style_switcher_toggler"
        onClick={() => setShowSwitcher(!showSwitcher)}
      >
        <FaCog />
      </div>

      <div className="theme_toggler" onClick={toggleTheme}>
        {theme === "light-theme" ? <BsMoon /> : <BsSun />}
      </div>

      <h3 className="style_switcher_title">Style Switcher</h3>
      <div className="style_switcher_items">
        {themes.map((theme, index) => (
          <ThemeItem key={index} {...theme} changeColor={changeColor} />
        ))}
      </div>

      <div
        className="style_switcher_close"
        onClick={() => setShowSwitcher(!showSwitcher)}
      >
        &times;
      </div>
    </div>
  );
};

export default Themes;
