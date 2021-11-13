import React, { useEffect, useState } from "react";
import Card from "../../components/card";
// import useFetch from "../../hooks/useFetch";
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

const MyDropdown = ({ setSortType }) => {
  const onDropdownSelected = (event) => {
    setSortType(event);
  };
  return (
    <React.Fragment>
      <DropdownButton
        id="dropdown-basic-button"
        title="Sort by: Price"
        onSelect={onDropdownSelected}
      >
        <Dropdown.Item href="#/action-1" eventKey="option-1">
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" eventKey="option-2">
          Another action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" eventKey="option-3">
          Something else
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

const Rooms = () => {
  const BASE_URL = "http://127.0.0.1:8000/api/room/";
  // const { data, loading, error } = useFetch(BASE_URL);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");
  const [isFree, setFree] = useState(false);

  const fakeData = [
    {
      room_type: 1,
      room_name: "Rachaphruk",
      room_num: 101,
      price: 7000,
      detail: "",
      pic: "https://cdn.discordapp.com/attachments/909012998285307924/909013743709601832/pexels-hakim-santoso-5556177.jpg",
      isFree: true,
      exp_date: null,
      minPerson: 5,
      maxPerson: 9,
    },
    {
      room_type: 1,
      room_name: "Mahanakorn",
      room_num: 102,
      price: 7500,
      detail: "",
      pic: "https://cdn.discordapp.com/attachments/909012998285307924/909013757680820254/pexels-jonathan-borba-3144580.jpg",
      isFree: true,
      exp_date: null,
      minPerson: 5,
      maxPerson: 10,
    },
    {
      room_type: 1,
      room_name: "Narai",
      room_num: 103,
      price: 8000,
      detail: "",
      pic: "https://cdn.discordapp.com/attachments/909012998285307924/909014154529095751/41531.jpg",
      isFree: false,
      exp_date: null,
      minPerson: 7,
      maxPerson: 8,
    },
    {
      room_type: 1,
      room_name: "Baiyok",
      room_num: 104,
      price: 4500,
      detail: "",
      pic: "https://cdn.discordapp.com/attachments/909012998285307924/909013948743950376/pexels-max-vakhtbovych-7534554.jpg",
      isFree: true,
      exp_date: null,
      minPerson: 5,
      maxPerson: 6,
    },
    {
      room_type: 1,
      room_name: "Siam Century",
      room_num: 105,
      price: 10000,
      detail: "samples detail",
      pic: "https://cdn.discordapp.com/attachments/909012998285307924/909013761371803669/pexels-jonathan-borba-3316922.jpg",
      isFree: false,
      exp_date: null,
      minPerson: 9,
      maxPerson: 10,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios
        .get(BASE_URL)
        .then(setLoading(false))
        .catch((err) => setError(err));

      console.log(res);
      setData(res.data);
      console.log(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchSearch = async () => {
      setLoading(true);

      const headers = {
        headers: {
          key: "price",
        },
      };

      const res = await axios
        .get("http://127.0.0.1:8000/api/room/sort/", headers)
        .then(setLoading(false))
        .catch((err) => setError(err));
      console.log(res);
    };
    fetchSearch();
  }, [sortType]);

  return (
    <React.Fragment>
      {loading && <Spinner animation="border" variant="dark" />}
      <div className="rooms__title">Room Supalai A</div>
      <div className="rooms__filters">
        <Row>
          <Col sm="5" md="4" xl="3">
            <SearchBar setSearch={setSearch} />
          </Col>
          <Col sm="3">
            <MyDropdown setSortType={setSortType} />
          </Col>
          <Col>
            <Switch setFree={setFree} />
          </Col>
        </Row>
      </div>
      <div className="rooms__container">
        {fakeData.map((i) => (
          <Card key={i.pic} link={i.pic} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Rooms;
