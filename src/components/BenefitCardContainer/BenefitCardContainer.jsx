import React, { useState } from "react";
import "./BenefitCardContainer.css";
import BenefitCard from "../BenefitCard/BenefitCard";
import curve from "../../images/benefitsPageicons/curve.png"
import icon1 from "../../images/benefitsPageicons/bnficon1.png";
import icon2 from "../../images/benefitsPageicons/bnficon2.png";
import icon3 from "../../images/benefitsPageicons/bnficon3.png";
import icon4 from "../../images/benefitsPageicons/bnficon4.png";
import icon5 from "../../images/benefitsPageicons/bnficon5.png";

const BenefitCardContainer = () => {
  const [activeCard, setActiveCard] = useState(null);


  const benefitArray = [
    {
      id: "01",
      title: "Cost-Effective Training Solution",
      color1: "#FF8AB6",
      color2: "#F65585",
      src: icon1,
      description:
        "Reduce costs per participant through group pricing, making it more affordable than individual enrolments. Virtual or on-site delivery eliminates travel and accommodation expenses. Customized programs accelerate compliance and boost team efficiency. Achievea faster return on investment with tailored, business-focused learning.",
    },
    {
      id: "02",
      title: "Minimal Business Disruption",
      color1: "#AD9EFC",
      color2: "#8C7AFB",
      src: icon2,
      description:
        "We ensures continuous operations with little to no impact on productivity. It involves strategic planning, risk management, and efficient execution to prevent downtime, maintain workflow efficiency, and keep business functions running smoothly.",
    },
    {
      id: "03",
      title: "Tailored for Your Industry & Team",
      color1: "#87E5FC",
      color2: "#45C6E8",
      src: icon3,
      description:
        "Solutions are customized to meet the unique needs of your business sector and workforce. By understanding industry-specific challenges and team dynamics, we create strategies, tools, and processes that enhance efficiency, drive growth, and ensure seamless integration with your existing workflows.",
    },
    {
      id: "04",
      title: "Confidential & Secure Learning",
      color1: "#FECF9A",
      color2: "#FF9D2A",
      src: icon4,
      description:
        "We ensure that all training materials, discussions, and data remain private and protected. With secure platforms, encrypted access, and strict confidentiality measures, learners can engage in a safe environment without concerns about data breaches or unauthorized access.",
    },
    {
      id: "05",
      title: "Flexible Delivery Options",
      color1: "#A0EAD3",
      color2: "#36BE93",
      src: icon5,
      description:
        "We provide the freedom to access services, training, or products in a way that best suits your schedule and needs. Whether through in-person sessions, virtual platforms, on-demand resources, or hybrid models, this approach ensures convenience, efficiency, and a seamless experience tailored to your preferences.",
    },
  ];

  const handleClick = (card) => {
    setActiveCard(card);
  };

  //Minimal Business Disruption
  return (
    <section id="benefit-card-container">
      <div>
        <h2>The Benefits of Private In-House Training</h2>
        <img src={curve} alt="" />
      </div>
      <section id="benefit-cards-array">
        {benefitArray.map((card) => {
          // const { id, description} = card;
          return (
            <BenefitCard
              key={card.id}
              {...card}
              activeCard={activeCard}
              onClick={() => handleClick(card)}
            />
          );
        })}
      </section>

      <div
        className="benefit-description"
        style={{
          background: `linear-gradient(to right, ${activeCard?.color2}, ${activeCard?.color2})`,
        }}
      >
        <p>{activeCard?.description}</p>
      </div>
    </section>
  );
};

export default BenefitCardContainer;
