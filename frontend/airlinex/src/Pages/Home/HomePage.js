import Sidebar from "../../Components/Sidebar/Sidebar";
import "./HomePage.css";
import CarouselImages from "./CarouselImages";
import CarouselController from "./CarouselController";
import image from "./../../assets/images/Tag.jpg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";

const HomePage = () => {
  return (
    <div class="home">
      <Sidebar>
        {/* <div className="container">
          <div className="row">
            <div className="col-10">
              <h1>With Airlinex, it's more than just a Trip</h1>
            </div>
            <div className="row">
              <div className="col-10">
                <CarouselController></CarouselController>
              </div>
            </div>
          </div>
        </div> */}
            <h1>With Airlinex, it's more than just a Trip</h1>
            <CarouselController></CarouselController>
      </Sidebar>
    </div>
  );
};

export default HomePage;
