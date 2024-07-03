import './App.css';
import Header from './components/Header';
import Greeting from './components/Greeting';
import About_me from './components/About_me';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Comic from './components/Comic';

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <About_me />
      <Projects />
      <Comic />
      <Contacts />
    </div>
  );
}

export default App;
