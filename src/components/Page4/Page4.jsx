import React from "react";
import "./Page4.css";
import DetailComponent from "./DetailComponent/DetailComponent";
import icon1 from "../../images/Page4-icons/icon1.png";
import icon2 from "../../images/Page4-icons/icon2.png";
import icon3 from "../../images/Page4-icons/icon3.png";
import icon4 from "../../images/Page4-icons/icon4.png";
import icon5 from "../../images/Page4-icons/icon5.png";

const Page4 = () => {
  return (
    <main id="Page4">
      <section className="Page4-column">
        <h2>
          Why Kelmac Group is the <br />
          Right Training Partner for <br />
          Your Business?
        </h2>
        <DetailComponent
          logo={icon1}
          title="Certified &"
          title2="Accredited courses"
          para="Our training is internationally recognised, ensuring compliance with ISO standards and other industry regulations."
        />
        <DetailComponent
          logo={icon2}
          title="Tailored Content"
          title2="That Delivers Results"
          para="We customise every course to address your company’s unique needs, ensuring relevant and immediately applicable training."
        />
      </section>
      <section className="Page4-column">
        <DetailComponent
          logo={icon3}
          title="30+ Years"
          title2="of Expertise"
          para="We have trained thousands of professionals worldwide, helping businesses improve compliance, quality, and efficiency."
        />
        <DetailComponent
          logo={icon4}
          title="Expert Instructors with"
          title2="Real-World Experience"
          para="Our trainers aren’t just educators—they’re industry professionals who understand your challenges and provide practical, actionable insights."
        />
        <DetailComponent
          logo={icon5}
          title="Proven Track"
          title2="Record of Success"
          para="Companies that train with Kelmac Group see increased employee performance, compliance improvement, and better operational efficiency."
        />
      </section>
    </main>
  );
};

export default Page4;
