import "./navbar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Navbar = (props) => {

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    props.setIsLoggedOut()
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h3>Airlinex</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <i className="fa-solid fa-bars-staggered navbar-toggler-icon"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {props.isLoggedIn ? (
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-1">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item px-1">
                <Link className="nav-link" to="/booknow">
                  Book Now
                </Link>
              </li>
              <li className="nav-item px-1">
                <Link className="nav-link" to="/viewbookings">
                  View Bookings
                </Link>
              </li>
              <li className="nav-item px-1">
                <Link className="nav-link" to="/webcheckin">
                  Web Checkin
                </Link>
              </li>
              <li className="nav-item px-1">
                <Link className="nav-link" to="/weather">
                  Weather
                </Link>
              </li>
              <li className="nav-item px-1">
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-1">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item px-1">
                <Link className="nav-link" to="/booknow">
                  Book Now
                </Link>
              </li>
              <li className="nav-item px-1">
                <Link className="nav-link" to="/weather">
                  Weather
                </Link>
              </li>
              <li className="nav-item px-1">
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          )}
          <div className="header-right">
            {/* <div className="text-lg-end">
                        <button className="btn btn-primary">Logout</button>
                    </div> */}
            {!props.isLoggedIn ? (
              <div className="text-lg-end">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
              </div>
            ) : (
              <div className="text-lg-end">
                <button className="btn btn-primary" onClick={logoutHandler}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
