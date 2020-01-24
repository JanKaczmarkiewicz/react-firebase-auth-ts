import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Switch from "./Router/Switch";

const App = () => (
  <Router>
    <header>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">register</Link>
        </li>
      </ul>
    </header>
    <Switch />
  </Router>
);

export default App;
