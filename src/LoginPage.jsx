import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function LoginPage() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', background: 'LightGray' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <img src="/src/logo.svg" alt=" Gif" style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }} />
                
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', background: 'gray'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4">
          Hello again!
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          It's great to have you back
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
        </Box>
      </Box>
    </Card>
  );
}
