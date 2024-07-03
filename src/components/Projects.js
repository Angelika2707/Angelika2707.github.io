import './css/projects.css';

export default function Projects() {
    return (
        <div id="resume" class="Projects">
                <div class="port">
                    <h2>Portfolio</h2>
                    <h3>Telegram bot for medication reminders</h3>
                    <ul>
                        <li>Stack: aiogram3, SQLAlchemy, apscheduler</li>
                        <li>Project description: Development of a Telegram bot for business with
                        registration of users through a questionnaire and issuance of personalised QR codes.
                        personal QR codes. The bot also has a function of managing
                        users for super users.</li>
                    </ul>

                    <h3>Telegram bot for business</h3>
                    <ul>
                        <li>Stack: aiogram3, SQLAlchemy, xlsxwriter</li>
                        <li>Project description: A bot that sends reminders about medication intake for users</li>
                    </ul>
                </div>
            </div>
    );
  }