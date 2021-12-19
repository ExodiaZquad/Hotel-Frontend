import React from "react";
import Booking from "../../components/booking/Booking";
import Contact from "../../components/contact";
import Hero from "../../components/hero";
import Service from "../../components/servicesHotel";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Booking />
      <Contact />
    </div>
  );
};

export default Home;
