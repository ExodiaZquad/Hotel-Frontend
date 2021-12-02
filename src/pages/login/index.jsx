import React, { useState } from "react";
import auth from "../../services/authService";
import { Redirect } from "react-router";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./login.css";

const SignIn = () => {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [signUp, setSignUp] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    username: "",
    password: "",
  });

  const handleChangeSignIn = ({ currentTarget: input }) => {
    const temp = { ...account };
    temp[input.name] = input.value;

    setAccount(temp);
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();

    try {
      console.log(account.username, account.password);
      await auth.login(account.username, account.password);

      window.location = "/";
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleChangeSignUp = ({ currentTarget: input }) => {
    const temp = { ...signUp };
    temp[input.name] = input.value;

    setSignUp(temp);
  };

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();
    // console.log(signUp);
    try {
      // console.log(account.username, account.password);
      await auth.register(signUp);

      window.location.reload(true);
    } catch (ex) {
      console.log(ex);
    }
  };

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
                <input
                  type="text"
                  placeholder="Firstname"
                  name="firstname"
                  value={signUp.firstname}
                  onChange={handleChangeSignUp}
                />
              </div>
              <div className="signup__last">
                <i>
                  <FaUserAlt />
                </i>
                <input
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  value={signUp.lastname}
                  onChange={handleChangeSignUp}
                />
              </div>
            </div>
            <div className="signup__another">
              <i>
                <MdEmail />
              </i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={signUp.email}
                onChange={handleChangeSignUp}
              />
            </div>
            <div className="signup__another">
              <i>
                <BsFillTelephoneFill />
              </i>
              <input
                type="text"
                placeholder="Telephone"
                name="tel"
                value={signUp.tel}
                onChange={handleChangeSignUp}
              />
            </div>
            <div className="signup__another">
              <i>
                <FaUserAlt />
              </i>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={signUp.username}
                onChange={handleChangeSignUp}
              />
            </div>
            <div className="signup__another">
              <i>
                <FaLock />
              </i>
              <input
                type="text"
                placeholder="Password"
                name="password"
                value={signUp.password}
                onChange={handleChangeSignUp}
              />
            </div>
            <button
              className="btn__signup"
              onClick={(e) => {
                handleSubmitSignUp(e);
              }}
            >
              Sign up
            </button>
            <button className="btn__signin" onClick={signup__click__signin}>
              Sign in
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
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChangeSignIn}
                value={account.username}
                autoComplete="off"
              />
            </div>
            <div className="signin__pass">
              <i>
                <FaLock />
              </i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChangeSignIn}
                value={account.password}
                autoComplete="off"
              />
            </div>
            <button className="btn__signin" onClick={handleSubmitSignIn}>
              Sign in
            </button>
            <button className="btn__signup" onClick={signup__click__signin}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  if (auth.isAuthen()) return <Redirect to="/" />;

  return <SignIn />;
};

export default Login;
