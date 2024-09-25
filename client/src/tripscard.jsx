import React from "react";
import { Card, Box, Typography, Button, Divider } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function FlightCard({ trip, onBookTrip }) {
  // Destructure trip from props
  const {
    arrival_time,
    departure_time,
    departureCityName,
    departureIataCode,
    arrivalIataCode,
    arrivalCityName,
    price,
    trip_duration,
  } = trip; // Destructure necessary properties from trip

  return (
    <Card
      sx={{
        display: "flex",
        padding: "16px",
        borderRadius: 2,
        boxShadow: 3,
        width: "100%", // Ensure the card takes the full width of the container
        margin: "0 auto",
        marginTop: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <img
          src="/airindia.png"
          alt="Airline"
          style={{
            width: 60,
            height: 60,
            marginRight: "16px",
          }}
        />
        {/* Flight Details */}
        <Box sx={{ flexGrow: 1 }}>
          <Box container spacing={1} alignItems="center">
            <Box item xs={6} sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AccessTimeIcon sx={{ mr: 1, fontSize: 14 }} />
                <Typography variant="body2">{trip_duration} min</Typography>
              </Box>
            </Box>

            <Box item xs={6} sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Box sx={{ textAlign: "left", flexGrow: 1 }}>
                  <Typography variant="h6">
                    {new Date(departure_time).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {departureIataCode}
                  </Typography>
                </Box>
                <FlightTakeoffIcon sx={{ mx: 1, fontSize: 18 }} />
                <Box sx={{ textAlign: "right", flexGrow: 1 }}>
                  <Typography variant="h6">
                    {new Date(arrival_time).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {arrivalIataCode}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

      <Box sx={{ textAlign: "center", flexShrink: 0 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          ₹{price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: 20 }}
          onClick={() => onBookTrip(trip)}
        >
          Next →
        </Button>
      </Box>
    </Card>
  );
}

export default FlightCard;
