import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Paper elevation={5} sx={{ p: 5, borderRadius: '10px', width: '400px', height: '450px' }}>
          <Typography variant="h4" align="center" style={{ fontWeight: 'bolder', fontFamily: 'inherit' }}>
            EMPLOYER LOGIN
          </Typography>
          <br /><br />
          <form>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
    
            />
            <br /><br /> <br />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
            />
            <br /><br /> <br />
            <Button  type="submit" variant="contained" color="primary" fullWidth>
              <Link to= '/dashboard' style={{color:'white'}}>Login</Link>
            </Button>
            <br /><br />
            <Typography variant="body2" style={{ color: 'black',textDecoration:'none' }}>
              Already have an account?
              <Link to="/signup" variant="body2">
                Signup here
              </Link>
            </Typography>
          </form>
        </Paper>
      </Box>
    </div>
  );
};

export default Login;
