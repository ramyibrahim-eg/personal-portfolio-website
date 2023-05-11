import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { skills } from "../../../data";

const Skills = () => {


  return (
    <>
      {skills.map(({ id, title, percentage }) => (
        <div className="progress_box" key={id}>
          <div className="progress_circle">
            <CircularProgressbar
              strokeWidth={7.5}
              text={`${percentage}%`}
              value={percentage}
            />
          </div>
          <h3 className="skills_title">{title}</h3>
        </div>
      ))}
    </>
  );
};

export default Skills;
