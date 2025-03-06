import React from "react";
import icon from "../../images/icons8-whatsapp 2.png";
import "./Button-group.css";

const Buttons = () => {
  return (
    <div className="btn-section">
      <button>Get a Quote</button>
      <button>
        <img src={icon} className="whatsapp" alt="" />
        <span>Whatsapp us</span>
      </button>
    </div>
  );
};

export default Buttons;
