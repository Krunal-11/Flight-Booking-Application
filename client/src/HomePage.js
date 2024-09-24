import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Box,
  TextField,
  Autocomplete,
  Grid,
  Card,
  CardMedia,
  CardContent,
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
  card: {
    margin: "1rem",
  },
}));

// Array of destinations with image URLs
const destinations = [
  {
    title: "Delhi",
    image:
      "https://s3.india.com/travel/wp-content/uploads/2016/08/shutterstock-redfort1.jpg",
  },
  {
    title: "Mumbai",
    image: "https://media.timeout.com/images/105241451/1024/576/image.webp",
  },
  {
    title: "Kashmir",
    image:
      "https://www.trekpanda.in/system/images/000/591/409/79d97f40c7cbd93e047c68147f2c9f09/x1200gt/praneet-kumar-H8dcf-v98mA-unsplash.jpg?1671953013",
  },
  {
    title: "Jaipur",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg",
  },
  {
    title: "Agra",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR1zbN_KSGRBLlI6oxZRSg_x0niJLHXd-awGCZKfr3qGgGJeq624-tSOu3pvyGqZw5pMkvRvcDoq9s9z_iJfFeA-dNjA9uDmA-kgchoCg",
  },
  {
    title: "Goa",
    image:
      "https://media.digitalnomads.world/wp-content/uploads/2021/02/20120605/goa.jpg",
  },
  {
    title: "Kerala",
    image:
      "https://www.indiautentica.com/wp-content/webp-express/webp-images/uploads/2022/10/29ezcwtmtnm.jpg.webp",
  },
  {
    title: "Udaipur",
    image:
      "https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2Fcover%20photo.jpg%2Fcover%20photo-1696914123916.jpg&w=3840&q=75",
  },
  {
    title: "Rishikesh",
    image: "https://realhappiness.org/images/laxman-jhula.jpg",
  },
];

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
          paddingTop: 15,
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

      {/* Best Places To Visit Section */}
      <Box sx={{ padding: 4, backgroundColor: "#e0f7fa" }}>
        <Typography variant="h4" sx={{ marginBottom: 3, textAlign: "center" }}>
          Best Places To Visit
        </Typography>
        <Grid container spacing={2}>
          {destinations.map((destination, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  height="200"
                  image={destination.image}
                  alt={destination.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {destination.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default HomePage;
