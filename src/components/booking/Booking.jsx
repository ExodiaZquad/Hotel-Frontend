import React from "react";
import { Link } from "react-router-dom";
import "./booking.css";

const TypeRoom = ({ img, text, link }) => (
  <div className="booking__type">
    <Link className="booking__link" to={link}>
      <div className="booking__info">
        <div className="text__info">
          <h2>{text}</h2>
        </div>
      </div>
      <div className="booking__hover"></div>
      <div className="booking__img">
        <img src={img} alt="" />
      </div>
    </Link>
  </div>
);

const Booking = () => {
  return (
    <div id="booking">
      <div className="booking-Head">
        <h2>Booking</h2>
      </div>
      <TypeRoom
        link="/typeRooms/1"
        img="https://media.discordapp.net/attachments/910957790992941129/910961565283520512/luxury-living-room-ideas.jpg?width=960&height=480"
        text="Room A"
      />
      <TypeRoom
        link="/typeRooms/2"
        img="https://media.discordapp.net/attachments/910957790992941129/910961561672224848/luxury-apartment-living-room-ideas.jpg?width=960&height=550"
        text="Room B"
      />
      <TypeRoom
        link="/typeRooms/3"
        img="https://media.discordapp.net/attachments/910957790992941129/910961565694591036/luxury-house-with-pool-design.jpg?width=960&height=540"
        text="House A"
      />
      <TypeRoom
        link="/typeRooms/4"
        img="https://media.discordapp.net/attachments/910957790992941129/910961223242240130/modern-home-on-the-coast.jpg?width=960&height=593"
        text="House B"
      />
    </div>
  );
};

export default Booking;
