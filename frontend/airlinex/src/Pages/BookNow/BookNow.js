import "./BookNow.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Card from "./Card";
import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BookNow = () => {
  const fromOptions = ["Mumbai", "Delhi", "New York", "Boston"];
  const toOptions = ["Andheri", "Delhi", "New York", "Boston"];

  return (
    <Sidebar>
      <h1>Book Now</h1>
      <Card>
        <div className="tripInputPrim">
          <div>
            <input type="radio" name="trip_type" id="one-way-trip"></input>
            <label htmlFor="one-way-trip">One-way-trip</label>
          </div>
          <div className="spacer"></div>
          <div>
            <input type="radio" name="trip_type" id="two-way-trip"></input>
            <label htmlFor="two-way-trip">Two-way-trip</label>
          </div>
        </div>
        <hr></hr>
        <div>
          <div className="tripInputRow">
            <div className="tripInputCol">
              <label for="myFromDropdown">From</label>
              <Dropdown id="myFromDropdown" options={fromOptions}>
                Choose source
              </Dropdown>
            </div>
            <div className="tripInputCol">
              <label for="myToDropdown">To</label>
              <Dropdown id="myToDropdown" options={toOptions}>
                Choose destination
              </Dropdown>
            </div>
            <div className="tripInputCol">
              <label for="departDate">Depart</label>
              <input type="date" id="departDate"></input>
            </div>
            <div className="tripInputCol">
              <label for="arriveDate">Arrive</label>
              <input type="date" id="arriveDate"></input>
            </div>
          </div>
        </div>
        <div></div>
      </Card>
    </Sidebar>
  );
};

export default BookNow;
