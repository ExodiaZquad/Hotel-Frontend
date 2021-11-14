import React from "react";
import { useParams } from "react-router";

const Room = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Room</div>;
};

export default Room;
