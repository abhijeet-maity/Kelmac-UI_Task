import React from "react";
import "./FiveReasonCard.css";

const FiveReasonCard = (props) => {
  const { img, color, title, title2, description } = props;
  return (
    <div className="five-card-rest" style={{ backgroundColor: color }}>
      <img src={img} alt="" />
      <div>
        <div className="title">
          <h3>{title}</h3>
          <h3>{title2}</h3>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FiveReasonCard;
