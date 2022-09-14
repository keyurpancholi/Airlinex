import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="row min-vh-100 align-items-center">
        <div className="col-sm-4 px-5 py-5 form-div">
          <form>
            <h2 className="login-heading">Login</h2>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <Link to="/">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Link>
            <Link to="/signup">
              <h3>Don't have an account? Sign Up</h3>
            </Link>
          </form>
        </div>
        <div className="col-sm-8 align-items-center">
          <h1>Login here</h1>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;