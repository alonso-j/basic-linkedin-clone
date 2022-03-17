import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AccountsContextProvider } from "./store/AccountsContext";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <AccountsContextProvider>
    <Router>
      <App />
    </Router>
  </AccountsContextProvider>,
  document.getElementById("root")
);
