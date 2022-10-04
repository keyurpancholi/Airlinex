import "./navbar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isUser, setisUser] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg ">
<<<<<<< HEAD
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
          {isUser ? (
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
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          )}
          <div className="header-right">
            <div className="text-lg-end">
              <button className="btn btn-primary">Logout</button>
=======
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
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item px-1">
                    <Link className="nav-link active" aria-current="page" to="/"
                      >Home</Link>
                  </li>
                  <li className="nav-item px-1">
                    <Link className="nav-link" to="/booknow">Book Now</Link>
                  </li>
                  <li className="nav-item px-1">
                    <Link className="nav-link" to="/viewbookings">View Bookings</Link>
                  </li>
                  <li className="nav-item px-1">
                    <Link className="nav-link" to="/webcheckin">Web Checkin</Link>
                  </li>
                  <li className="nav-item px-1">
                    <Link className="nav-link" to="/weather">Weather</Link>
                  </li>
                  <li className="nav-item px-1">
                    <Link className="nav-link" to="/">Contact</Link>
                  </li>
                </ul>
                <div className="header-right">
                    <div className="text-lg-end">
                        <button className="btn btn-primary">Logout</button>
                    </div>
                </div>
              </div>
>>>>>>> sakshi
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;