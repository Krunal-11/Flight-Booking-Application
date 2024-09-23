import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Grid, Paper, Autocomplete } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '5rem',
    padding: '2rem',
    backgroundColor: '#e0f7fa', 
  searchContainer: {
    padding: '2rem',
    borderRadius: '8px',
    backgroundColor: '#ffffff', 
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const [searchData, setSearchData] = useState({
    departureLocation: '',
    arrivalLocation: '',
    departureDate: '',
    numberOfTickets: '',
  });

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/admin/locations');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLocations(data); 
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/view-trips', { state: searchData });
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        Flight Booking Application
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper className={classes.searchContainer} elevation={3}>
            <Typography variant="h5" align="center" gutterBottom>
              Search for Flights
            </Typography>
            <form onSubmit={handleSearch}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    options={locations}
                    getOptionLabel={(option) => option.city_name}
                    onChange={(event, newValue) => 
                      setSearchData({ ...searchData, departureLocation: newValue ? newValue.city_name : '' })
                    }
                    renderInput={(params) => (
                      <TextField {...params} label="Departure Location" variant="outlined" fullWidth />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    options={locations}
                    getOptionLabel={(option) => option.city_name}
                    onChange={(event, newValue) => 
                      setSearchData({ ...searchData, arrivalLocation: newValue ? newValue.city_name : '' })
                    }
                    renderInput={(params) => (
                      <TextField {...params} label="Arrival Location" variant="outlined" fullWidth />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
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
                    setSearchData({ ...searchData, departureDate: e.target.value });
                    } else {
                    alert("Please select a present or future date.");
                        }
                    }}
                    />

                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Number of Tickets"
                    type="number"
                    variant="outlined"
                    fullWidth
                    value={searchData.numberOfTickets}
                    onChange={(e) => setSearchData({ ...searchData, numberOfTickets: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" type="submit" fullWidth>
                    Search Flights
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
