import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';
// import initializeFirebase from '../../../Firebase/firebase.init';
const BookingModal = ({openBooking,booking,handleBookingClose,date}) => {
    const {name,time}=booking;
     const {user}=useAuth();
   const initialInfo={patientName: user.displayName,email:user.email,phone:''}
     const [bookingInfo,setBookingInfo]=useState(initialInfo)
      const handleOnBlur=e=>{
          const field=e.target.name;
          const value=e.target.value; 
          const newInfo ={...bookingInfo}
          newInfo[field]=value;
          console.log(newInfo)
          setBookingInfo(newInfo)
      }
     const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };


      const handleBookingSubmit=(e)=>{
       

              //collect data
            const appointment={
                 ...bookingInfo,
                 time,
                 name,
                 date:date.toLocaleDateString()
            }
              //send to the server
             fetch('http://localhost:5000/appointments',{
               method:'POST',
             headers:{
               'content-type':'application/json'
             },
             body:JSON.stringify(appointment)
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data)
            })

              handleBookingClose();
              e.preventDefault();
      }
    return (
        <Modal
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {name}
          </Typography>
     <form onSubmit={handleBookingSubmit}>
          <TextField
            disabled
            sx={{width:'90%',m:1}}
          id="outlined-size-small"
          defaultValue={time}
          size="small"
        />
          
          <TextField
           
            sx={{width:'90%',m:1}}
          id="outlined-size-small"
          name='name'
          onBlur={handleOnBlur}
          defaultValue={user?.displayName}
          size="small"
        />
          <TextField
           
            sx={{width:'90%',m:1}}
          id="outlined-size-small"
          name='email'
          onBlur={handleOnBlur}
          defaultValue={user.email}
          size="small"
        />
          <TextField
           
            sx={{width:'90%',m:1}}
          id="outlined-size-small"
          onBlur={handleOnBlur}
          name='phone'
          defaultValue=' Phone Number'
          size="small"
        />
          <TextField
           disabled
            sx={{width:'90%',m:1}}
          id="outlined-size-small"
          defaultValue={date.toDateString()}
          size="small"
        />
          <Button type="submit" variant="contained">Submit</Button>
       </form>
          
        </Box>
      </Modal>
    );
};

export default BookingModal;