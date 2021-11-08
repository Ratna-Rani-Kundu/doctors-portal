import React from 'react';
import chair from "../../../images/chair.png"
import bg from "../../../images/bg.png"
import Grid from '@mui/material/Grid';
import { Button, Typography,Container} from '@mui/material';
import Box  from '@mui/material/Box';

const bannerBg={
    background:`url(${bg})`
}
const verticleCenter={
    display:'flex',
    alignIteams:'center',
   
    height:400
}
const Banner = () => {
    return (
        <Container  style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{...verticleCenter,textAlign:'left'}} item xs={12} md={6}>
          <Box>
           <Typography variant="h3">
              Your New Smile <br/>
              Starts Here
            </Typography>
         <Typography variant="h6" sx={{my:5}} style={{color:'gray',fontSize:13,fontWeight:300}} >
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto fuga est cum qui perspiciatis minima minus officiis velit quaerat sequi, consequatur facere! Dolorum sit asperiores eum, excepturi atque ducimus!
           </Typography>
           
           <Button variant="contained" style={{backgroundColor: 'rgb(92, 231, 237)'}} >
               Get Appointment
           </Button>
          </Box>
        </Grid>
        <Grid style={verticleCenter} item xs={12} md={6}>
          <img style={{width:350}} src={chair} alt="" />
        </Grid>
        
      </Grid>
    </Container>
    );
};

export default Banner;