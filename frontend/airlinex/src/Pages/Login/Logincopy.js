import { useEffect, useRef, useState } from "react";
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

  const [isLoading, setIsLoading] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(
        (response) => {
          return response.json();
        }
      )
      .then((data) => {
        localStorage.setItem('token', data.token)
        localStorage.setItem('userId', data.userId)
        setIsLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <div className="login-outer-container">
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
          <div className="login-fa-item">
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
          </div>
        </div>

        <div className="login-submit-container">
          <button className="loginbtn" onClick={loginHandler}>
            Log in
          </button>
        </div>

        <p style={{color: "white"}}>Dont have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>}
    </>
  );
};

export default LoginPage;
