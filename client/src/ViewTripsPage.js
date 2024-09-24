import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Paper, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewTripsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extract search data from the location state
  const { departureLocation, arrivalLocation, departureDate, numberOfTickets } = location.state || {};

  useEffect(() => {
    const fetchTrips = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/api/user/search-flights', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            departure_loc_id: departureLocation, // This should be the ID from the dropdown selection
            arrival_loc_id: arrivalLocation, // This should be the ID from the dropdown selection
            trip_date: departureDate,
            number_of_people: numberOfTickets,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch trips');
        }
        console.log('state ',location.state)
        const data = await response.json();
        console.log('data',data);
        console.log('data .trips is ',data.trips.trips);
        setTrips(data.trips); // Set trips to the trips array from the response
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, [departureLocation, arrivalLocation, departureDate, numberOfTickets]);

  const handleBookTrip = (trip) => {
    // Handle booking logic (navigate to booking page with trip details)
    navigate('/booking', { state: { trip } });
  };
  {trips.length === 0 && ( // Add this line here
    <Typography variant="h6" align="center">
      No Flights Available
    </Typography>
  )}
  //if( trip)
  if (loading) return <Typography variant="h6">Loading trips...</Typography>;
  if (error) return <Typography variant="h6" color="error">{error}</Typography>;

  return (
    <Container>
      
      <Typography variant="h4" align="center" gutterBottom>
        Available Trips
      </Typography>
      {!trips.length && <Typography variant="h6" align="center">No flights available</Typography>}
      <Grid container spacing={2}>
        {trips.map((trip) => (
          <Grid item xs={12} md={6} key={trip.trip_id}> {/* Changed key to trip.trip_id */}
            <Paper elevation={3}>
              <Typography variant="h6">{trip.airportName}</Typography> {/* Use airportName for title */}
              <Typography>Departure: {new Date(trip.departure_time).toLocaleString()}</Typography>
              <Typography>Arrival: {new Date(trip.arrival_time).toLocaleString()}</Typography>
              <Typography>Price: ₹{trip.price}</Typography>
              <Button variant="contained" color="primary" onClick={() => handleBookTrip(trip)}>
                Book Now
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ViewTripsPage;
