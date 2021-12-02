import {React, useState} from 'react'  //rafce
import { MenuItems } from './MenuItems'
import './navbar.css'
import {Offcanvas, Button} from 'react-bootstrap' 


function Example() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <a className="nav_circle" onClick={handleShow}></a>
      <Offcanvas show={show} onHide={handleClose}>
      
        <div className="profile_top">
          <div className="profile_headText">
            My Profile
          </div>
          <div className="profile_top_image"></div>
          PlanC
        </div>

        <div>
          <ul className="profile_detail">
            <li>
              Name :
            </li>
            <li>
              Email :
            </li>
            <li>
              Phone :
            </li>
          </ul>
        </div>
        


      </Offcanvas>
    </>
  );
}

const Navbar = () => {
    return (
        <nav className="nav_all">
            <ul className="nav_menu">
                <a className="nav_exodia" href="#">EXODIA</a>
                <div className="nav_select">
                    {/* {MenuItems.map((item,index) => {
                        return (
                            <li key={index} >
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })} */}
                    <li>
                        <a className="nav_items" href="/home">Home</a>
                        <a className="nav_items" href="#">Service</a>
                        <a><Example></Example></a>
                        <a className="nav_items" href="#">Contact</a>
                        <a className="nav_items" href="#">Booking</a>
                    </li>
                </div> 
                <a className="nav_login" href="#">LOGIN</a>
            </ul>
        </nav>
    )
}

export default Navbar

