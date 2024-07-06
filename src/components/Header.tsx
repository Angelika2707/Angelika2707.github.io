import React from "react";
import "./css/header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [, setActiveLink] = React.useState("");

  const handleNavLinkClick = (
    id: string,
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();
    setActiveLink(id);

    const element = document.getElementById(id);

    if (element) {
      if (window.location.pathname === "/") {
        element.scrollIntoView();
      } else {
        navigate(`/#${id}`);
        setTimeout(() => {
          const newElement = document.getElementById(id);
          if (newElement) {
            newElement.scrollIntoView();
          } else {
            navigate("/");
          }
        }, 0);
      }
    } else {
      navigate("/");
    }
  };

  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setActiveLink(id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location]);

  return (
    <div className="Header">
      <header>
        <div className="navbar-orientation">
          <nav className="navbar">
            <a
              href="/#about"
              className="item1"
              onClick={(e) => handleNavLinkClick("about", e)}
            >
              About Me
            </a>
            <a
              href="/#portfolio"
              className="item2"
              onClick={(e) => handleNavLinkClick("resume", e)}
            >
              Portfolio
            </a>
            <a
              href="/#contact"
              className="item1"
              onClick={(e) => handleNavLinkClick("contacts", e)}
            >
              Contact Me
            </a>
            <Link to="/joke" className="item4">
              Joke
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
