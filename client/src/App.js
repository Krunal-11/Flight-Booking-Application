import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginRegisterPage from "./LoginRegisterPage";
import HomePage from "./HomePage";
import SearchPage from "./SearchFlights";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginRegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<SearchPage />} />

        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
