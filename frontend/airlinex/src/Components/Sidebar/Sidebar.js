import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 min-vh-100 bg-light">
          <ul>
            <li>
              <Link className="nav-link px-2" to="/">
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link px-2" to="/">
                <span className="ms-1 d-none d-sm-inline">Book Now</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link px-2" to="/Login">
                <span className="ms-1 d-none d-sm-inline">Contact</span>
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
