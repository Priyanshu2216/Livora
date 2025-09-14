import React from "react";
import "./GetStarted.css"
const GetStarted = () => {
  return (
    <section id="getstarted" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Livora</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find you residence soon
          </span>
          <button className="button">
            <a href="mailto:priyanshuw987@gmail.com">Get Start</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
