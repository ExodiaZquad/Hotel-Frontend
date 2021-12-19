import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import auth from "../../services/authService";
import "./hero.css";

function ShowProfile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user, setUser] = useState({});
  const [bookingHistory, setBookginHistory] = useState([]);
  const isAuthen = auth.isAuthen();

  useEffect(() => {
    const fetch = async () => {
      const header = {
        headers: {
          token: localStorage.getItem("token"),
        },
      };

      let res = await axios.get(
        "https://hotel-backend-api.herokuapp.com/api/user/",
        header
      );

      setUser(res.data[0]);
      res.data.shift();
      setBookginHistory(res.data);
    };

    fetch();
  }, []);

  console.log("user", user);
  console.log("history", bookingHistory);

  return (
    <>
      <div className="navbar__icon" onClick={handleShow}></div>
      {isAuthen && (
        <Offcanvas show={show} onHide={handleClose}>
          <div className="profile__container">
            <div className="profile__background"></div>
            <div className="profile__title">MY PROFILE</div>
            <ProfileUser
              username={user.user_name}
              email={user.email}
              firstName={user.first_name}
              lastName={user.last_name}
              tel={user.tel}
            />
            <BookingHistory history={bookingHistory} />
          </div>
        </Offcanvas>
      )}
    </>
  );
}

const ProfileUser = ({ username, email, firstName, lastName, tel }) => {
  return (
    <div className="profile__user">
      <div className="profile__img">
        <img
          src="https://cdn.discordapp.com/attachments/904607198263509024/921813770521677844/iconfinder-3-avatar-2754579_120516.png"
          alt=""
        />
      </div>
      <div className="profile__username">{username}</div>
      <div className="profile__email">{email}</div>
      <div className="profile__text">Firstname: {firstName}</div>
      <div className="profile__text">Lastname: {lastName}</div>
      <div className="profile__text">Telephone: {tel}</div>
    </div>
  );
};

const BookingHistory = ({ history }) => {
  return (
    <div className="profile__history">
      <div className="history__title">Booking History</div>
      <div className="history__container">
        {history.map((room) => (
          <HistoryCard
            key={room.id}
            name={room.room_name}
            type={room.room_type}
            number={room.room_num}
            img={room.pic1}
            from={room.from_date}
            to={room.exp_date}
          />
        ))}
      </div>
    </div>
  );
};

const HistoryCard = ({ name, type, number, from, to, img }) => {
  from = from.split("T")[0];
  to = to.split("T")[0];

  let newType = "";
  if (type === 1 || type === 3) newType = "A";
  else if (type === 2 || type === 4) newType = "B";

  let colorCard = "";
  if (type === 1) colorCard = "history--yellow";
  else if (type === 2) colorCard = "history--red";
  else if (type === 3) colorCard = "history--blue";
  else if (type === 4) colorCard = "history--green";

  const links = window.location.origin + `/rooms/${img}`;

  return (
    <div className={`history__card ${colorCard}`}>
      <div className="history__img">
        <img src={links} alt="" />
      </div>
      <div className="history__detail">
        <div className="history__name">
          {name} {newType}
          {number}
        </div>
        <div className="history__date">From: {from}</div>
        <div className="history__date">To: {to}</div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const isAuthen = auth.isAuthen();

  const handleLogout = () => {
    auth.logout();
    window.location.reload(true);
  };

  return (
    <div className="navbar__container">
      <div className="navbar__name">Exodia</div>
      <div className="navbar__content">
        <div className="navbar__items">
          <div className="navbar__item">
            <a href="#home">Home</a>
          </div>
          <div className="navbar__item">
            <a href="#service">Service</a>
          </div>
          <div className="underline underline--left"></div>
        </div>
        <ShowProfile />
        <div className="navbar__items">
          <div className="navbar__item">
            <a href="#booking">Booking</a>
          </div>
          <div className="navbar__item">
            <a href="#contact">Contact</a>
          </div>
          <div className="underline underline--right"></div>
        </div>
      </div>
      {isAuthen ? (
        <div className="navbar__button__container" onClick={handleLogout}>
          <div className="navbar__button">Logout</div>
        </div>
      ) : (
        <div className="navbar__button__container">
          <Link to="/login">
            <div className="navbar__button">Login</div>
          </Link>
        </div>
      )}
    </div>
  );
};

const HeroContent = () => (
  <div className="hero__content">
    <div className="hero__block">
      <div className="hero__heading">EXODIA RESORT</div>
      <div className="hero__tagline">
        Come, stay and enjoy your day. <br />
        The finest hotel at the best price.
      </div>

      <a href="#booking" className="hero__button">
        Let's Booking
      </a>
    </div>
  </div>
);

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__backdrop">
        <HeroContent />
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
