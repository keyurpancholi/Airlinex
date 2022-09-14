import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Login/Login";
import SignUpPage from "./Pages/SignUp/Signup";
import BookNow from "./Pages/BookNow/BookNow";
import ViewBookings from "./Pages/ViewBookings/ViewBookings"
import Webcheckin from "./Pages/Webcheckin/Webcheckin";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/booknow" element={<BookNow/>} />
      <Route path="/viewbookings" element={<ViewBookings/>} />
      <Route path="/webcheckin" element={<Webcheckin/>} />
    </Routes>
  );
}

export default App;
