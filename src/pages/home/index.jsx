import {React, useState} from "react";
import Navbar from "../../components/navbar";
import './home.css'
import {Button, Offcanvas} from 'react-bootstrap' 


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="home_back">AIAIA</div>
        <Example></Example>
    </div>
  );
};



export default Home;
