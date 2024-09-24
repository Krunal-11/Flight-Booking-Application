import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import FlightCard from "./tripscard"; // Ensure you're importing the correct component

const ViewTripsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(null);

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

  if (loading) return <Typography variant="h6">Loading trips...</Typography>;
  if (error)
    return (
      <Typography variant="h6" color="error">
        {error}
      </Typography>
    );

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Available Trips
      </Typography>
      {!trips.length && (
        <Typography variant="h6" align="center">
          No flights available
        </Typography>
      )}
      <Grid container spacing={2}>
        {trips.map((trip) => (
          <Grid item xs={12} md={6} key={trip.trip_id}>
            <FlightCard trip={trip} /> {/* Pass the entire trip object here */}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ViewTripsPage;
