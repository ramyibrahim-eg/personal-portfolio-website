import React from "react";
import { personalInfo } from "../../../data";

const Info = () => {
  return (
    <>
      {personalInfo.map(({ id, title, description }) => (
        <li className="info_item" key={id}>
          <span className="info_title">{title}</span>
          <span className="info_description">{description}</span>
        </li>
      ))}
    </>
  );
};

export default Info;
