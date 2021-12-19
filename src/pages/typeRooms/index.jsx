import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import auth from "../../services/authService";
import Card from "../../components/card";
import Loading from "../../components/loading";

import { DropdownButton, Dropdown, Row, Col, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import axios from "axios";
import "./room.css";

const SearchBar = ({ search, setSearch }) => {
  const onSearch = (message) => {
    console.log("message: " + message);
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
    if (event.target.checked) setFree(1);
    else setFree(0);
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

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("Room Number");
  const [isFree, setFree] = useState(0);

  const [header, setHeader] = useState({
    headers: {
      token: token,
      type: roomType,
      key: "room_num",
      isFree: isFree,
    },
  });

  let roomTitle = "";
  if (roomType === "1") roomTitle = "Deluxe Room";
  else if (roomType === "2") roomTitle = "Luxury Room";
  else if (roomType === "3") roomTitle = "Alchemy Villa";
  else if (roomType === "4") roomTitle = "Poker Villa";

  useEffect(() => {
    const headers = { ...header.headers, isFree };
    setHeader({ ...header, headers });
    console.log(headers);
  }, [isFree]);

  useEffect(() => {
    const fetchRoom = async () => {
      setLoading(true);
      checkDate();
      await axios
        .get("https://hotel-backend-api.herokuapp.com/api/room/sort/", header)
        .then((res) => {
          setLoading(false);
          setData(res.data);
          console.log(res.data);
        })
        .catch((ex) => console.log(ex));
    };

    const checkDate = async () => {
      await axios
        .get(
          "https://hotel-backend-api.herokuapp.com/api/room/check/date/",
          header
        )
        .then((res) => console.log(res.data));
    };

    fetchRoom();
  }, [header]);

  let filtered = data;
  if (search) {
    const queryName = filtered.filter((room) =>
      room.room_name.toLowerCase().includes(search.toLowerCase())
    );

    const queryNumber = filtered.filter((room) =>
      room.room_num.toString().includes(search)
    );

    const queryTypeNumber = filtered.filter((room) => {
      let roomType = "";
      if (room.room_type === 1 || room.room_type === 3) roomType = "a";
      else if (room.room_type === 2 || room.room_type === 4) roomType = "b";
      const roomTypeNumber = roomType + room.room_num.toString();
      if (roomTypeNumber.includes(search.toLowerCase())) return room;
      return null;
    });

    // filtered = queryName.concat(queryNumber);
    filtered = [...new Set([...queryNumber, ...queryName, ...queryTypeNumber])];
  }

  return (
    <div className="rooms__background">
      <div className="rooms__goHome">
        <Link to="/home">
          <ImHome className="icon--home" />
        </Link>
      </div>
      <div className="rooms__title">{roomTitle}</div>
      <div className="rooms__filters">
        <Row>
          <Col sm="5" md="4" xl="3">
            <SearchBar serach={search} setSearch={setSearch} />
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
          {filtered.map((room) => (
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
              disable={room.isFree}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TypeRooms;
