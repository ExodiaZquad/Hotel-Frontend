import React from "react";
import Card from "../../components/card";
import { getRoom, getRandomRoom } from "../../services/fakeData";
import { useParams } from "react-router";
import { Carousel } from "react-bootstrap";
import {
  FaWifi,
  FaCoffee,
  FaDumbbell,
  FaSwimmer,
  FaArrowLeft,
} from "react-icons/fa";

import "./room.css";
import { Link } from "react-router-dom";

const MyCarousal = ({ room }) => {
  return (
    <Carousel fade variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={room.pic1} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={room.pic2} alt="Second slide" />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={room.pic3} alt="Third slide" />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

const Feature = ({ room }) => {
  return (
    <div className="feature__container">
      <div className="feature__block">
        <div className="feature__title">Features</div>
        <div className="feature__content">
          <ul>
            <li>
              <span>Room: {room.room_num}</span>
            </li>
            <li>
              <span>Room: 48 ms.</span>
            </li>
            <li>
              <span>Bed: 2</span>
            </li>
            <li>
              <span>Bath room: 2</span>
            </li>
            <li>
              <span>
                {room.minPerson} - {room.maxPerson} people
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="feature__block">
        <div className="feature__title">Services</div>
        <div className="feature__service">
          <FaWifi />
          <span className="feature__service__text">Wifi</span>
        </div>
        <div className="feature__service">
          <FaCoffee />
          <span className="feature__service__text">Breakfast</span>
        </div>
        <div className="feature__service">
          <FaDumbbell />
          <span className="feature__service__text">Fitness</span>
        </div>
        <div className="feature__service">
          <FaSwimmer />
          <span className="feature__service__text">Swimming pool</span>
        </div>
      </div>
    </div>
  );
};

const BookButton = () => {
  return <div className="book__button">Booking</div>;
};

const Room = () => {
  const { id } = useParams();
  const room = getRoom(id);
  const random = getRandomRoom();
  console.log(random);

  return (
    <div className="room__overpage">
      <div className="room__arrow">
        <Link to="/rooms">
          <FaArrowLeft />
          <span className="arrow__text">Back</span>
        </Link>
      </div>
      <div className="room__page">
        <div className="room__content">
          <div className="room__carousal">
            <MyCarousal room={room[0]} />
          </div>
          <div className="room__detail">
            <Feature room={room[0]} />
            <BookButton />
          </div>
        </div>
        <div className="room__recommend">
          {random.map((room) => (
            <Card
              key={room.room_num}
              roomName={room.room_name}
              roomType={room.room_type}
              roomNumber={room.room_num}
              price={room.price}
              link={room.pic1}
              minPerson={room.minPerson}
              maxPerson={room.maxPerson}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Room;
