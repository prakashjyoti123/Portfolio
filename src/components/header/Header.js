import React from "react";
import CTA from "./CTA";
import "./Header.css";
import Me from "../../asset/jyotiImg.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jyoti Prakash Rai</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="Jyoti Img" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
