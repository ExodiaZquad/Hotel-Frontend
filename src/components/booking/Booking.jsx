import React from "react";
import { Link } from "react-router-dom";
import "./booking.css";

const TypeRoom = ({ img, text, link }) => (
  <div class="booking-type">
    <Link to={link}>
      <img src={img} alt="" />
    <div class="info">
      <h2>{text}</h2>
    </div>
    </Link>
  </div>
);
const Booking = () => {
  return (
    <div>
      <div class="booking-Head">
        <h2>Booking</h2>
      </div>
      <TypeRoom
        link="/typeRooms/rooma"
        img="https://media.discordapp.net/attachments/910957790992941129/910961565283520512/luxury-living-room-ideas.jpg?width=960&height=480"
        text="Room A"
      />
      <TypeRoom
        link="/typeRooms/roomb"
        img="https://media.discordapp.net/attachments/910957790992941129/910961561672224848/luxury-apartment-living-room-ideas.jpg?width=960&height=550"
        text="Room B"
      />
      <TypeRoom
        link="/typeRooms/housea"
        img="https://media.discordapp.net/attachments/910957790992941129/910961565694591036/luxury-house-with-pool-design.jpg?width=960&height=540"
        text="House A"
      />
      <TypeRoom
        link="/typeRooms/houseb"
        img="https://media.discordapp.net/attachments/910957790992941129/910961223242240130/modern-home-on-the-coast.jpg?width=960&height=593"
        text="House B"
      />
    </div>
  );
};

export default Booking;
