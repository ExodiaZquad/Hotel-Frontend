import React from "react";
import { Link } from "react-router-dom";
import room from "../../assets/img/room.png";
import { FaUserAlt } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import "./card.css";

const CardHeader = ({ link, roomType, roomNumber }) => {
  let roomTag = "";
  if (roomType === 1 || roomType === 3) roomTag += "A";
  else if (roomType === 2 || roomType === 4) roomTag += "B";
  roomTag += roomNumber;

  return (
    <div className="card__header ">
      <CardNumber roomNumber={roomTag} />
      <img src={link} alt="" className="card__img card__radius" />
    </div>
  );
};

const CardNumber = ({ roomNumber }) => (
  <div className="card__number">{roomNumber}</div>
);

const CardContent = ({ price, roomNumber, roomName, minPerson, maxPerson }) => (
  <div className="card__content card__radius">
    <div className="card__name">{roomName}</div>
    <div className="card__detail">
      <FaUserAlt size={22} style={{ color: "#bbb" }} />
      <div className="card__detail__text">
        {minPerson} - {maxPerson}
      </div>
    </div>
    <div className="card__detail">
      <FaMoneyBillAlt size={26} style={{ color: "#bbb" }} />
      <div className="card__detail__text">{price}</div>
    </div>
    <CardButton roomNumber={roomNumber} />
  </div>
);

const CardButton = ({ roomNumber }) => (
  <Link to={`/rooms/${roomNumber}`}>
    <div className="card__button">Book</div>
  </Link>
);

const Card = ({
  roomName,
  roomType,
  roomNumber,
  price,
  link,
  minPerson,
  maxPerson,
}) => {
  return (
    <div className="card__blocks card__radius">
      <CardHeader link={link} roomType={roomType} roomNumber={roomNumber} />
      <CardContent
        roomName={roomName}
        roomNumber={roomNumber}
        price={price}
        minPerson={minPerson}
        maxPerson={maxPerson}
      />
    </div>
  );
};

export default Card;
