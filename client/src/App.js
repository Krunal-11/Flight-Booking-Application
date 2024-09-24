import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginRegisterPage from "./LoginRegisterPage";
import HomePage from "./HomePage";
import ViewTripsPage from "./ViewTripsPage";
import BookingPage from "./BookingPage";
import Payment from "./Paymentprocess";
import Success from "./successpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginRegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/all-flights" element={<ViewTripsPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
