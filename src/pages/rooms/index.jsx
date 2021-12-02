// import React, { useEffect, useState } from "react";
// import Fakedata from "../../services/fakeData";
// // import useFetch from "../../hooks/useFetch";
// import { Spinner } from "react-bootstrap";
// import Card from "../../components/card";
// import { DropdownButton, Dropdown, Row, Col, Form } from "react-bootstrap";
// import { FaSearch } from "react-icons/fa";
// import axios from "axios";
// import "./room.css";

// const SearchBar = ({ setSearch }) => {
//   const onSearch = (message) => {
//     // console.log(message);
//     setSearch(message);
//   };

//   return (
//     <React.Fragment>
//       <FaSearch className="search__icon" />
//       <input
//         type="text"
//         className="rooms__input"
//         placeholder="Search"
//         onChange={(e) => onSearch(e.currentTarget.value)}
//       />
//     </React.Fragment>
//   );
// };

// const MyDropdown = ({ title, setSortType }) => {
//   console.log("title " + title);
//   const dropdownTitle = title;
//   const onDropdownSelected = (event) => {
//     setSortType(event);
//   };
//   return (
//     <React.Fragment>
//       <DropdownButton
//         id="dropdown-basic-button"
//         title={dropdownTitle}
//         onSelect={onDropdownSelected}
//       >
//         <Dropdown.Item href="#/action-1" eventKey="Price">
//           Price
//         </Dropdown.Item>
//         <Dropdown.Item href="#/action-2" eventKey="Capacity">
//           Capacity
//         </Dropdown.Item>
//         <Dropdown.Item href="#/action-3" eventKey="Room Number">
//           Room Number
//         </Dropdown.Item>
//       </DropdownButton>
//     </React.Fragment>
//   );
// };

// const Switch = ({ setFree }) => {
//   const onSwitchChange = (event) => {
//     setFree(event.target.checked);
//     // console.log(event.target.checked);
//   };

//   return (
//     <div className="rooms__switch">
//       <Form.Check
//         type="switch"
//         id="custom-switch"
//         onChange={onSwitchChange}
//         // label="Only Free"
//       />
//     </div>
//   );
// };

// const Rooms = () => {
//   const BASE_URL = "http://127.0.0.1:8000/api/room/";

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const [search, setSearch] = useState("");
//   const [sortType, setSortType] = useState("Room Number");
//   const [isFree, setFree] = useState(false);

//   const [fakeData, setFakeData] = useState(Fakedata);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     setLoading(true);
//   //     const res = await axios
//   //       .get(BASE_URL)
//   //       .then(setLoading(false))
//   //       .catch((err) => setError(err));

//   //     console.log(res);
//   //     // setData(res.data);
//   //     // console.log(data);
//   //   };
//   //   fetchData();
//   // }, []);

//   // useEffect(() => {
//   //   const fetchSearch = async () => {
//   //     setLoading(true);

//   //     const headers = {
//   //       headers: {
//   //         key: "price",
//   //       },
//   //     };

//   //     const res = await axios
//   //       .get("http://127.0.0.1:8000/api/room/sort/", headers)
//   //       .then(setLoading(false))
//   //       .catch((err) => setError(err));
//   //     console.log(res);
//   //   };
//   //   fetchSearch();
//   // }, [sortType]);

//   return (
//     <div className="rooms__background">
//       {loading && <Spinner animation="border" variant="dark" />}
//       <div className="rooms__title">Room Supalai A</div>
//       <div className="rooms__filters">
//         <Row>
//           <Col sm="5" md="4" xl="3">
//             <SearchBar setSearch={setSearch} />
//           </Col>
//           <Col sm="3">
//             <MyDropdown title={sortType} setSortType={setSortType} />
//           </Col>
//           <Col>
//             <Switch setFree={setFree} />
//           </Col>
//         </Row>
//       </div>

//       <div className="rooms__container">
//         {fakeData.map((room) => (
//           <Card
//             key={room.room_num}
//             roomName={room.room_name}
//             roomType={room.room_type}
//             roomNumber={room.room_num}
//             price={room.price}
//             link={room.pic1}
//             minPerson={room.minPerson}
//             maxPerson={room.maxPerson}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Rooms;
