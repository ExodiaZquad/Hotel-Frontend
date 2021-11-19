import React, { useEffect, useState } from "react";
import auth from "../../services/authService";
import Card from "../../components/card";
import { Spinner } from "react-bootstrap";

import { DropdownButton, Dropdown, Row, Col, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import "./room.css";

const SearchBar = ({ setSearch }) => {
  const onSearch = (message) => {
    // console.log(message);
    setSearch(message);
  };

  return (
    <React.Fragment>
      <FaSearch className="search__icon" />
      <input
        type="text"
        className="rooms__input"
        placeholder="Search"
        onChange={(e) => onSearch(e.currentTarget.value)}
      />
    </React.Fragment>
  );
};

const MyDropdown = ({ title, setSortType }) => {
  const dropdownTitle = title;
  const onDropdownSelected = (event) => {
    setSortType(event);
  };
  return (
    <React.Fragment>
      <DropdownButton
        id="dropdown-basic-button"
        title={dropdownTitle}
        onSelect={onDropdownSelected}
      >
        <Dropdown.Item href="#/action-1" eventKey="Price">
          Price
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" eventKey="Capacity">
          Capacity
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" eventKey="Room Number">
          Room Number
        </Dropdown.Item>
      </DropdownButton>
    </React.Fragment>
  );
};

const Switch = ({ setFree }) => {
  const onSwitchChange = (event) => {
    setFree(event.target.checked);
    // console.log(event.target.checked);
  };

  return (
    <div className="rooms__switch">
      <Form.Check
        type="switch"
        id="custom-switch"
        onChange={onSwitchChange}
        // label="Only Free"
      />
    </div>
  );
};

const TypeRooms = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("Room Number");
  const [isFree, setFree] = useState(false);

  useEffect(() => {
    const token = auth.isAuthen();
    const header = {
      headers: {
        token: token,
        type: 3,
        key: "price",
      },
    };

    const fetchRoom = async () => {
      setLoading(true);
      console.log(token);
      try {
        const res = await axios.get(
          "https://hotel-backend-api.herokuapp.com/api/room/sort/",
          header
        );
        setLoading(false);
        console.log(res.data);
        setData(res.data);
      } catch (ex) {
        console.log(ex);
      }
    };

    fetchRoom();
  }, []);

  return (
    <div className="rooms__background">
      <div className="rooms__title">Room Supalai A</div>
      <div className="rooms__filters">
        <Row>
          <Col sm="5" md="4" xl="3">
            <SearchBar setSearch={setSearch} />
          </Col>
          <Col sm="3">
            <MyDropdown title={sortType} setSortType={setSortType} />
          </Col>
          <Col>
            <Switch setFree={setFree} />
          </Col>
        </Row>
      </div>

      {/* {loading && <Spinner animation="border" variant="dark" />} */}
      {loading && (
        <div className="spinner__container">
          <Spinner animation="border" variant="dark" />
        </div>
      )}

      {data && (
        <div className="rooms__container">
          {data.map((room) => (
            <Card
              key={room.id}
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
      )}
    </div>
  );
};

export default TypeRooms;
