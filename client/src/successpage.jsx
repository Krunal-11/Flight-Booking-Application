// you need to do following
// change departure location and arrival location to fetch names and display
//change duration from
// alter table and form to include phone number
//IMPROVE UI
import React, { useEffect, useState } from "react";

import {
  Grid,
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Container,
  CircularProgress,
  Box,
  Stepper,
  Step,
  StepLabel,
  TextField,
  MenuItem,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";
import FlightCard from "./tripscard";
import Nav from "./navbar";
import TicketDetails from "./tripdetails";
import Pay from "./payment";

// Step Labels for the Ticket Booking Process
const steps = [
  "Home Page",
  "Select Your Ticket",
  "Fill Details",
  "Payment",
  "Success",
];

const Payments = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { trip, number_of_people } = location.state || {};
  console.log("here:", trip);
  const [travelers, setTravelers] = useState(
    Array.from({ length: number_of_people }, () => ({
      name: "",
      age: "",
      gender: "Male",
      trip_id: trip.trip_id,
    }))
  );

  // Handle form field changes
  const handleInputChange = (index, field, value) => {
    const updatedTravelers = [...travelers];
    updatedTravelers[index][field] = value;
    setTravelers(updatedTravelers);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/api/user/travellers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(travelers),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit traveler details");
      }

      // Navigate to the success page after booking is confirmed
      navigate("/success", { state: { trip, travelers } });
    } catch (error) {
      console.error("Error submitting traveler details:", error);
    }
  };

  ///
  const [checked, setChecked] = useState({
    detailsCorrect: false,
    useDataForImprovement: false,
    acceptSalesEmails: false,
  });

  const handleCheckboxChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(null);
  const currentStep = 4; // Set this to track your current step dynamically

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Nav />
        <Typography variant="h6" color="error" align="center">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ padding: 0 }}>
      <Nav />
      <Grid container spacing={1} sx={{ height: "100vh", paddingTop: 9 }}>
        <Grid
          item
          xs={3}
          position="fixed"
          sx={{
            display: "flex",
            flexDirection: "column",

            height: "100%",
          }}
        >
          <Paper elevation={3} sx={{ padding: 2, flexGrow: 1 }}>
            {" "}
            {/* Use flexGrow to make the Paper fill available space */}
            <Typography variant="h5" align="center" gutterBottom>
              Ticket Booking Progress
            </Typography>
            <Stepper activeStep={currentStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel
                    sx={{
                      "& .MuiStepLabel-label": {
                        color: index <= currentStep ? "green" : "gray",
                        fontWeight: index === currentStep ? "bold" : "normal",
                      },
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Paper>
        </Grid>
        {/* Left Sidebar for Progress */}
        <Grid
          item
          xs={2.5}
          sx={{
            display: "flex",
            flexDirection: "column",

            height: "100%",
          }}
        ></Grid>
        {/* Centered Trips Section */}
        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <h2>Thanks for choosing us !</h2>
          <h2>Have a safe journy</h2>
        </Grid>
        {/* Right Info Section for Dos and Don'ts */}
        <Grid item xs={3.4}>
          <TicketDetails trip={trip} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Payments;
