import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const LoginPage = () => {

  const email = useRef()
  const password = useRef()

  const navigate = useNavigate()

  const loginHandler = e => {
    e.preventDefault();
    console.log(email.current.value, password.current.value)
    navigate('/')
  }

  return (
    <div className="login-outer-container">
      <div className="login-container">
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Type your email" ref={email} />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Type your password" ref={password} />
        <button className="btn btn-success" type="submit"  onClick={loginHandler}>
          Login
        </button>
        <p>
          Don't have an account? <Link to="/signup">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
