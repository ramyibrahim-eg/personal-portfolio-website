import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Home from "./components/page/home/Home";
import NotFound from "./components/page/404/NotFound";
import About from "./components/page/about/About";
import Protfolio from "./components/page/portfolio/Protfolio";
import Themes from "./components/themes/Themes";

const App = () => {
  return (
    <>
      <Navbar />
      <Themes />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="protfolio" element={<Protfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
