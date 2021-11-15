import React from "react";
import "./login.css";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const SignIn = () => {
  return (
    <div className="signin">
        <div className="signin__left">
          <div className="img__shape"></div>
        </div>
        <div className="signin__right">
            <div className="signin__container">
                <div className="signin__header">Sign In</div>
                <form action="" className="signin__form">
                    <div className="input__user"> 
                      <FaUserAlt className="user__icon"/>
                      <input type="text" placeholder="Username" />
                    </div>
                    <div className="input__pass">
                      <FaLock className="user__icon"/>
                      <input type="text" placeholder="Password"/>
                    </div>
                </form>
                <button class="btn__signin" id="sign-in-btn">
                Sign in
                </button>
                <button class="btn__signup" id="sign-up-btn">
                Sign up
                </button>
            </div>
        </div>
    </div>
  );
};
const SignUp = () => {
  return(
    <div className="signup">
      <div className="signup__left">
        <div className="signup__container">
            <div className="signup__header">Sign up</div>
            <div className="signup__input">
              <div >
                <input type="text" placeholder="Firstname" className="signup__first" />
                <input type="text" placeholder="Lastname" className="signup__last" />
              </div>
              <div>
                <input type="text" placeholder="Email" className="signup__another" />
              </div>
              <div>
                <input type="text" placeholder="Telephone" className="signup__another" />
              </div>
              <div>
                <input type="text" placeholder="Username" className="signup__another" />
              </div>
              <div>
                <input type="text" placeholder="Password" className="signup__another" />
              </div>
              <button class="btn__signup" id="sign-up-btn">
                Sign up
              </button>
            </div>
        </div>
      </div>
      <div className="signup__right"></div>
    </div>
    
  );
};
const Login = () => {
  return <SignUp/>;
  // return <SignIn />;
};

export default Login;
