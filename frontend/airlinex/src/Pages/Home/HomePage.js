import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import "./HomePage.css";
import Lottie from "react-lottie";
import animation from "../../assets/lottie/homepage-animation.json";
import Features from "./Features";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../Components/Footer/Footer"


const HomePage = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };



  return (
    <>
      <Navbar isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} setIsLoggedOut={props.setIsLoggedOut} />
      <main>
        <div className="home-lottie">
          <Lottie options={defaultOptions}></Lottie>
        </div>
        <div className="home-salient">
          <Features></Features>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
