import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Login from "./Pages/Login/Login"
import SignUpPage from "./Pages/SignUp/Signup";
import BookNow from "./Pages/BookNow/BookNow";
import ViewBookings from "./Pages/ViewBookings/ViewBookings"
import Webcheckin from "./Pages/Webcheckin/Webcheckin";
import Weather from "./Pages/Weather/weather";
import { useState } from "react";
import React from "react";
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const loginHandler = () => {
    console.log("inside app login handler")
    setIsAuthenticated(true)
  }
  
  const logoutHandler = () => {
    
    console.log("inside app logout handler")
    setIsAuthenticated(false)
  }

  return (
    <Routes>
      <Route path="/" exact element={<HomePage isLoggedIn={isAuthenticated} setIsLoggedIn={loginHandler} setIsLoggedOut={logoutHandler} />} />
      <Route path="/login" element={<Login setIsLoggedIn={loginHandler} />} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/booknow" element={<BookNow isLoggedIn={isAuthenticated} setIsLoggedIn={loginHandler} setIsLoggedOut={logoutHandler} />} />
      <Route path="/viewbookings" element={<ViewBookings isLoggedIn={isAuthenticated} setIsLoggedIn={loginHandler} setIsLoggedOut={logoutHandler}  />} />
      <Route path="/webcheckin" element={<Webcheckin isLoggedIn={isAuthenticated} setIsLoggedIn={loginHandler} setIsLoggedOut={logoutHandler} />} />
      <Route path="/weather" element={<Weather isLoggedIn={isAuthenticated} setIsLoggedIn={loginHandler} setIsLoggedOut={logoutHandler} />} />
    </Routes>
  );
}

export default App;
