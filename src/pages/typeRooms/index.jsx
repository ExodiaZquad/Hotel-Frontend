import React from "react";
import { Link } from "react-router-dom";

const TypeRooms = () => {
  return (
    <div>
      <h1>TypeRooms Page</h1>
      <Link to="/home">
        <img
          src="https://images.pexels.com/photos/10012559/pexels-photo-10012559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </Link>
    </div>
  );
};

export default TypeRooms;
