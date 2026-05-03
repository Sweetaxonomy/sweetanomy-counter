import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// CSS
import "../styles/index.css";

// Components
import Home from "./components/Home";

let counter = 0;
const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(<Home seconds={counter} />);
  counter++;
}, 1000);