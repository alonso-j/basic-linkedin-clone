import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AccountsContextProvider } from "./store/AccountsContext";

ReactDOM.render(
  <AccountsContextProvider>
    <App />
  </AccountsContextProvider>,
  document.getElementById("root")
);
