import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import reportWebVitals from "./reportWebVitals";
import "./api/axios.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer autoClose={1500} />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
