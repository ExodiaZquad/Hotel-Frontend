import { React, useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../services/authService";
import "./hero.css";
import { Offcanvas } from "react-bootstrap";
import { RiPencilFill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

function Show_profile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="navbar__icon" onClick={handleShow}></div>
      <Offcanvas show={show} onHide={handleClose}>
        <div className="profile_button">
          <RiPencilFill size="2.2rem" className="profile_butt"></RiPencilFill>
          <GrClose size="2.2rem" className="profile_butt"></GrClose>
        </div>
        <div className="profile_top">
          <div className="profile_headText">My Profile</div>
          <div className="profile_top_image"></div>
          <div>Username</div>
        </div>

        <div>
          <ul className="profile_detail">
            <li>Name :</li>
            <li>Email :</li>
            <li>Phone :</li>
          </ul>
        </div>
      </Offcanvas>
    </>
  );
}

const Navbar = () => {
  const isAuthen = auth.isAuthen();

  const handleLogout = () => {
    auth.logout();
    window.location.reload(true);
  };

  return (
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
        <Show_profile />
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
      {isAuthen ? (
        <div className="navbar__button__container" onClick={handleLogout}>
          <div className="navbar__button">Logout</div>
        </div>
      ) : (
        <div className="navbar__button__container">
          <Link to="/login">
            <div className="navbar__button">Login</div>
          </Link>
        </div>
      )}
    </div>
  );
};

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
