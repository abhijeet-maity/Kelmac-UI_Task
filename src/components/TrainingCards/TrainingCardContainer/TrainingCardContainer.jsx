import React from "react";
import "./TrainingCardContainer.css";
import TrainingCard from "../TrainingCard/TrainingCard.jsx";
import leftArrow from "../../../images/card-list-icons/leftarrow.png";
import rightArrow from "../../../images/card-list-icons/rightarrow.png";

const TrainingCardContainer = () => {
  const cardContainer = [
    {
      id: "1",
      price: "₹ 32,500",
      Course: "ISO 9001:2015 Lead Auditor Training Course",
      section: "Quality Management",
      mode: "Virtual",
      period: "3 Mar 25 to 9 Mar 25",
      duration: "4 Days",
      language: "English",
    },
    {
      id: "2",
      price: "₹ 32,500",
      Course: "ISO 9001:2015 Lead Auditor Training Course",
      section: "Quality Management",
      mode: "Virtual",
      period: "3 Mar 25 to 9 Mar 25",
      duration: "4 Days",
      language: "English",
    },
    {
      id: "3",
      price: "₹ 32,500",
      Course: "ISO 9001:2015 Lead Auditor Training Course",
      section: "Quality Management",
      mode: "Virtual",
      period: "3 Mar 25 to 9 Mar 25",
      duration: "4 Days",
      language: "English",
    },
    {
      id: "4",
      price: "₹ 32,500",
      Course: "ISO 9001:2015 Lead Auditor Training Course",
      section: "Quality Management",
      mode: "Virtual",
      period: "3 Mar 25 to 9 Mar 25",
      duration: "4 Days",
      language: "English",
    },
  ];

  return (
    <main>
      <section className="card-container">
        {cardContainer.map((card) => {
          const { id, ...rest } = card;
          return <TrainingCard key={card.id} {...rest} />;
        })}
      </section>
      <div className="pagination">
        <img src={leftArrow} alt="" />
        <div className="pagination-circle"></div>
        <div className="pagination-circle"></div>
        <div className="pagination-circle"></div>
        <div className="pagination-circle"></div>
        <div className="pagination-circle"></div>
        <img src={rightArrow} alt="" />
      </div>
    </main>
  );
};

export default TrainingCardContainer;
