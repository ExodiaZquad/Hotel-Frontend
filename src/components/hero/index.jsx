import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";

const Navbar = () => (
  <div className="navbar__container">
    <div className="navbar__name">Exodia</div>
    <div className="navbar__content">
      <div className="navbar__items">
        <div className="navbar__item">
          <a href="#home">Home</a>
        </div>
        <div className="navbar__item">
          <a href="#service">Service</a>
        </div>
        <div className="underline underline--left"></div>
      </div>
      <div className="navbar__icon"></div>
      <div className="navbar__items">
        <div className="navbar__item">
          <a href="#booking">Booking</a>
        </div>
        <div className="navbar__item">
          <a href="#contact">Contact</a>
        </div>
        <div className="underline underline--right"></div>
      </div>
    </div>
    <div className="navbar__button__container">
      <Link to="/login">
        <div className="navbar__button">Login</div>
      </Link>
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

      <a href="#booking" className="hero__button">
        Let's Booking
      </a>
    </div>
  </div>
);

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__backdrop">
        <HeroContent />
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
