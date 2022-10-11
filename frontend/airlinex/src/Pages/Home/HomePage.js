import Navbar from "../../Components/Navbar/navbar";
import "./HomePage.css";
import Lottie from "react-lottie";
import animation from "../../assets/lottie/homepage-animation.json";
import Features from "./Features";
import Alert from "../../Components/Alert/Alert";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
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
      <Navbar />

      <main>
        <Alert type="failure"></Alert>
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
