import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const FlightCard = () => {
  return (
    <Box
      p={2}
      border="1px solid #e0e0e0"
      borderRadius="8px"
      maxWidth="400px"
      m="auto"
      boxShadow={2}
    >
      <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <img
          src=""
          alt="Airline"
          style={{ width: 60, height: 40, marginRight: "16px" }}
        />

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

      <Divider sx={{ my: 2 }} />

      <Box display="flex" alignItems="center">
        <FlightTakeoffIcon sx={{ mr: 1, color: "#1976d2" }} />
        <Typography variant="body2">IndiGo 6E2118</Typography>
      </Box>

      <Box
        mt={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="body2">12:30</Typography>
          <Typography variant="caption" color="textSecondary">
            GWL Gwalior
          </Typography>
        </Box>
        <Box
          textAlign="right"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography variant="body2">13:25</Typography>
          <Typography variant="caption" color="textSecondary">
            DEL Indira Gandhi International
          </Typography>
        </Box>
      </Box>

      <Box mt={2} display="flex" justifyContent="space-between">
        <Typography variant="caption" color="textSecondary">
          Arrives: Thu, 26 Sep 2024
        </Typography>
        <Typography variant="caption" color="textSecondary">
          Journey duration: 0h 55
        </Typography>
      </Box>
    </Box>
  );
};

export default FlightCard;
