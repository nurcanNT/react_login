import { Paper, Grid, TextField, Button, Link, Box, Typography, InputAdornment } from "@mui/material";
import React from "react";
import { FaGoogle } from 'react-icons/fa';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { paperStyle, gridStyle } from "./LoginStyles";

const ResetPassword = () => {
 
  return (
    <Grid container justifyContent="center">
      <Paper elevation={10} style={paperStyle}>
        <Grid container spacing={2} >
          <Grid item xs={6} >
            <img src='/image/dev2.gif'  alt="Colorful abstract painting" style={{ width: '100%', height: '70vh', objectFit: 'cover', borderRadius: '230px' }} />
          </Grid>
          <Grid item xs={6} style={{ ...gridStyle, flexDirection: 'column'  }}>
          <Box sx={{ textAlign: 'center', mt: 1 }}>
            <Typography variant="h3" sx={{mb: 2}}>Forgot your password?</Typography>
            <Typography variant="h6" color="gray">We'll send you a link to reset it</Typography>
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
          
            <Button type='submit' color='primary' fullWidth variant="contained" sx={{ mt: 4, mb: 5, height: '60px' , fontSize: '15px'}}>
              Reset Password
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
    </Grid>
  );
}

export default ResetPassword;
