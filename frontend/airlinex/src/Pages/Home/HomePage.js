import Navbar from "../../Components/Navbar/navbar";
import "./HomePage.css";
import Lottie from "react-lottie";
import animation from "../../assets/lottie/homepage-animation.json";

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
      <div className="lottie">
        <Lottie options={defaultOptions}></Lottie>
      </div>
        <h1>Home page</h1>
    </>
  );
};

export default HomePage;
