import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your pages
import LandingPage from "./pages/LandingPage";
import JoinRoomPage from "./pages/JoinRoomPage";
import CreateRoomPage from "./pages/CreateRoomPage";
import SwipePage from "./pages/SwipePage";

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join" element={<JoinRoomPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
        <Route path="/swipe" element={<SwipePage />} />
        {/* Add more routes as needed */}
      </Routes>
  );
};

export default App;
