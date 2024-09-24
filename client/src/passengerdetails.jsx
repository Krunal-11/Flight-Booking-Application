import React from "react";
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Divider,
} from "@mui/material";

function PassengerCard() {
  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "20px auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: 3,
        bgcolor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "10px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Passenger 1
        </Typography>
        <Typography variant="body2" color="textSecondary">
          ID:535
        </Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <RadioGroup row defaultValue="male">
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Name should be as per government ID
        </Typography>

        <TextField
          label="First and Middle Name"
          variant="outlined"
          fullWidth
          size="small"
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          size="small"
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <TextField
          variant="outlined"
          label="Date of Birth"
          fullWidth
          size="small"
          helperText="Please enter date of birth in (DD-MM-YYYY) format i.e. 25-04-1998"
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          variant="outlined"
          label="Phone number"
          type="phonenumber"
          fullWidth
          size="small"
        />
      </Box>
    </Box>
  );
}

export default PassengerCard;
