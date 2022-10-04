import Navbar from "../../Components/Navbar/navbar";
import "./HomePage.css";
import Lottie from "react-lottie";
import animation from "../../assets/lottie/homepage-animation.json";
import Features from "./Features";

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
        <div className="home-lottie">
          <Lottie options={defaultOptions}></Lottie>
        </div>
        <div className="home-salient">
          <Features></Features>
        </div>
      </main>
    </>
  );
};

export default HomePage;
