import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {

const [btnName,setbtnName]=useState("Login")

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            alt="not available"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="btn-login" onClick={()=>{
              btnName==="Login"?setbtnName("Logout"):setbtnName("Login")}}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;