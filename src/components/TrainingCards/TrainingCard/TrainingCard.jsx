import React from "react";
import "./TrainingCard.css";
import cardlogo from "../../../images/Mask group.png";
import icon1 from "../../../images/card-list-icons/Frame 2.png";
import icon2 from "../../../images/card-list-icons/Frame 4.png";
import icon3 from "../../../images/card-list-icons/Frame 4 (1).png";
import icon4 from "../../../images/card-list-icons/Frame 5.png";
import arrow from "../../../images/card-list-icons/Vector.png";

const TrainingCard = (props) => {
  const {price, Course, section, mode, period, duration, language} = props;
  
  return (
    <section className="card">
      <div className="card-header">
        <p>{price}</p>
        <img src={cardlogo} alt="" />
      </div>
      <div className="card-course-name">
        <h4>{Course}</h4>
        <p>{section}</p>
      </div>

      <div className="card-list-container">
        <div className="card-list">
          <img src={icon1} alt="" />
          <h5>{mode}</h5>
        </div>
        <div className="card-list">
          <img src={icon2} alt="" />
          <h5>{period}</h5>
        </div>
        <div className="card-list">
          <img src={icon3} alt="" />
          <h5>{duration}</h5>
        </div>
        <div className="card-list">
          <img src={icon4} alt="" />
          <h5>{language}</h5>
        </div>
      </div>
      <div className="view-details">
        <h3>View Details</h3>
        <img src={arrow} alt="" />
      </div>
    </section>
  );
};

export default TrainingCard;
