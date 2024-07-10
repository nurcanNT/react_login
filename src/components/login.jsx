import { Paper, Grid, TextField, Button, Box, Typography, Link, InputAdornment,CssBaseline, ThemeProvider, createTheme, IconButton } from "@mui/material";
import React, { useState } from "react";
import { FaGoogle } from 'react-icons/fa';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { paperStyle, gridStyle } from "./LoginStyles";
import { BrowserRouter, Link as RouterLink } from 'react-router-dom';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { useDispatch } from "react-redux";
import { login } from '../actions'

const Login = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordValidationError, setPasswordValidationError] = useState("");
  const [emailValidationError, setEmailValidationError] = useState("");
  const dispatch = useDispatch();

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

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
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

  const validateEmail = (emailToValidate) => {
    const isValidEmail = /\S+@\S+\.\S+/.test(emailToValidate);

    setEmailValidationError(isValidEmail ? "" : "Invalid email address");
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handleLogin = () => {
    const user = {  email };
    dispatch(login(user));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Grid container justifyContent="center"  alignItems="center" sx={{mt:9,}}>
        <Paper elevation={10} style={paperStyle}>
          <Grid container  justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6} sx={{whiteSpace: 'nowrap', display: 'flex'}}>
          <div style={{  height: '100vh', width: '100%', overflow: 'hidden',  }}>
              <img src='/image/dev2.gif' alt="Colorful abstract painting" style={{  width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '230px',
                    maxHeight: '70vh',}} />
                    </div>
            </Grid>
            <Grid item xs={12} sm={6} style={{ ...gridStyle, flexDirection: 'column',  overflow: 'hidden', height: '100vh',}}>
              <Box sx={{ textAlign: 'center',  mt: 1 }}>
                <Typography variant="h3" sx={{ mb: 2 }}>Hello again!</Typography>
                <Typography variant="h6" color="gray" sx={{mb: 3}}>It's great to have you back back</Typography>
              </Box>
              <TextField
                label='Email Address.'
                placeholder="Email address"
                type='email'
                fullWidth
                error={emailValidationError !== ""}
                helperText={emailValidationError}
                onChange={(e) => setEmail(e.target.value)}
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
              <Box sx={{ textAlign: 'right', mb:-2 }}>
                <Link component={RouterLink} to="/resetPassword" underline="none" sx={{ fontSize: '18px' }}>
                  Reset Password
                </Link>
              </Box>
              <Button type='submit' color='primary' fullWidth variant="contained" sx={{ mt: 5, mb: 1, height: '60px', fontSize: '15px' }}>
                Login
              </Button>
              <Button variant="outlined" fullWidth onClick={handleGoogleSignIn} sx={{ mt: 1, mb: 3, height: '60px', fontSize: '15px',    color: darkMode ? 'white' : 'black',  borderColor: darkMode ? 'white' : 'black', }}>
                <FaGoogle style={{ marginRight: 8, color: 'green' }} /> Sign in with Google
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
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