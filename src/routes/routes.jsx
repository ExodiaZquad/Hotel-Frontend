import React from "react";
import { Redirect, Switch, Route } from "react-router";
import Booking from "../pages/booking";
import Home from "../pages/home";
import Login from "../pages/login";
import Profile from "../pages/profile";
import Rooms from "../pages/rooms";
import TypeRooms from "../pages/typeRooms";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/typeRooms">
          <TypeRooms />
        </Route>
        <Route path="/rooms">
          <Rooms />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Redirect path="/" exact to="/home" />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
