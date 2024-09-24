import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginRegisterPage from "./LoginRegisterPage";
import HomePage from "./HomePage";
import ViewTripsPage from "./ViewTripsPage";
import BookingPage from "./BookingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginRegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/all-flights" element={<ViewTripsPage />} />
        <Route path="/booking" element={<BookingPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
