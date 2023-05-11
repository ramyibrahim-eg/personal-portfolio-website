import React from "react";
import profile from "../../../images/home.webp";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={profile} className="home_img" />
      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            <p>I'm, RAMY IBRAHIM</p> Front-End Developer
          </h1>
          <p className="home_description">
            HTML5, CSS, JS, JQUERY, BOOTSTRAP, React.js, Redux, Git
          </p>

          <Link to="/about" className="button">
            More About Me
            <span className="button_icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color_back"></div>
    </section>
  );
};

export default Home;
