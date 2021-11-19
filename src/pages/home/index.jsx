import React from "react";
import Navbar from "../../components/navbar";
import './home.css'
import Booking from "../../components/booking/Booking";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="home_back"></div>
        {/* <h1>Home Page</h1> */}
        <Booking />
    </div>
  );
};


export default Home;
