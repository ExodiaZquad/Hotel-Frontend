import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import Loading from "../../components/loading";
import { useParams } from "react-router";
import { Carousel, Modal, Button } from "react-bootstrap";
import {
  FaWifi,
  FaCoffee,
  FaDumbbell,
  FaSwimmer,
  FaArrowLeft,
} from "react-icons/fa";
import axios from "axios";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";

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
                {room.min_person} - {room.max_person} people
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
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  const onSuccess = () => {
    console.log(selectedDayRange);
  };

  useEffect(() => {
    // console.log(selectedDayRange);
  }, [selectedDayRange]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Pick Date</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Calendar
          value={selectedDayRange}
          onChange={setSelectedDayRange}
          minimumDate={utils().getToday()}
          shouldHighlightWeekends
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onSuccess()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Room = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [room, setRoom] = useState([]);
  const [random, setRandom] = useState([]);

  useEffect(() => {
    const header = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };

    const fetch = async () => {
      let response = [];
      setLoading(true);
      await axios
        .get(`https://hotel-backend-api.herokuapp.com/api/room/${id}/`, header)
        .then((res) => (response = res.data))
        .catch((ex) => console.log(ex));

      console.log(response);
      setRoom(response[0]);
      setRandom([response[1], response[2], response[3]]);
      setLoading(false);
    };
    fetch();
    // setRandom(getRandomRoom(id));
  }, [id]);

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="room__overpage">
      <div className="room__arrow" onClick={goBack}>
        <FaArrowLeft />
        <span className="arrow__text">Back</span>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="room__page">
          <div className="room__content">
            <div className="room__carousal">
              <MyCarousal room={room} />
            </div>
            <div className="room__detail">
              <Feature room={room} />
            </div>
          </div>

          <div className="room__recommend">
            {random.map((room) => (
              <Card
                key={room.pic1}
                roomId={room.id}
                roomName={room.room_name}
                roomType={room.room_type}
                roomNumber={room.room_num}
                price={room.price}
                link={room.pic1}
                minPerson={room.min_person}
                maxPerson={room.max_person}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Room;
