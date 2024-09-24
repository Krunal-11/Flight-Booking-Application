import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Box,
  TextField,
  Autocomplete,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import Nav from "./navbar";

import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "5rem",
    padding: "2rem",
    backgroundColor: "#e0f7fa",
  },
  searchContainer: {
    padding: "2rem",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
  },
}));

function HomePage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const [searchData, setSearchData] = useState({
    departureLocation: "",
    arrivalLocation: "",
    departureDate: "",
    numberOfTickets: "",
  });

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/admin/locations"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLocations(data); // Assuming this returns an array of location objects
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("navigating with data :", searchData);
    navigate("/all-flights", { state: searchData });
  };

  return (
    <Box>
      {/* App Bar Section */}
      <Nav />

      {/* Search Form Section */}
      <Box
        sx={{
          backgroundColor: "#f0f4f8",
          padding: 4,
          textAlign: "center",
          color: "#001e3c",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Millions of cheap flights. One simple search.
        </Typography>

        <Box
          sx={{
            padding: 3,
            backgroundColor: "#ffffff",
            borderRadius: 3,
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <form onSubmit={handleSearch}>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              {/* Departure Field */}
              <Grid item xs={12} sm={3}>
                <Autocomplete
                  options={locations}
                  getOptionLabel={(option) => option.city_name}
                  onChange={(event, newValue) =>
                    setSearchData({
                      ...searchData,
                      departureLocation: newValue ? newValue.loc_id : "",
                    })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Departure Location"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                  sx={{
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                      "& fieldset": {
                        borderColor: "lightgray",
                      },
                      "&:hover fieldset": {
                        borderColor: "#001e3c",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#001e3c",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Arrival Field */}
              <Grid item xs={12} sm={3}>
                <Autocomplete
                  options={locations}
                  getOptionLabel={(option) => option.city_name}
                  onChange={(event, newValue) =>
                    setSearchData({
                      ...searchData,
                      arrivalLocation: newValue ? newValue.loc_id : "",
                    })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Arrival Location"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                  sx={{
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                      "& fieldset": {
                        borderColor: "lightgray",
                      },
                      "&:hover fieldset": {
                        borderColor: "#001e3c",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#001e3c",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Departure Date */}
              <Grid item xs={12} sm={2}>
                <TextField
                  label="Departure Date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={searchData.departureDate}
                  onChange={(e) => {
                    const selectedDate = new Date(e.target.value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);

                    if (selectedDate >= today) {
                      setSearchData({
                        ...searchData,
                        departureDate: e.target.value,
                      });
                    } else {
                      alert("Please select a present or future date.");
                    }
                  }}
                  sx={{
                    backgroundColor: "white",
                    "& input": {
                      backgroundColor: "white",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                      "& fieldset": {
                        borderColor: "lightgray",
                      },
                      "&:hover fieldset": {
                        borderColor: "#001e3c",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#001e3c",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Travelers Field */}
              <Grid item xs={12} sm={2}>
                <TextField
                  label="Number of Tickets"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={searchData.numberOfTickets}
                  onChange={(e) =>
                    setSearchData({
                      ...searchData,
                      numberOfTickets: e.target.value,
                    })
                  }
                  sx={{
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                      "& fieldset": {
                        borderColor: "lightgray",
                      },
                      "&:hover fieldset": {
                        borderColor: "#001e3c",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#001e3c",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Search Button */}
              <Grid item xs={12} sm={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{
                    backgroundColor: "#ff5a5f",
                    color: "white",
                    padding: "15px 0",
                    borderRadius: 3,
                    "&:hover": {
                      backgroundColor: "#e0484d",
                    },
                  }}
                  startIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
