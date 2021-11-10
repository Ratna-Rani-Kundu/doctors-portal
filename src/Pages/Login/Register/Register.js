import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Container,Typography,Button } from '@mui/material';
import login from '../../../images/login.png'
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [loginData,setLoginData]=useState({})
  const handleOnChange=e=>{
    const field=  e.target.name;
    const value =e.target.value;
    const newLoginData={...loginData}
    newLoginData[field]=value;
    setLoginData(newLoginData)
    console.log(field,value)
  }
  const handleLoginSubmit =(e)=>{
     if (loginData.password !==loginData.password2){
        alert('Password is not matching')
        return
     }
    
    e.preventDefault()
  }
    return (
        <Container>
            <Grid container spacing={2}>
        <Grid sx={{mt:8}} item xs={12} md={6}>
        <Typography variant="body1" gutterBottom>
       Register
      </Typography>
      <form onSubmit={handleLoginSubmit}>
      <TextField 
      sx={{width:"75%",m:1}}
      id="standard-basic" 
      label="Your Email" 
      name="email"
      type="email"
      onChange={handleOnChange}
      variant="standard" />
      <TextField 
      sx={{width:"75%",m:1}}
      id="standard-basic" 
      label="Your password" 
      name="password"
      onChange={handleOnChange}
      variant="standard"
      type="password" />
      
      <TextField 
      sx={{width:"75%",m:1}}
      id="standard-basic" 
      label=" Retype Your password" 
      name="password2"
      onChange={handleOnChange}
      variant="standard"
      type="password" />
      
       <Button  sx={{width:"75%",m:1}} type="submit"  variant="contained">Submit</Button>
       <NavLink to="/login">
      <Button 
      style={{ textDecoration : "none"}}
      variant="text">Already Registered? Please Login</Button>
      </NavLink>
      </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{width:'100%'}} src={login} alt="" />
        </Grid>
        
        
      </Grid>
       </Container>
    );
};

export default Register;