import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  CircularProgress,
  Box,
  Stepper,
  Step,
  StepLabel,
  Paper,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import FlightCard from "./tripscard";
import Nav from "./navbar";

// Step Labels for the Ticket Booking Process
const steps = [
  "Home Page",
  "Select Your Ticket",
  "Fill Details",
  "Payment",
  "Success",
];

const ViewTripsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(null);
  const currentStep = 1; // Set this to track your current step dynamically

  // Extract search data from the location state
  const { departureLocation, arrivalLocation, departureDate, numberOfTickets } =
    location.state || {};

  useEffect(() => {
    const fetchTrips = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "http://localhost:8080/api/user/search-flights",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              departure_loc_id: departureLocation,
              arrival_loc_id: arrivalLocation,
              trip_date: departureDate,
              number_of_people: numberOfTickets,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch trips");
        }

        const data = await response.json();
        console.log("line:66", data.trips);
        setTrips(data.trips);
        setNumberOfPeople(data.number_of_people);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, [departureLocation, arrivalLocation, departureDate, numberOfTickets]);

  const handleBookTrip = (trip) => {
    navigate("/booking", { state: { trip, number_of_people: numberOfPeople } });
  };

  // Conditional Rendering
  if (loading) {
    return (
      <Container sx={{ mt: 4 }}>
        <Nav />
        <Typography variant="h6" align="center">
          Loading trips...
        </Typography>
        <CircularProgress />
      </Container>
    );
  }

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
    <Box sx={{ padding: 0, background: "#FAF9F6" }}>
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
              Booking Progress
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
          xs={2}
          sx={{
            display: "flex",
            flexDirection: "column",

            height: "100%",
          }}
        ></Grid>
        {/* Centered Trips Section */}
        <Grid item xs={6.5}>
          <Typography variant="h4" align="center" gutterBottom>
            Available Trips
          </Typography>
          {!trips.length && (
            <Typography variant="h6" align="center">
              No flights available
            </Typography>
          )}
          <Grid container spacing={2} display={"flex"} flexDirection={"column"}>
            {trips.map((trip) => (
              <Grid item xs={11.5} key={trip.trip_id}>
                <FlightCard trip={trip} onBookTrip={handleBookTrip} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* Right Info Section for Dos and Don'ts */}
        <Grid item xs={3.4}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: "#f0f4f8" }}>
            <Typography variant="h5" gutterBottom>
              Dos and Don'ts While Boarding
            </Typography>
            <Typography variant="h6">Dos:</Typography>
            <ul>
              <li>
                Do arrive at the airport at least 2-3 hours before your flight.
              </li>
              <li>Do carry a valid photo ID and your boarding pass.</li>
              <li>Do check the airline's luggage policies.</li>
              <li>Do keep your valuables in your carry-on luggage.</li>
            </ul>
            <Typography variant="h6">Don'ts:</Typography>
            <ul>
              <li>
                Don't bring prohibited items like sharp objects, flammable
                materials, or liquids over 100ml.
              </li>
              <li>
                Don't forget to turn off your mobile devices during takeoff and
                landing.
              </li>
              <li>Don't leave your luggage unattended.</li>
              <li>
                Don't carry excessive cash; use credit/debit cards for
                convenience.
              </li>
            </ul>

            <Typography variant="h5" gutterBottom>
              Luggage Allowances
            </Typography>
            <Typography variant="body1">
              The maximum luggage allowance is typically 23 kg (50 lbs) for
              checked baggage and 7 kg (15 lbs) for carry-on luggage. Always
              check with your airline for specific allowances.
            </Typography>

            <Typography variant="h5" gutterBottom>
              Items Not to Carry
            </Typography>
            <ul>
              <li>Explosives and flammable materials.</li>
              <li>Sharp objects (knives, scissors).</li>
              <li>Self-defense items (pepper spray, etc.).</li>
              <li>Illegal drugs and substances.</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewTripsPage;
