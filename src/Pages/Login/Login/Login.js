import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import useAuth from '../../../hooks/useAuth'
import { Container,Typography,Button,CircularProgress,Alert } from '@mui/material';
import login from '../../../images/login.png'
import { NavLink,useLocation,useHistory } from 'react-router-dom';


const Login = () => {
  const [loginData,setLoginData,]=useState({})
  const {loginUser,signInWithGoogle,user,authError,isLoading}=useAuth()
  const location=useLocation()
  const history =useHistory()
  
  const handleOnChange=e=>{
    const field=  e.target.name;
    const value =e.target.value;
    const newLoginData={...loginData}
    newLoginData[field]=value;
    setLoginData(newLoginData)
    console.log(field,value)
  }
  const handleLoginSubmit =(e)=>{
  
    loginUser(loginData.email,loginData.password,location,history)
    e.preventDefault()
  }
  const handleGoogleSignIn=()=>{
    signInWithGoogle(location,history)
  }
    return (
       <Container>
         <Grid container spacing={2}>
           <Grid sx={{mt:8}} item xs={12} md={6}>
               <Typography variant="body1" gutterBottom>
                 Login
               </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField 
                 sx={{width:"75%",m:1}}
                 id="standard-basic" 
                 label="Your Email" 
                 name="email"
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
      
                 <Button  sx={{width:"75%",m:1}} type="submit"  variant="contained">Submit</Button>
                   <  NavLink to="/register">
                      <Button 
                        style={{ textDecoration: "none"}}
                        variant="text">New User? Pleaser Register</Button>
                   </NavLink>
                   {isLoading && <CircularProgress/>  }
                   {user?.email && <Alert variant="filled" severity="success"> Successfully Log In!</Alert>} 
                   {authError && <Alert variant="filled" severity="error">
                    {authError}
                     </Alert>}
           </form>
                 <p>-----------------------------------</p> 
                 <Button onClick={handleGoogleSignIn} 
                        style={{ textDecoration : "none"}}
                        variant="contained">Google Sign In</Button>   
         </Grid>
               <Grid item xs={12} md={6}>
                 <img style={{width:'100%'}} src={login} alt="" />
               </Grid>
        
        
        </Grid>
       </Container>
    );
};

export default Login;