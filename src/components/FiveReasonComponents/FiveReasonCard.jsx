import React from "react";
import "./FiveReasonCard.css";

const FiveReasonCard = (props) => {
  const { img, title, description } = props;
  return (
    <div className="five-card-rest">
      <img src={img} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FiveReasonCard;
