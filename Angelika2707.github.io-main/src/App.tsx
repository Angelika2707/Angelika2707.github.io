import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./routes/Main";
import Comic_page from "./routes/Comic_page";

const App: React.FC = () => (
  <Router basename={""}>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/joke" element={<Comic_page />} />
    </Routes>
  </Router>
);

export default App;
