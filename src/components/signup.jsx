import { Paper, Grid, TextField, Button, Link, Box, Typography, InputAdornment } from "@mui/material";
import React from "react";
import { FaGoogle } from 'react-icons/fa';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { paperStyle, gridStyle } from "./LoginStyles";

const Signup = () => {
 
  return (
    <Grid container justifyContent="center">
      <Paper elevation={10} style={paperStyle}>
        <Grid container spacing={2} >
          <Grid item xs={6} >
            <img src='/image/dev2.gif'  alt="Colorful abstract painting" style={{ width: '100%', height: '70vh', objectFit: 'cover', borderRadius: '230px' }} />
          </Grid>
          <Grid item xs={6} style={{ ...gridStyle, flexDirection: 'column'  }}>
          <Box sx={{ textAlign: 'center', mt: 1 }}>
            <Typography variant="h3" sx={{mb: 2}}>Join us</Typography>
            <Typography variant="h6" color="gray">and start coding now</Typography>
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
  <Link href="#underline" underline="none" sx={{ fontSize: '18px' }}>
    Reset Password
  </Link>
</Box>
            <Button type='submit' color='primary' fullWidth variant="contained" sx={{ mt: 5, mb: 1, height: '60px' , fontSize: '15px'}}>
              Create Account
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body1">Already have an account?</Typography>
              <Box sx={{ ml: 2 }}>
                <Link href="/login" underline="none">
                Log in
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Signup;
