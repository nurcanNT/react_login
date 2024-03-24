import { Paper, Grid, TextField, Button, Link, Box, Typography, InputAdornment, createTheme, CssBaseline, ThemeProvider, IconButton } from "@mui/material";
import React, { useState } from "react";
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { paperStyle, gridStyle } from "./LoginStyles";
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

const Signup = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordValidationError, setPasswordValidationError] = useState("");
  const [repeatPasswordValidationError, setRepeatPasswordValidationError] = useState("");

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });
 
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword((prevShowRepeatPassword) => !prevShowRepeatPassword);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleRepeatPasswordChange = (event) => {
    const newRepeatPassword = event.target.value;
    setRepeatPassword(newRepeatPassword);
    validateRepeatPassword(newRepeatPassword);
  };

  const validatePassword = (passwordToValidate) => {
    const hasMinimumLength = passwordToValidate.length >= 8;
    const hasUppercase = /[A-Z]/.test(passwordToValidate);
    const hasLowercase = /[a-z]/.test(passwordToValidate);
    const hasNumber = /\d/.test(passwordToValidate);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(passwordToValidate);

    let passwordError = "";

    if (!hasMinimumLength) {
      passwordError = "Password must be at least 8 characters.";
    } else if (!hasUppercase) {
      passwordError = "Password must contain at least one uppercase letter.";
    } else if (!hasLowercase) {
      passwordError = "Password must contain at least one lowercase letter.";
    } else if (!hasNumber) {
      passwordError = "Password must contain at least one number.";
    } else if (!hasSpecialCharacter) {
      passwordError = "Password must contain at least one special character (!@#$%^&*(),.?\":{}|<>).";
    }

    setPasswordValidationError(passwordError);
  };

  const validateRepeatPassword = (repeatPasswordToValidate) => {
    const hasMinimumLength = repeatPasswordToValidate.length >= 8;
    const hasUppercase = /[A-Z]/.test(repeatPasswordToValidate);
    const hasLowercase = /[a-z]/.test(repeatPasswordToValidate);
    const hasNumber = /\d/.test(repeatPasswordToValidate);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(repeatPasswordToValidate);

    let repeatPasswordError = "";

    if (!hasMinimumLength) {
      repeatPasswordError = "Password must be at least 8 characters.";
    } else if (!hasUppercase) {
      repeatPasswordError = "Password must contain at least one uppercase letter.";
    } else if (!hasLowercase) {
      repeatPasswordError = "Password must contain at least one lowercase letter.";
    } else if (!hasNumber) {
      repeatPasswordError = "Password must contain at least one number.";
    } else if (!hasSpecialCharacter) {
      repeatPasswordError = "Password must contain at least one special character (!@#$%^&*(),.?\":{}|<>).";
    }
    setRepeatPasswordValidationError(repeatPasswordError);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Grid container justifyContent="center" alignItems="center" sx={{mt:9}}>
      <Paper elevation={10} style={paperStyle}>
      <Grid container  justifyContent="center" alignItems="center" spacing={2} >
          <Grid item xs={12} sm={6} >
          <div style={{  height: '100vh', width: '100%', overflow: 'hidden' }}>
            <img src='/image/gif.gif'  alt="Colorful abstract painting"style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '230px',
                    maxHeight: '70vh',
                  }}  />
                  </div>
          </Grid>
          <Grid item xs={12} sm={6} style={{ ...gridStyle, flexDirection: 'column',  overflow: 'hidden', height: '100vh', }}>
          <Box sx={{ textAlign: 'center', mt: 1}}>
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
              type={showPassword ? 'text' : 'password'}
              fullWidth
              sx={{ mt: 2, mb: 2 }}
              error={passwordValidationError !== ""}
      helperText={passwordValidationError}
      onChange={handlePasswordChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <LockOutlinedIcon /> : <LockOpenOutlinedIcon />}
                      </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label='Repeat Password'
              placeholder="Password"
              type={showRepeatPassword ? 'text' : 'password'}
              fullWidth
              sx={{ mb: 1 }}
              error={repeatPasswordValidationError !== ""}
      helperText={repeatPasswordValidationError}
      onChange={handleRepeatPasswordChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleRepeatPasswordVisibility} edge="end">
                        {showRepeatPassword ? <LockOutlinedIcon /> : <LockOpenOutlinedIcon />}
                      </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          
            <Button type='submit' color='primary' fullWidth variant="contained" sx={{ mt: 1, mb: 4, height: '60px' , fontSize: '15px'}}>
              Create Account
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
              <Typography variant="body1" color="gray" sx={{ textDecoration: 'underline' }} >Already have an account?</Typography>
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
