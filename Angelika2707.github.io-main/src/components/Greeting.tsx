import React from "react";
import logo from "./images/programmer_cat.gif";
import "./css/greeting.css";

const Greeting: React.FC = () => {
  return (
    <div className="Greeting_container">
      <div className="text">
        <h1 className="greeting">Hi, I&apos;m Anzhelika</h1>
        <p className="info">
          I&apos;m a fullstack developer who makes open-source projects, code,
          design, and video games. Welcome to my site. 🐱
        </p>
      </div>
      <img src={logo} alt="Programmer cat" width="533" height="400" />
    </div>
  );
};

export default Greeting;
