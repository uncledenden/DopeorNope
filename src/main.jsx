import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { RoomProvider } from "./RoomContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RoomProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </RoomProvider>
);
