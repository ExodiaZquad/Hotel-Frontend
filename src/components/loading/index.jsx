import React from "react";
import { Spinner } from "react-bootstrap";
import "./loading.css";

const Loading = () => {
  return (
    <div className="spinner__container">
      <Spinner animation="border" variant="dark" />
    </div>
  );
};

export default Loading;
