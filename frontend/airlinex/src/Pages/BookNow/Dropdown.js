import React from "react";
import "./Dropdown.css";

const Dropdown = (props) => {
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  const dropController = () => {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementByClassName("dropdown-content").classList.toggle("show");
  };

  return (
    // <div class="dropdown">
    //   <button onClick={dropController} className="dropbtn">
    //     {props.children}
    //   </button>
    //   <div id="myDropdown" className="dropdown-content">
    //     {props.options.map((item) => (
    //       <a href="#">{item}</a>
    //     ))}
    //   </div>
    // </div>

    <select name="myOptions" id="myOptions">
      <option value="" selected disabled hidden>Select choice</option>
      {props.options.map((item) => <option value={item}>{item}</option>)}
      {/* <option value="Mumbai">Mumbai</option>
      <option value="Delhi">Delhi</option>
      <option value="New York">New York</option>
      <option value="Boston">Boston</option> */}
    </select>
  );
};

export default Dropdown;
