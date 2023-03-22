import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const domElement = document.getElementById('root');

ReactDOM.createRoot(domElement as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
