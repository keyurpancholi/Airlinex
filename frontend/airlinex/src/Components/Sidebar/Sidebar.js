import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 min-vh-100 sidebar">
          <ul>
            <li>
              <Link className="nav-link px-2 py-3 link" to="/">
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link px-2 py-3" to="/booknow">
                <span className="ms-1 d-none d-sm-inline">Book Now</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link px-2 py-3" to="/viewbookings">
                <span className="ms-1 d-none d-sm-inline">View Bookings</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link px-2 py-3" to="/webcheckin">
                <span className="ms-1 d-none d-sm-inline">Web Check in</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-auto">{props.children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
