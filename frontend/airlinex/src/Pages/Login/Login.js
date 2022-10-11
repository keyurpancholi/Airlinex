import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const LoginPage = () => {
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(email.current.value, password.current.value);
    navigate("/");
  };

  return (
    <div className="login-outer-container">
      <div className="login-container">
        <div className="login-heading">
          <h2>Airlinex</h2>
        </div>
        <div className="login-email">
          <input
            type="text"
            placeholder="Email"
            className="hello"
            ref={email}
          />
        </div>

        <span className="login-seperator"></span>

        <div className="login-password">
          <input
            type="password"
            placeholder="Password"
            className="hello"
            ref={password}
          />
        </div>

        <span className="login-seperator"></span>

        <div className="login-fa-icons">
          {/* <div className="login-fa-item">
            <FontAwesomeIcon
              icon={faGoogle}
              color="white"
              height="10px"
            ></FontAwesomeIcon>
          </div>
          <div className="login-fa-item">
            <FontAwesomeIcon icon={faFacebook} color="white"></FontAwesomeIcon>
          </div>
          <div className="login-fa-item">
            <FontAwesomeIcon icon={faGithub} color="white"></FontAwesomeIcon>
          </div> */}
          <FontAwesomeIcon
            icon={faGoogle}
            color="white"
            height="10px"
          ></FontAwesomeIcon>

          <FontAwesomeIcon icon={faFacebook} color="white"></FontAwesomeIcon>

          <FontAwesomeIcon icon={faGithub} color="white"></FontAwesomeIcon>
        </div>

        <div className="login-submit-container">
          <button className="loginbtn" onClick={loginHandler}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
