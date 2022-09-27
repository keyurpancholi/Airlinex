import Navbar from "../../Components/Navbar/navbar";
import "./HomePage.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-row-1">
          <div className="home-content">
            <h1>
              With Airlinex, <span>it's more than</span> just a trip
            </h1>
          </div>
          <div className="home-lottie">Lottie file goes here</div>
        </div>
        <div className="home-row-2">
          <Link to="/booknow">
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
