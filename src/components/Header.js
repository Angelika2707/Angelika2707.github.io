import './css/header.css';

export default function Header() {
    return (
      <div className="Header">
        <header>
          <div class="navbar-orientation">
              <nav class="navbar">
                  <a class="item1" href="index.html">About Me</a>
                  <a class="item2" href="index.html#resume">Portfolio</a>
                  <a class="item3" href="index.html#contacts">Contact Me</a>
                  <a class="item4" href="#">Joke</a>
              </nav>
          </div>
      </header>
      </div>
    );
  }