import { Container, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { trip, number_of_people } = location.state || {};  // Match the passed keys

  console.log('navigated to booking page', trip);
  console.log('number of people:', number_of_people);

  return (
    <>
      <Container>
        <Typography>Book Tickets</Typography>
        
      </Container>
    </>
  );
};

export default BookingPage;
