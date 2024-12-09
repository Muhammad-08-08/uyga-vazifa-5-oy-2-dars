import React from "react";
import "./index.css";
import sectionImg from "../../assets/section-image1.png";
import sectionImg2 from "../../assets/section-image2.png";
import sectionImg3 from "../../assets/stripe.svg";
import sectionImg4 from "../../assets/google.svg";
import sectionImg5 from "../../assets/notion.svg";
import sectionImg6 from "../../assets/gusto.svg";
import sectionImg7 from "../../assets/aircall.svg";

function section() {
  return (
    <div className="section">
      <div className="section-card1">
        <div className="section-image">
          <img src={sectionImg} alt="" />
        </div>
        <div className="section-text">
          <h1 className="section-h1">Ready to put the human back in HR?</h1>
          <p className="section-p">
            Clerksy helps you set the stage with an inclusive and compliant
            workplace.
          </p>
        </div>
      </div>

      <div className="section-card2">
        <div className="section-image">
          <img src={sectionImg2} alt="" />
        </div>
        <div className="section-text">
          <h1 className="section-h1">You don’t have to play all the parts.</h1>
          <p className="section-p">
            Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy
            help.
          </p>
        </div>
      </div>

      <div className="section-card3">
        <h2 className="section-h2">We partner with the best</h2>
        <div className="section-logos">
          <a href="https://stripe.com/" target="_blank">
            <img src={sectionImg3} alt="" />
          </a>
          <a href="https://www.google.co.uk/" target="_blank">
            <img src={sectionImg4} alt="" />
          </a>
          <a href="https://www.notion.so/onboarding" target="_blank">
            <img src={sectionImg5} alt="" />
          </a>
          <a href="https://gusto.com/" target="_blank">
            <img src={sectionImg6} alt="" />
          </a>
          <a href="https://aircall.io/" target="_blank">
            <img src={sectionImg7} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default section;
