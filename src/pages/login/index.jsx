import React, { useState } from "react";
import "./login.css";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { siblings } from "dom-helpers";

const SignIn = () => {
  const signup__click__signin = () => {
    const box = document.getElementById("contain");
    box.classList.toggle("change__page__to__signup");
  };

  return (
    <div id="contain" className="login__container">
      <div className="signup__left">
        <div className="signup__container">
          <div className="signup__header">Sign up</div>
          <div className="signup__input">
            <div className="firstname__lastname">
              <div className="signup__first">
                <i>
                  <FaUserAlt />
                </i>
                <input type="text" placeholder="Firstname" />
              </div>
              <div className="signup__first">
                <i>
                  <FaUserAlt />
                </i>
                <input type="text" placeholder="Lastname" />
              </div>
            </div>
            <div className="signup__another">
              <i>
                <MdEmail />
              </i>
              <input type="text" placeholder="Email" />
            </div>
            <div className="signup__another">
              <i>
                <BsFillTelephoneFill />
              </i>
              <input type="text" placeholder="Telephone" />
            </div>
            <div className="signup__another">
              <i>
                <FaUserAlt />
              </i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="signup__another">
              <i>
                <FaLock />
              </i>
              <input type="text" placeholder="Password" />
            </div>
            <button class="btn__signup" onClick={signup__click__signin}>
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="login__img">
        <div className="block__img"></div>
      </div>
      <div className="signin__right">
        <div className="signin__container">
          <div className="signin__header">Sign In</div>
          <div className="signin__input">
            <div className="signin__user">
              <i>
                <FaUserAlt />
              </i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="signin__pass">
              <i>
                <FaLock />
              </i>
              <input type="text" placeholder="Password" />
            </div>
            <button class="btn__signin">Sign in</button>
            <button class="btn__signup" onClick={signup__click__signin}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  return <SignIn />;
};

export default Login;
