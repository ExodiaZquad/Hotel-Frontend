import React from "react";
import { getRoom } from "../../services/fakeData";
import { useParams } from "react-router";
import { Carousel } from "react-bootstrap";
import "./room.css";

const MyCarousal = ({ room }) => {
  return (
    <Carousel fade variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={room.pic1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={room.pic2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={room.pic3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const Room = () => {
  const { id } = useParams();
  const room = getRoom(id);
  console.log(room[0]);

  return (
    <div className="room__page">
      <div className="room__content">
        <div className="room__carousal">
          <MyCarousal room={room[0]} />
        </div>
        <div className="room__detail"></div>
      </div>
      <div className="room__recommend">{/* <Card /> */}</div>
    </div>
  );
};

export default Room;
