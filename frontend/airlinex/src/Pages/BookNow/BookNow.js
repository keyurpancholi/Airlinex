import "./BookNow.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Card from "./Card";
const BookNow = () => {
  return (
    <Sidebar>
      <h1>Book Now</h1>
      <Card>
        <div className="tripInput">
          <div>
            <input type="radio" id="one-way-trip"></input>
            <label htmlFor="one-way-trip">one-way-trip</label>
          </div>
          <div>
            <input type="radio" id="two-way-trip"></input>
            <label htmlFor="two-way-trip">one-way-trip</label>
          </div>
        </div>
        <hr></hr>
        <div>Hello</div>
      </Card>
    </Sidebar>
  );
};

export default BookNow;
