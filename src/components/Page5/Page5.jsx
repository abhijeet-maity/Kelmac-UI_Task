import React from "react";
import "./Page5.css";
import curve from "../../images/Page5Curve.png";

const Page5 = () => {
  return (
    <main id="Page5">
      <section id="Page5-details">
        <div>
          <h2>Get A Quote</h2>
          <img src={curve} alt="" />
        </div>
        <p>
          Please take the time to complete the following form and provide us
          with as much information as you are able to ensure we can deal with
          your request as promptly.
        </p>
      </section>
      <form action="">
        <div className="input-field">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            placeholder="enter full name"
            name="name"
            id="name"
          />
        </div>

        <div className="dual-row">
          <div className="input-field">
            <label htmlFor="country">{`Country (Optional)`}</label>
            <select id="country" name="courseNature">
              <option value="" disabled selected>
                Select country
              </option>
              <option value="online">Bharat</option>
              <option value="offline">Russia</option>
              <option value="hybrid">Israel</option>
            </select>
          </div>

          <div className="input-field">
            <label htmlFor="email">Email ID</label>
            <input
              type="text"
              placeholder="enter email id"
              name="email"
              id="email"
            />
          </div>
        </div>

        <div className="dual-row">
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
        </div>

        <div className="input-field">
          <label htmlFor="message">{`Message (Optional)`}</label>
          <textarea
            name="message"
            id="message"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default Page5;
