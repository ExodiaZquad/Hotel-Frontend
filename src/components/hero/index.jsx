import React from "react";
import "./hero.css";

const Navbar = () => (
  <div className="navbar__container">
    <div className="navbar__name">Exodia</div>
    <div className="navbar__content">
      <div className="navbar__items">
        <div className="navbar__item">Home</div>
        <div className="navbar__item">Service</div>
        <div className="underline underline--left"></div>
      </div>
      <div className="navbar__icon"></div>
      <div className="navbar__items">
        <div className="navbar__item">Booking</div>
        <div className="navbar__item">Contact</div>
        <div className="underline underline--right"></div>
      </div>
    </div>
    <div className="navbar__button__container">
      <div className="navbar__button">Login</div>
    </div>
  </div>
);

const HeroContent = () => (
  <div className="hero__content">
    <div className="hero__block">
      <div className="hero__heading">EXODIA RESORT</div>
      <div className="hero__tagline">
        It is a long established fact that a reader will be distracted by fater
      </div>
      <div className="hero__button">Let's Booking</div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__backdrop">
        <Navbar />
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
