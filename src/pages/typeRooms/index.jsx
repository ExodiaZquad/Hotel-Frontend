import React, { useEffect, useState } from "react";
import auth from "../../services/authService";
import Card from "../../components/card";
import Loading from "../../components/loading";

import { DropdownButton, Dropdown, Row, Col, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import "./room.css";
import { useParams } from "react-router";

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

const MyDropdown = ({ title, setSortType, header, setHeader }) => {
  const dropdownTitle = title;
  const onDropdownSelected = (event) => {
    let temp = { ...header };
    setSortType(event);
    if (event === "Price") temp.headers.key = "price";
    else if (event === "Capacity") temp.headers.key = "min_person";
    else if (event === "Room Number") temp.headers.key = "room_num";
    console.log(temp);
    setHeader(temp);
  };
  return (
    <React.Fragment>
      <DropdownButton
        id="dropdown-basic-button"
        title={dropdownTitle}
        onSelect={onDropdownSelected}
      >
        <Dropdown.Item eventKey="Price">Price</Dropdown.Item>
        <Dropdown.Item eventKey="Capacity">Capacity</Dropdown.Item>
        <Dropdown.Item eventKey="Room Number">Room Number</Dropdown.Item>
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
  const token = auth.isAuthen();
  const { id: roomType } = useParams();
  const [header, setHeader] = useState({
    headers: {
      token: token,
      type: roomType,
      key: "room_num",
    },
  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("Room Number");
  const [isFree, setFree] = useState(false);

  useEffect(() => {
    const fetchRoom = async () => {
      setLoading(true);
      await axios
        .get("https://hotel-backend-api.herokuapp.com/api/room/sort/", header)
        .then((res) => {
          setLoading(false);
          setData(res.data);
        })
        .catch((ex) => console.log(ex));
    };

    fetchRoom();
  }, [header]);

  return (
    <div className="rooms__background">
      <div className="rooms__title">Room Supalai A</div>
      <div className="rooms__filters">
        <Row>
          <Col sm="5" md="4" xl="3">
            <SearchBar setSearch={setSearch} />
          </Col>
          <Col sm="3">
            <MyDropdown
              title={sortType}
              setSortType={setSortType}
              header={header}
              setHeader={setHeader}
            />
          </Col>
          <Col>
            <Switch setFree={setFree} />
          </Col>
        </Row>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="rooms__container">
          {data.map((room) => (
            <Card
              key={room.id}
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
      )}
    </div>
  );
};

export default TypeRooms;
