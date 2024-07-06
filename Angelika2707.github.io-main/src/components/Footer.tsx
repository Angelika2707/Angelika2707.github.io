import React from "react";
import Contacts from "./Contacts";
import "./css/footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <Contacts />
      </div>
    </footer>
  );
};

export default Footer;
