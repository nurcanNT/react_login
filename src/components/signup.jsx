import { Paper, Grid, TextField, Button, Link, Box, Typography, InputAdornment, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { FaGoogle } from 'react-icons/fa';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { paperStyle, gridStyle } from "./LoginStyles";
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

const Signup = () => {
  const [darkMode, setDarkMode] = useState(false);

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
    <Grid container justifyContent="center" alignItems="center" sx={{mt:9}}>
      <Paper elevation={10} style={paperStyle}>
      <Grid container  justifyContent="center" alignItems="center" spacing={2} >
          <Grid item xs={12} sm={6}>
            <img src='/image/gif.gif'  alt="Colorful abstract painting"style={{ width: '100%',  height: 'auto', objectFit: 'cover', borderRadius: '230px', maxHeight: '70vh', }}  />
          </Grid>
          <Grid item xs={12} sm={6} style={{ ...gridStyle, flexDirection: 'column'  }}>
          <Box sx={{ textAlign: 'center', mt: 1 }}>
            <Typography variant="h3" sx={{mb: 2}}>Join us</Typography>
            <Typography variant="h5" color="gray">and start coding now</Typography>
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
            <TextField
              label='Repeat Password'
              placeholder="Password"
              type='password'
              fullWidth
              sx={{ mb: 1 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LockOpenOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          
            <Button type='submit' color='primary' fullWidth variant="contained" sx={{ mt: 4, mb: 5, height: '60px' , fontSize: '15px'}}>
              Create Account
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body1" color="gray">Already have an account?</Typography>
              <Box sx={{ ml: 2 }}>
                <Link href="/login" underline="none">
                Log in
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Box sx={{ position: 'absolute',top: '20px' }}>
          <Button onClick={toggleDarkMode}>
          <SettingsBrightnessIcon sx={{mr:0.5}}/>{darkMode ? "Light Mode" : "Dark Mode"}
          
          </Button>
        </Box>
    </Grid>
    </ThemeProvider>
  );
}

export default Signup;
