import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';
const BookingModal = ({openBooking,booking,handleBookingClose,date}) => {
    const {name,time}=booking;
     const {user}=useAuth();

     const [bookingInfo,SetBookinginfo]=useState({})
      const handleOnBlur=e=>{
           
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
              alert('submitting');

              //collect data
              //send to the server
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