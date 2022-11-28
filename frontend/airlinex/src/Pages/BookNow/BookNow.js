import "./BookNow.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "../../Components/Card/Card";
import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/Footer";
import React,{ useState } from "react";

const BookNow = (props) => {
  const fromOptions = ["New Delhi", "Mumbai", "Dubai", "Madrid", "London", "Kuala Lumpur", "Moskow" ];
  const toOptions = ["Los Angeles", "Singapore", "London", "Bangkok", "Stockholm", "Glasgow", "Beijing", "Larnaka"];

  const [isLoading, setIsLoading] = useState(false);
  const [isFlights, setIsFlights] = useState([]);
  const [flightType, setFlightType] = useState("");
  const [flightSource, setFlightSource] = useState("");
  const [flightDestination, setFlightDestination] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [arriveDate, setArriveDate] = useState("");
  //TODO: Add time in form

  const searchFlightsHandler = () => {
    setIsLoading(true);
    // hardcoded the query params for now, to be changed later
    console.log(flightSource, flightDestination)
    fetch(`http://localhost:8080/getFlights?source=New Delhi&destination=Los Angeles`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        console.log(flightType, flightSource, flightDestination);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setIsFlights(data.flights);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const bookflightHandler = (flight) => {
    console.log(flight._id)
    const flightId = flight._id
    setIsLoading(true)
    fetch("http://localhost:8080/bookflight/" + flightId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        
        setIsLoading(false)
      });
  };

  return (
    <>
      <Navbar isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} setIsLoggedOut={props.setIsLoggedOut} ></Navbar>
      {isLoading && <p>Loading...</p>}
      {!isLoading && isFlights.length === 0 && (
        <Card>
          <div className="tripInputPrim">
            <div>
              <input type="radio" name="trip_type" id="one-way-trip" onChange={(e) => setFlightType(e)}></input>
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
              <div className="tripInputIntermediate">
                <div className="tripInputCol">
                  <div className="tripInputLabelRow">   
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z" />
                    </svg>
                    <label for="myFromDropdown" style={{ display: "inline" }}>
                      From
                    </label>
                  </div>
                  <Dropdown id="myFromDropdown" options={fromOptions} value={flightSource} onChange={(e) => setFlightSource(e)}>
                    Choose source
                  </Dropdown>
                </div>
                <div className="tripInputCol">
                  <div className="tripInputLabelRow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M.3 166.9L0 68C0 57.7 9.5 50.1 19.5 52.3l35.6 7.9c10.6 2.3 19.2 9.9 23 20L96 128l127.3 37.6L181.8 20.4C178.9 10.2 186.6 0 197.2 0h40.1c11.6 0 22.2 6.2 27.9 16.3l109 193.8 107.2 31.7c15.9 4.7 30.8 12.5 43.7 22.8l34.4 27.6c24 19.2 18.1 57.3-10.7 68.2c-41.2 15.6-86.2 18.1-128.8 7L121.7 289.8c-11.1-2.9-21.2-8.7-29.3-16.9L9.5 189.4c-5.9-6-9.3-14-9.3-22.5zM32 448H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm160-80c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zm64 48c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
                    </svg>
                    <label for="myToDropdown">To</label>
                  </div>
                  <Dropdown id="myToDropdown" options={toOptions} value={flightDestination} onChange={(e) => setFlightDestination(e)}>
                    Choose destination
                  </Dropdown>
                </div>

                <div className="tripInputCol">
                  <div className="tripInputLabelRow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                    </svg>
                    <label for="departDate">Depart</label>
                  </div>
                  <input type="date" id="departDate" onChange={(e) => setDepartDate(e)}></input>
                </div>
                <div className="tripInputCol">
                  <div className="tripInputLabelRow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                    </svg>
                    <label for="arriveDate">Arrive</label>
                  </div>
                  <input type="date" id="arriveDate" onChange={(e) => setArriveDate(e)}></input>
                </div>
              </div>
              <div className="searchIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  onClick={searchFlightsHandler}
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM288 176c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-48 0c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
                </svg>
              </div>
            </div>
          </div>
        </Card>
      )}
      {!isLoading &&
        isFlights.length > 0 &&
        isFlights.map((flight) => (
          <div className="flightcard">
            <div className="flightcard-info">
              <div className="flightcardContainer">
                <h3>Flight Number</h3>
                {flight.flightNumber}
              </div>
              <div className="flightcardContainer">
                <h3>Source</h3>
                {flight.source}
              </div>
              <div className="flightcardContainer">
                <h3>Destination</h3>
                {flight.destination}
              </div>
            </div>
            <button
              type="button"
              class="btn btn-success"
              onClick={() => {
                bookflightHandler(flight)
              }}
            >
              Book
            </button>
          </div>
        ))}
      <Footer />
    </>
  );
};

export default BookNow;