import React from "react";
import Info from "./Info";
import { FaDownload } from "react-icons/fa";
import CV from "../../../images/home.webp";
import Stats from "./Stats";
import Skills from "./Skills";
import "./about.css";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section_title">
          About <span>Me</span>
        </h2>

        <div className="about_container grid">
          <div className="about_info">
            <h3 className="section_subtitle">Personal Info</h3>

            <ul className="info_list grid">
              <Info />
            </ul>
            <a
              href={CV}
              download="CV-Ramy-Ibrahim-(201150080061)"
              className="button"
            >
              Download Cv
              <span className="button_icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section_subtitle subtitle_center">My Skills</h3>
        <div className="skills_container grid">
          <Skills />
        </div>
      </section>
    </main>
  );
};

export default About;
