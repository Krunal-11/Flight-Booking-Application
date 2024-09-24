import React from "react";
import { Card, Box, Typography, Button, Divider } from "@mui/material";

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function FlightCard() {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "16px",
        alignItems: "center",
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 500,
        margin: "0 auto",
        marginTop: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2e/British_Airways_Logo.svg"
          alt="Airline"
          style={{ width: 60, height: 40, marginRight: "16px" }}
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
                <Typography variant="body2">13h 20</Typography>
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
                <Box item xs={3} sx={{ textAlign: "left" }}>
                  <Typography variant="h6">13:05</Typography>
                  <Typography variant="body2" color="textSecondary">
                    BOM
                  </Typography>
                </Box>
                <FlightTakeoffIcon sx={{ mx: 1, fontSize: 18 }} />
                <Box item xs={3} sx={{ textAlign: "right" }}>
                  <Typography variant="h6">21:55</Typography>
                  <Typography variant="body2" color="textSecondary">
                    NCL
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          ₹37,249
        </Typography>
        <Button variant="contained" color="primary" sx={{ borderRadius: 20 }}>
          Select →
        </Button>
      </Box>
    </Card>
  );
}

export default FlightCard;
