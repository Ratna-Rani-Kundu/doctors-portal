import React from 'react';
import Box from '@mui/material/Box';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const appointmentBanner={
    background:`url(${bg})`,
    backgroundColor:'rgba(45,58,74,0.8)',
    backgroundBlendMode: "darken,luminosity",
    marginTop:170
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
              <img style={{width:'400px',marginTop:'-115px'}} src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{ 
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              textAlign:'left' }}>
          <Box>
          <Typography variant="h6" sx={{mb:5}} style={{color:'#5CE7ED'}}>
               Appointment
           </Typography>
           <Typography variant="h4" style={{color:'white'}}>
             Make an Appointment Today
           </Typography>
           <Typography  sx={{my:5}} variant="h6" style={{color:'white',fontSize:14,fontWeight:300}}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto fuga est cum qui perspiciatis minima minus officiis velit quaerat sequi, consequatur facere! Dolorum sit asperiores eum, excepturi atque ducimus!
           </Typography>
           <Button style={{backgroundColor:'#5CE7ED'}} variant="contained">Learn More</Button>
          </Box>
          </Grid>
          
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;