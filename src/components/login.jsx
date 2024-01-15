import { Paper, Grid, TextField, Button, Box, Typography, Link, InputAdornment } from "@mui/material";
import React from "react";
import { FaGoogle } from 'react-icons/fa';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { paperStyle, gridStyle } from "./LoginStyles";
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Signup from "./signup";

const Login = () => {
  const handleGoogleSignIn = () => {
    window.location.href = 'https://accounts.google.com/lifecycle/steps/signup/name?continue=https://myaccount.google.com?utm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&dsh=S-670505543:1705259747687129&flowEntry=SignUp&flowName=GlifWebSignIn&theme=glif&TL=AHNYTIQY8N70Sk2_qIPPA0n1W3TZUjTYTgoI-cOOJbsnQf2e8sUFNwVDqkZgOPNX'; 
  };
 
  return (
    <Grid container justifyContent="center">
      <Paper elevation={10} style={paperStyle}>
        <Grid container spacing={2} >
          <Grid item xs={6} >
            <img src='/image/dev2.gif'  alt="Colorful abstract painting" style={{ width: '100%', height: '70vh', objectFit: 'cover', borderRadius: '230px' }} />
          </Grid>
          <Grid item xs={6} style={{ ...gridStyle, flexDirection: 'column'  }}>
          <Box sx={{ textAlign: 'center', mt: 1 }}>
            <Typography variant="h3" sx={{mb: 2}}>Hello again!</Typography>
            <Typography variant="h6" color="gray">It's great to have you back</Typography>
            </Box>
            <TextField
              label='Email Address'
              placeholder="Email address"
              type='email'
              fullWidth
              sx={{ mt: 5 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AlternateEmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label='Password'
              placeholder="Password"
              type='password'
              fullWidth
              sx={{ mt: 2, mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LockOpenOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
           <Box sx={{ textAlign: 'right', mt: 1 }}>
  <Link href="/resetPassword" underline="none" sx={{ fontSize: '18px' }}>
    Reset Password
  </Link>
</Box>
            <Button type='submit' color='primary' fullWidth variant="contained" sx={{ mt: 5, mb: 1, height: '60px' , fontSize: '15px'}}>
              Login
            </Button>
            <Button variant="outlined" fullWidth  onClick={handleGoogleSignIn}  sx={{ mt: 1, mb: 6, height: '60px', fontSize: '15px', color: 'black', borderColor: 'black'}}>
              <FaGoogle style={{ marginRight: 8, color: 'green' }} /> Sign in with Google
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body1" color="gray">Don't have an account yet?</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ ml: 2 }}>
                <Link href="/signup" underline="none">
                  Sign up
                </Link>
              </Box>

            </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Login;
