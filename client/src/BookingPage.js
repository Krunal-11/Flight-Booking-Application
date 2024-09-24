// you need to do following
// change departure location and arrival location to fetch names and display
//change duration from 
// alter table and form to include phone number
//IMPROVE UI

import React, { useState } from "react";
import { Container, Typography, TextField, Grid, Button, MenuItem } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { trip, number_of_people } = location.state || {};
  const [travelers, setTravelers] = useState(
    Array.from({ length: number_of_people }, () => ({ name: "", age: "", gender: "Male", trip_id: trip.trip_id }))
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
      const response = await fetch("http://localhost:8080/api/user/travellers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(travelers),
      });

      if (!response.ok) {
        throw new Error("Failed to submit traveler details");
      }

      // Navigate to the success page after booking is confirmed
      navigate("/success", { state: { trip, travelers } });
    } catch (error) {
      console.error("Error submitting traveler details:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Confirm Your Booking
      </Typography>

      {/* Trip Details */}
      <Typography variant="h6">Trip Details</Typography>
      <Typography>Departure Location: {trip.departure_loc_id}</Typography>
      <Typography>Arrival Location: {trip.arrival_loc_id}</Typography>
      <Typography>Trip Date: {new Date(trip.trip_date).toLocaleDateString()}</Typography>
      <Typography>Trip Duration: {trip.trip_duration} minutes</Typography>
      <Typography>Departure Time: {new Date(trip.departure_time).toLocaleString()}</Typography>
      <Typography>Arrival Time: {new Date(trip.arrival_time).toLocaleString()}</Typography>

      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>
          Traveler Details
        </Typography>

        {travelers.map((traveler, index) => (
          <Grid container spacing={2} key={index} marginBottom={2}>
            <Grid item xs={12} md={4}>
              <TextField
                label={`Traveler ${index + 1} Name`}
                variant="outlined"
                fullWidth
                required
                value={traveler.name}
                onChange={(e) => handleInputChange(index, "name", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField
                label="Age"
                variant="outlined"
                type="number"
                fullWidth
                required
                value={traveler.age}
                onChange={(e) => handleInputChange(index, "age", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                select
                label="Gender"
                variant="outlined"
                fullWidth
                value={traveler.gender}
                onChange={(e) => handleInputChange(index, "gender", e.target.value)}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Grid>
            
          </Grid>
        ))}

        <Button variant="contained" color="primary" type="submit" fullWidth>
          Confirm Booking
        </Button>
      </form>
    </Container>
  );
};

export default BookingPage;
