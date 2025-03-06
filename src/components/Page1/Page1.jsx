import React from "react";
import curve from "../../images/Vector 2.png";
import icon1 from "../../images/icons/Frame.png";
import icon2 from "../../images/icons/Frame (1).png";
import icon3 from "../../images/icons/Frame (2).png";
import icon4 from "../../images/icons/Frame (3).png";
import icon5 from "../../images/icons/Frame (4).png";
import line from "../../images/Rectangle 6105.png";
import "./Page1.css";
import Buttons from "../Button-Group/Button-group.jsx";

const Page1 = () => {
  return (
    <section id="page1">
      <section className="details-section">
        <div>
          <h2>Why Choose Private & In-House Training?</h2>
          <p>Tailored Learning That Works for Your Business</p>
        </div>
        <div className="inner-details-section">
          <h3>
            Training isn’t just about ticking a box—it’s about equipping your
            team with the right skills and knowledge to drive real business
            impact. But public training courses often come with challenges that
            can make them less effective for organizations like yours:
          </h3>
          <div className="list">
            <div className="list-item">
              <img src={icon1} alt="" />
              <p>
                Generic content that doesn’t fully align with your business
                goals
              </p>
            </div>
            <div className="list-item">
              <img src={icon2} alt="" />
              <p>
                Inconvenient schedules that don’t fit your team’s availability
              </p>
            </div>
            <div className="list-item">
              <img src={icon3} alt="" />
              <p>Additional travel costs & time away from work </p>
            </div>
            <div className="list-item">
              <img src={icon4} alt="" />
              <p>Disruptions to daily business operations</p>
            </div>
            <div className="list-item">
              <img src={icon5} alt="" />
              <p>
                Lack of confidentiality when discussing company-specific
                challenges
              </p>
            </div>
          </div>
          <h3>
            Private, in-house training eliminates these barriers by bringing the
            learning experience directly to your organization—on your schedule,
            with your priorities in mind.
          </h3>
          <Buttons />
        </div>
        <div className="top-training-text">
          <h6>Our Top Training Programs</h6>
          <img src={curve} alt="" />
        </div>
      </section>
      <img src={line} alt="" className="line" />
    </section>
  );
};

export default Page1;
