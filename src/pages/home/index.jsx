import axios from "axios";
import React, { useEffect } from "react";

import Booking from "../../components/booking/Booking";
import Hero from "../../components/hero";

const Home = () => {
  useEffect(() => {
    const fetch = async () => {
      const header = {
        headers: {
          token: localStorage.getItem("token"),
        },
      };

      const res = await axios.get(
        "https://hotel-backend-api.herokuapp.com/api/user/",
        header
      );
      console.log(res.data);
    };

    fetch();
  });
  return (
    <div>
      <Hero />
      <Booking />
    </div>
  );
};

export default Home;
