import React from "react";
import { Spinner } from "react-bootstrap";
import "./loadingPage.css";

const LoadingPage = () => {
  return (
    <div className="loading__page">
      <Spinner animation="border" variant="dark" />
    </div>
  );
};

export default LoadingPage;
