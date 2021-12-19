import React from "react";
import { FaWifi } from "react-icons/fa";
import { FaSwimmer } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import "./service.css";

const ServiceBlock = () => (
  <React.Fragment>
    <div className="service__block__background">
      <div className="service__block">
        <div className="service__block__content">
          <div className="service__block__title">Welcome to Exodia Hotel</div>
          <div className="service__block__detail">
            The Exodia Hotel is a modern, elegant 5-star hotel overlooking the
            sea, perfect fo r a romantic, charming vacation,
          </div>
        </div>
        <div className="service__block__img">
          <img
            src="https://media.discordapp.net/attachments/909012998285307924/922021070721150977/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg?width=1014&height=676"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="service__imgAdd__container">
      <img
        src="https://media.discordapp.net/attachments/909012998285307924/909707587388338186/pexels-photo-6758770.jpeg?width=1013&height=676"
        alt=""
      />
    </div>
  </React.Fragment>
);

const ServiceBlockReverse = () => (
  <React.Fragment>
    <div className="service__block__background ">
      <div className="service__block service__block--reverse">
        <div className="service__block__img">
          <img
            src="https://media.discordapp.net/attachments/909012998285307924/909018198572163112/mykonian-platinumvillas02.jpg?width=1014&height=676"
            alt=""
          />
        </div>
        <img
          className="img__add--reverse"
          src="https://media.discordapp.net/attachments/909012998285307924/909452924965502976/pexels-photo-323780.jpeg?width=1049&height=676"
          alt=""
        />
        <div className="service__block__content">
          <div className="service__block__title">5/5 TripAdvisor Traveller</div>
          <div className="service__block__review">
            “Great Place to stay and amazing staff”
          </div>
          <div className="service__block__detail">
            My wife and I stayed here for a week. The staff was amazing
            throughout our stay. The breakfast was good.
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

const ServiceRoomContainer = () => (
  <div className="service__rooms__container">
    <ServiceRoom title="01 Deluxe Room" />
    <ServiceRoom title="02 Luxury Room" />
    <ServiceRoom title="03 Alchemy Villa" />
    <ServiceRoom title="04 Poker Villa" />
  </div>
);

const ServiceRoom = ({ title }) => (
  <div className="service__room">
    <div className="service__room__title">{title}</div>
    <div className="service__room__tagline">
      Provides free Wi-Fi, breakfasts, fitness room and swimming pool.
    </div>
  </div>
);

const ServiceImg = () => (
  <div className="service__img__container">
    <div className="service__img__group">
      <img
        className="service__img--1"
        src="https://cdn.discordapp.com/attachments/780341026140848138/922163338430009384/phutalay16.png"
        alt=""
      />
      <img
        className="service__img--2"
        src="https://media.discordapp.net/attachments/909012998285307924/909452928157356043/pexels-photo-2724749.jpeg?width=1014&height=676"
        alt=""
      />
      <img
        className="service__img--3"
        src="https://media.discordapp.net/attachments/909012998285307924/909014164628979712/41535.jpg?width=1015&height=676"
        alt=""
      />
      <img
        className="service__img--3"
        src="https://media.discordapp.net/attachments/909012998285307924/922020461557207080/greg-rivers-rChFUMwAe7E-unsplash.jpg?width=1014&height=676"
        alt=""
      />
    </div>
  </div>
);

const ServiceIconContainer = () => (
  <div className="service__icon__background">
    <div className="service__icon__container">
      <div className="service__icon__group">
        <FaWifi className="service__icon" />
        <div className="service__title">Free Wifi</div>
      </div>
      <div className="service__icon__group">
        <FaUtensils className="service__icon" />
        <div className="service__title">Breakfast</div>
      </div>
      <div className="service__icon__group">
        <FaDumbbell className="service__icon" />
        <div className="service__title">Fitness</div>
      </div>
      <div className="service__icon__group">
        <FaSwimmer className="service__icon" />
        <div className="service__title">Swimming pool</div>
      </div>
    </div>
  </div>
);

const Service = () => {
  return (
    <div id="service" className="service__container">
      <ServiceBlock />
      <ServiceIconContainer />
      <ServiceRoomContainer />
      <ServiceImg />
      <ServiceBlockReverse />
    </div>
  );
};

export default Service;
