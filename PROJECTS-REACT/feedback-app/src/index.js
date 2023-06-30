import React from "react";
import ReactDOM from "react-dom/client"; // allow us to interact with the DOM and the browser
import App from "./App";
import './index.css'

// strictmode activates additional checks / code reviews to code
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); // render App component in the root
