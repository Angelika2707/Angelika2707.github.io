import telegram from './images/telegram.png';
import mail from './images/envelope.png';
import github from './images/social.png';
import './css/contacts.css';

export default function Contacts() {
    return (
        <div id="contacts" class="contacts">
                <a class="icon1" id="tg-link" href='https://t.me/angelika782345'><img src={telegram} alt="Telegram" width="42" height="42" /></a>
                <a class="icon2" id="gh-link" href='https://github.com/Angelika2707'><img src={github} alt="Github" width="42" height="42" /></a>
                <a class="icon3" id="email" href='mailto:anzelika272011@gmail.com'><img src={mail} alt="Mail" width="42" height="42" /></a>
        </div>
    );
  }