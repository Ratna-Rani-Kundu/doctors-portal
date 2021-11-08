import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whaitening from '../../../images/whitening.png'
const services=[
    {
        name:"fluoride",
        img:fluoride,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto fuga est cum qui perspiciatis minima minus officiis velit quaerat sequi, consequatur facere! Dolorum sit asperiores eum, excepturi atque ducimus!"
    },
    {
        name:"cavity",
        img:cavity,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto fuga est cum qui perspiciatis minima minus officiis velit quaerat sequi, consequatur facere! Dolorum sit asperiores eum, excepturi atque ducimus!"
    },
    {
        name:"whaitening",
        img:whaitening,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto fuga est cum qui perspiciatis minima minus officiis velit quaerat sequi, consequatur facere! Dolorum sit asperiores eum, excepturi atque ducimus!"
    }
]
const Services = () => {
    return (
   <Box sx={{ flexGrow: 1 }}>
    <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
        services.map(service=><Service
        key={service.name}
        service={service}
        ></Service>)
      }
      </Grid>
      </Container>
    </Box>
       
    );
};

export default Services;