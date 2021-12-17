import React from "react";
import { Link } from "react-router-dom";
import "./booking.css";

const TypeRoom = ({ img, text, link }) => (
  <div className = "booking__box">
    <Link className="booking__link" to={link}>
      <div className="booking__type">
        <div className="booking__info">
          <div className="text__info">
            <h2>{text}</h2>
          </div>
        </div>
        <div className="booking__hover"></div>
        <div className="booking__img">
          <img src={img} alt="" />
        </div>
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
        img="https://media.discordapp.net/attachments/910957790992941129/921304548251930634/92288-beach-house-wallpaper-4k.jpg?width=1082&height=676"
        text="Room A"
      />
      <TypeRoom
        link="/typeRooms/2"
        img="https://media.discordapp.net/attachments/910957790992941129/921305796309045268/359088-makaha-beach-house-4k-wallpaper-and-background.jpg?width=1014&height=676"
        text="Room B"
      />
      <TypeRoom
        link="/typeRooms/3"
        img="https://media.discordapp.net/attachments/910957790992941129/921305124406689823/23472-free-download-beach-house-wallpaper-2015-hd-beach-desktop.jpg?width=1335&height=676"
        text="House A"
      />
      <TypeRoom
        link="/typeRooms/4"
        img="https://media.discordapp.net/attachments/910957790992941129/921306106645606410/100283-free-download-beach-house-wallpaper-1920x1080.jpg?width=1202&height=676"
        text="House B"
      />
    </div>
  );
};

export default Booking;
