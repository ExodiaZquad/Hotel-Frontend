import React from "react";
import room from "../../assets/img/room.png";
import "./card.css";

const Card = () => {
  return (
    <div className="card__blocks">
      <div className="card__header">
        <img src={room} alt="" className="card__img" />
      </div>
      <div className="card__detail">
        <div className="card__name">Room Supalai A</div>
        <div className="card__people">5-6</div>
        <div className="card__price">1000 - 3000</div>
      </div>
    </div>
  );
};

export default Card;
