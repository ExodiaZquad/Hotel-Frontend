import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import { Link } from "react-router-dom";
import { getRoom, getRandomRoom } from "../../services/fakeData";
import { useParams } from "react-router";
import { Carousel, Modal, Button } from "react-bootstrap";
import {
  FaWifi,
  FaCoffee,
  FaDumbbell,
  FaSwimmer,
  FaArrowLeft,
} from "react-icons/fa";

import "./room.css";
import "./modal.css";

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
        <h1 className="feature__name">{room.room_name}</h1>
      </div>

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

      <BookButton />
    </div>
  );
};

const BookButton = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <div className="book__button" onClick={() => setModalShow(true)}>
        Booking
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Room = () => {
  const { id } = useParams();
  const room = getRoom(id);

  const [random, setRandom] = useState([]);

  useEffect(() => {
    setRandom(getRandomRoom(id));
  }, [id]);

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
          </div>
        </div>
        <div className="room__recommend">
          {random.map((room) => (
            <Card
              key={room.pic1}
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
