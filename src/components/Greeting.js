import logo from './images/programmer_cat.gif';
import './css/greeting.css';

export default function Greeting() {
    return (
      <div className="Greeting_container">
          <div class="text">
            <h1 class="greeting">Hi, I'm Anzhelika</h1>
            <p class="info">I'm a fullstack developer who makes open-source projects, code, design, and video games. Welcome to my site. 🐱</p>
          </div>
          <img src={logo} alt="Programmer cat" width="533" height="400" />
      </div>
    );
  }