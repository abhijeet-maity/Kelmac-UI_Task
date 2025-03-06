import React from "react";
import "./TrainingCardContainer.css";
import TrainingCard from "../TrainingCard/TrainingCard.jsx";

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
    <section className="card-container">
      {
        cardContainer.map((card) => {
          const {id, ...rest} = card;
          return (
            <TrainingCard key={card.id} {...rest}/>
          )
        })
      }
    </section>
  );
};

export default TrainingCardContainer;
