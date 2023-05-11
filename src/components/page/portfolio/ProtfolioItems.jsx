import React, { useState } from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";

const ProtfolioItems = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const protfolioModal = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="protfolio_item">
      <img src={img} alt={title} className="protfolio_img" />

      <div className="protfolio_hover" onClick={toggleModal}>
        <h3 className="protfolio_title">{title}</h3>
      </div>

      {modal && (
        <div className="protfolio_modal" onClick={toggleModal}>
          <div className="protfolio_modal_content" onClick={protfolioModal}>
            <AiOutlineCloseCircle
              className="modal_close"
              onClick={toggleModal}
            />

            <h3 className="modal_title">{title}</h3>
            <ul className="modal_list grid">
              {details.map(
                ({ icon, title, Prev, detail, links, click }, index) => (
                  <li className="modal_item" key={index}>
                    <span className="item_icon">{icon}</span>
                    <div>
                      <span className="item_title">{title}</span>
                      <span className="item_details">{detail}</span>

                      <span className="item_title">{Prev}</span>
                      <a href={links} target="_blank" className="item_details">
                        {click}
                      </a>
                    </div>
                  </li>
                )
              )}
            </ul>

            <img src={img} alt={title} className="modal_img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProtfolioItems;
