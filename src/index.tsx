import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AuthProvider from "./components/Firebase/AuthProvider";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.querySelector("#root")
);
