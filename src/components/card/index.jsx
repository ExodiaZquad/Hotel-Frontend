import React from "react";
import room from "../../assets/img/room.png";
import { FaUserAlt } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import "./card.css";

const CardHeader = () => (
  <div className="card__header ">
    <CardNumber />
    <img src={room} alt="" className="card__img card__radius" />
  </div>
);

const CardNumber = () => <div className="card__number">A 101</div>;

const CardContent = () => (
  <div className="card__content card__radius">
    <div className="card__name">Room Supalai A</div>
    <div className="card__detail">
      <FaUserAlt size={22} style={{ color: "#bbb" }} />
      <div className="card__detail__text">5 - 6</div>
    </div>
    <div className="card__detail">
      <FaMoneyBillAlt size={26} style={{ color: "#bbb" }} />
      <div className="card__detail__text">1000 ~ 3000</div>
    </div>
    <CardButton />
  </div>
);

const CardButton = () => (
  <a className="card__button" href="./">
    Book
    {/* <a class="card__button__text">Book</a> */}
  </a>
);

const Card = () => {
  return (
    <div className="card__blocks card__radius">
      <CardHeader />
      <CardContent />
    </div>
  );
};

export default Card;
