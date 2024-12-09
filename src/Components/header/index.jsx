import React from "react";
import "./index.css";
import navLogo from "../../assets/nav-logo.svg";
import heroImg from "../../assets/hero-img.png";

function Header() {
  return (
    <div className="header">
      <nav>
        <img src={navLogo} alt="" />
        <div className="links">
          <a href="">log in</a>
          <a href="">844-332-6440</a>
          <button>Get Started</button>
        </div>
      </nav>
      <div className="hero">
        <div className="hero-text">
          <h1>Running the show has never been so easy.</h1>
          <p>
            Ready to put the human back in HR? Clerksy helps you set the stage
            with an inclusive and compliant workplace.
          </p>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
