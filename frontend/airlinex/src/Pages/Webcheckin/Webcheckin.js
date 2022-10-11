import React from "react";
import "./Webcheckin.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/Footer";
import React from "react";

const Webcheckin = (props) => {
  return (
    <>
      <Navbar isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} setIsLoggedOut={props.setIsLoggedOut} />
      <h1>Web checkin</h1>
      <Footer />
    </>
  );
};

export default Webcheckin;
