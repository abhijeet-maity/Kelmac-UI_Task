import React from "react";
import "./FiveReasonPage.css";
import Buttons from "../../components/Button-Group/Button-group.jsx";
import FiveReasonCard from "../FiveReasonComponents/FiveReasonCard.jsx";
import FiveCard from "../FiveReasonComponents/FiveCard.jsx";
import icon1 from "../../images/fivecardicons/icon1.png";
import icon2 from "../../images/fivecardicons/icon2.png";
import icon3 from "../../images/fivecardicons/icon3.png";
import icon4 from "../../images/fivecardicons/icon4.png";
import icon5 from "../../images/fivecardicons/icon5.png";
const FiveReasonPage = () => {
  const componentArray = [
    {
      id: "01",
      img: icon1,
      color: "#FFF4F8",
      title: "Greater Knowledge Transfer ",
      title2: "& Practical Application",
      description:
        "Employees learn best when they can connect training to their daily tasks. Our in-house programs align course content with your company’s systems, policies, and workflows, ensuring that training is immediately applicable.",
    },
    {
      id: "02",
      img: icon2,
      color: "#F7F6FF",
      title: "Stronger Teamwork &",
      title2: "Company-Wide Alignment",
      description:
        "When employees train together,they develop a shared understanding of business goals, processes, and compliance requirements. This enhances collaboration, efficiency, and overall team performance.",
    },
    {
      id: "03",
      img: icon3,
      color: "#F3FDFF",
      title: "Higher Retention & ROI on Training",
      title2: "Investment",
      description:
        "Teams trained in-house retain more knowledge and engage better than those in external courses. This fosters active participation, knowledge-sharing, and higher ROI.",
    },
    {
      id: "04",
      img: icon4,
      color: "#FFF9F3",
      title: "Industry-Specific &",
      title2: "Custom-Designed Courses",
      description:
        "Your business is unique—your training should be too. We tailor courses to your industry’s regulations, ISO standards, and operational needs, ensuring that training adds real value to your organization.",
    },
    {
      id: "05",
      img: icon5,
      color: "#EFFFFA",
      title: "Convenience &",
      title2: "Maximum Flexibility",
      description:
        "Whether your team prefers onsite, online, or hybrid training, we work around your schedule to provide a seamless learning experience. You decide when and how training happens—we make it easy.",
    },
  ];
  return (
    <main id="fivereasonPage">
      <section className="five-card-container">
        <FiveCard />
        {componentArray.map((card) => {
          return <FiveReasonCard key={card.id} {...card}/>;
        })}
      </section>
      <Buttons />
    </main>
  );
};

export default FiveReasonPage;
