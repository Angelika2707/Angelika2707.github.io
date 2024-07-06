import React from "react";
import "./css/about_me.css";

const AboutMe: React.FC = () => {
  return (
    <div id="about" className="about_me">
      <div className="introduction">
        <h2>About me</h2>
        <p>
          My name is Anzhelika Akhmetova. I am a student of Innopolis
          University, Software Development. I am a developer looking to gain
          experience in the IT industry. To improve my skills, I am actively
          solving algorithmic problems on the Leetcode platform, as well as
          developing pet projects both in a team and independently.
        </p>
      </div>

      <div className="skills">
        <h3>Key skills</h3>
        <ul>
          <li>Mastery and understanding of SOLID and OOP principles</li>
          <li>
            Knowledge and ability to implement basic algorithms and data
            structures data
          </li>
          <li>Experience with aiogram and sqlalchemy</li>
          <li>Working with Git</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
