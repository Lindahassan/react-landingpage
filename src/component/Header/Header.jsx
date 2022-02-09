import React from "react";
import img from "../../assets/Vector.png";
import "./Header.css";

//Header
export default function Header() {
  return (
    <div className="Navbar">
      <header className="Header">
        <div className="logo">
          <img src={img} className="vector" alt="" />
          <h3>LaslesVPN</h3>
        </div>
        <nav className="Nav">
          <a>About</a>
          <a>Features</a>
          <a>Pricing</a>
          <a>Testimonials</a>
          <a>Help</a>
        </nav>
        <div className=" sign">
          <a>Sign In</a>
          <a className="signUp">Sign Up</a>
        </div>
      </header>
    </div>
  );
}
