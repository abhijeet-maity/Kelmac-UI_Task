import React from 'react';
import "./BenefitCardContainer.css";
import BenefitCard from '../BenefitCard/BenefitCard';



const  BenefitCardContainer = () => {

  const benefitArray = [{
    id:"01",
    title: "Cost-Effective Training Solution",
    color1: "#FF8AB6",
    color2: "#F65585",
    description: "Reduce costs per participant through group pricing, making it more affordable than individual enrolments. Virtual or on-site delivery eliminates travel and accommodation expenses. Customized programs accelerate compliance and boost team efficiency. Achievea faster return on investment with tailored, business-focused learning."
  }]

  return (
    
    <section id='benefit-card-container'>
        <section id='benefit-cards-array'>
          <BenefitCard/>
        </section>
        <div></div>
    </section>
  )
}

export default BenefitCardContainer;