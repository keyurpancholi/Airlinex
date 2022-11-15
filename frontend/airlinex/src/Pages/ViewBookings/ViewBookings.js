import "./ViewBookings.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/Footer";
import FlightCard from "../../Components/FlightCard/FlightCard";
import { Link } from "react-router-dom";
import React from "react";

const ViewBookings = () => {
  const dummydata = [
    {
      flightNumber: "AIC-804",
      source: "BLR",
      destination: "DEL",
    },
    {
      flightNumber: "6E-911",
      source: "MUM",
      destination: "GOA",
    },
  ];
  return (
    <>
      <Navbar />
      {dummydata.length == 0 && <div className="viewBookingsEmpty"><h2>Oops! No flights found. <Link to='/bookNow'>Book now</Link></h2></div>}
      {dummydata.length > 0 && dummydata.map((flight, index) => {
        return <FlightCard flightData={flight}></FlightCard>;
      })}
      {/* <FlightCard flightData={dummydata}></FlightCard> */}
      {/* Style details */}
      {/* FontAwesome icons for webcheckin */}
      <Footer />
    </>
  );
};

export default ViewBookings;
