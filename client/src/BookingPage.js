import { Container, Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom"

const BookingPage= ()=>{
    const location = useLocation();
    const navigate = useNavigate();

    const data = location.state || {};
    console.log('navigated to booking page',data);


    return (<>
    <Container>
        <Typography>
            Book Tickets
        </Typography>

    </Container>
 </>);
}

export default BookingPage;