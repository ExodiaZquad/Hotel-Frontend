import React from "react";
import { Redirect, Switch, Route } from "react-router";
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
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/typeRooms">
          <TypeRooms />
        </Route>
        <Route path="/rooms">
          <Rooms />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Redirect path="/" to="/home" />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
