import React from 'react';
import { Container, Paper, Typography, TextField, Button, Link } from '@mui/material';
// import Navbar from './Navbar';
const styles = {
  paper: {
    marginTop: '45px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '24px',
  },
  form: {
    width: '100%',
    marginTop: '16px',
  },
  submit: {
    margin: '25px 0 16px',
  },
  loginLink: {
    textAlign: 'center',
  },
};

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted');
  };

  return (  
   
    <Container maxWidth="sm">
      
      <Paper elevation={3} style={styles.paper}>
        <Typography variant="h5" style={{fontWeight:'bolder'}}  >Employer Signup</Typography>

        <form style={styles.form} onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Company Name"
            name="companyName"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Designation"
            name="designation"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            name="email"
            type="email"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            type='number'
            margin="normal"
            label="Phone Number"
            name="phoneNumber"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Repeat Password"
            name="repeatPassword"
            type="password"
            variant="outlined"
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={styles.submit}
          >
            Sign Up
          </Button>
        </form>
        <Typography variant="body2" style={styles.loginLink}>
          Already have an account?{' '}
          <Link href="/login" variant="body2">
            Login here
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Signup;
