import React from "react";
import "./BenefitCard.css";
// import icon1 from "../../images/benefitsPageicons/bnficon1.png"

const BenefitCard = (props) => {
  const { id, title, color2, src, onClick, activeCard } = props;

  return (
    <div
      className={`benefit-card ${activeCard?.id === id ? "active" : ""}`}
      style={{ background: `linear-gradient(to right, ${color2}, ${color2})` }}
      onClick={onClick}
    >
      <img src={src} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default BenefitCard;
