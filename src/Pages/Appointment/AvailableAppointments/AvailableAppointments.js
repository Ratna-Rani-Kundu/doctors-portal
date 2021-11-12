import React, { useState } from 'react';
import {Grid,Container,Box,Typography, Alert} from '@mui/material';
import Booking from '../Booking/Booking';
const AvailableAppointments = ({date}) => {
   const [bookingSuccess,setBookingSuccess]=useState(false)
    const bookings=[
        {
            id:1,
            name:'Teeth Orthodonics',
            time:'08.00 AM - 09.00AM',
            space:10
        },
        {
            id:2,
            name:'Cosmetic Dentistry',
            time:'09.00 AM - 10.00AM',
            space:8
        },
        {
            id:3,
            name:'Teeth Cleaning',
            time:'10.00 AM - 11.00 AM',
            space:10
        }
    ]
    return (
        <Container>
            
            <Typography  sx={{ color: 'info.main',mb:3 }} variant="h5" gutterBottom component="div">Available Appointments on {date?.toDateString()} </Typography>
            {bookingSuccess && 
                      <Alert severity="success">Booking Successful!</Alert>
                      
                    } 
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                  {
                      bookings.map(booking=><Booking
                      key={booking.key}
                      booking={booking}
                      date={date}
                      setBookingSuccess={setBookingSuccess}
                      ></Booking>)
                  }
               </Grid>
          </Box>
        </Container>
    );
};

export default AvailableAppointments;