import React from "react";
import "./protfolio.css";
import { portfolio } from "../../../data";
import ProtfolioItems from "./ProtfolioItems";

const Protfolio = () => {
  return (
    <section className="protfolio section ">
      <h2 className="section_title container">
        My <span>Protfolio</span>
      </h2>

      <div className="protfolio_container container grid">
        {portfolio.map((item) => (
          <ProtfolioItems key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Protfolio;
