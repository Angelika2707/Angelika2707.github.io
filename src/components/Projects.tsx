import React from "react";
import "./css/projects.css";

const Projects: React.FC = () => {
  return (
    <div id="resume" className="Projects">
      <div className="port">
        <h2>Portfolio</h2>

        <div className="project">
          <h3>Telegram bot for medication reminders</h3>
          <ul>
            <li>Stack: aiogram3, SQLAlchemy, apscheduler</li>
            <li>
              Project description: Development of a Telegram bot for business
              with registration of users through a questionnaire and issuance of
              personalised QR codes. The bot also has a function of managing
              users for super users.
            </li>
          </ul>
        </div>

        <div className="project">
          <h3>Telegram bot for business</h3>
          <ul>
            <li>Stack: aiogram3, SQLAlchemy, xlsxwriter</li>
            <li>
              Project description: A bot that sends reminders about medication
              intake for users
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
