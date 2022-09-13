import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
  );
}

export default App;
