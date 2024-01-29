import { Paper, Grid, TextField, Button, Box, Typography, Link, InputAdornment,CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import { FaGoogle } from 'react-icons/fa';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { paperStyle, gridStyle } from "./LoginStyles";
import { BrowserRouter as Router, Link as RouterLink } from 'react-router-dom';
import Signup from "./signup";
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

const Login = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleGoogleSignIn = () => {
    window.location.href = 'https://accounts.google.com/lifecycle/steps/signup/name?continue=https://myaccount.google.com?utm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&dsh=S-670505543:1705259747687129&flowEntry=SignUp&flowName=GlifWebSignIn&theme=glif&TL=AHNYTIQY8N70Sk2_qIPPA0n1W3TZUjTYTgoI-cOOJbsnQf2e8sUFNwVDqkZgOPNX';
  };

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Grid container justifyContent="center"  alignItems="center" sx={{mt:9}}>
        <Paper elevation={10} style={paperStyle}>
          <Grid container  justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6}>
              <img src='/image/dev2.gif' alt="Colorful abstract painting" style={{ width: '100%',  height: 'auto', objectFit: 'cover', borderRadius: '230px', maxHeight: '70vh', paddingBottom: '30px' }} />
            </Grid>
            <Grid item xs={12} sm={6} style={{ ...gridStyle, flexDirection: 'column'}}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ mb: 2 }}>Hello again!</Typography>
                <Typography variant="h6" color="gray" sx={{mb: 3}}>It's great to have you back back</Typography>
              </Box>
              <TextField
                label='Email Address'
                placeholder="Email address"
                type='email'
                fullWidth
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
                <Link component={RouterLink} to="/resetPassword" underline="none" sx={{ fontSize: '18px' }}>
                  Reset Password
                </Link>
              </Box>
              <Button type='submit' color='primary' fullWidth variant="contained" sx={{ mt: 5, mb: 1, height: '60px', fontSize: '15px' }}>
                Login
              </Button>
              <Button variant="outlined" fullWidth onClick={handleGoogleSignIn} sx={{ mt: 1, mb: 6, height: '60px', fontSize: '15px',    color: darkMode ? 'white' : 'black',  borderColor: darkMode ? 'white' : 'black', }}>
                <FaGoogle style={{ marginRight: 8, color: 'green' }} /> Sign in with Google
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body1" color="gray">Don't have an account yet?</Typography>
                
                  <Box sx={{ ml: 2 }}>
                    <Link component={RouterLink} to="/signup" underline="none">
                      Sign up
                    </Link>
                  </Box>
                </Box>
            </Grid>
          </Grid>
        </Paper>
        <Box sx={{ position: 'absolute',top: '20px' }}>
          <Button onClick={toggleDarkMode}>
          <SettingsBrightnessIcon sx={{mr:0.5}}/> {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </Box>
      </Grid>
      </ThemeProvider>
  );
}

export default Login;