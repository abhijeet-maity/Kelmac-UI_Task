import React from "react";
import Frame from "../../images/Frame 22.png";
import "./Header.css";
import curve from "../../images/Vector 1.png";
import icon from "../../images/icons8-whatsapp 2.png";


const Header = () => {
  return (
    <header className="header-section">
      <section className="info-details">
        <div className="inner-details-section">
          <h1>Excellence Redefined: Kelmac’s Training Solutions - <span className="tailored-text"><h1>Tailored</h1><img src={curve} alt="" className="image"/></span></h1>
          <h4>
            ISO training designed around your business needs—delivered when you
            need it, focused on what matters, and built to deliver measurable
            results
          </h4>
          <div className="btn-section">
            <button>Get a Quote</button>
            <button>
              <img src={icon} className="whatsapp" alt="" />
              <span>Whatsapp us</span>
            </button>
          </div>
        </div>
        <form action="">
          <div className="input-field">
            <label htmlFor="name">Full Name</label>
            <input type="text" placeholder="enter full name" name="name" id="name"/>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email ID</label>
            <input type="text" placeholder="enter email id" name="email" id="email"/>
          </div>

          <div className="input-field">
            <label htmlFor="training">Training you are looking</label>
            <select id="training" name="training">
              <option value="" disabled selected>
                 Select training 
              </option>
              <option value="online">React</option>
              <option value="offline">Node</option>
              <option value="hybrid">Nextjs</option>
            </select>
          </div>


          <div className="input-field">
            <label htmlFor="courseNature">Course Nature</label>
            <select id="courseNature" name="courseNature">
              <option value="" disabled selected>
                 Select course nature 
              </option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>


          <div className="input-field">
            <label htmlFor="courseNature">{`Country (Optional)`}</label>
            <select id="courseNature" name="courseNature">
              <option value="" disabled selected>
                 Select country 
              </option>
              <option value="online">Bharat</option>
              <option value="offline">Russia</option>
              <option value="hybrid">Israel</option>
            </select>
          </div>

          <div className="input-field">
            <label htmlFor="message">{`Message (Optional)`}</label>
            <textarea name="message" id="message" placeholder="Write your message here..."></textarea>
          </div>

          <button type="submit" className="submit">Submit</button>
        </form>
      </section>
      <section></section>
    </header>
  );
};

export default Header;
