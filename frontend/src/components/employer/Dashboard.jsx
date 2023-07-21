import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  Typography,
  Grid,
  TextField,
  Box,
} from '@mui/material';

const Dashboard = () => {
  const [showPostJobForm, setShowPostJobForm] = useState(false);

  const handleTogglePostJobForm = () => {
    setShowPostJobForm(!showPostJobForm);
  };

  const handleSubmitJobPost = (e) => {
    e.preventDefault();
    console.log('Job post submitted');
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom marginTop={'50px'} style={{fontWeight:"bolder"}}>
        Employer Dashboard
        <br /><br />
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box textAlign="center">
            <Button
              onClick={handleTogglePostJobForm}
              variant="contained"
              color="primary"
              style={{ width: '160px' }}
            >
              {showPostJobForm ? 'Post a Job' : 'Post a Job'}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box textAlign="center">
            <Button
              component={Link} to='/'
              variant="contained"
              color="primary"
              style={{ width: '160px' }}
            >
              View All Jobs
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box textAlign="center">
            <Button
              component={Link}
              to="/PostedJobs"
              variant="contained"
              color="primary"
              style={{ width: '160px' }}
            >
              Posted Jobs
            </Button>
          </Box>
        </Grid>
        {showPostJobForm && (
          <Grid item xs={12} sm={8}>
            <form onSubmit={handleSubmitJobPost}>
              <Typography variant="h6" gutterBottom>
                Post Job Form
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Job Name"
                    name="jobName"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Company Name" name="companyName" variant="outlined" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Location" name="location" variant="outlined" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Salary" name="salary" variant="outlined" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Job Type" name="jobType" variant="outlined" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Qualifications" name="qualifications" variant="outlined" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Job Description" name="jobDescription" variant="outlined" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Experience" name="experience" variant="outlined" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Contact Details" name="contact" variant="outlined" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Upload Resume or CV (PDF)"
                    name="resume"
                    type="file"
                    inputProps={{ accept: 'application/pdf' }}
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box textAlign="center">
                    <Button type="submit" variant="contained" color="primary">
                      Submit Job Post
                    </Button>
                  </Box>
                  <Box textAlign="center" mt={2}>
                    <Button
                      onClick={handleTogglePostJobForm}
                      variant="contained"
                      color="primary"
                      style={{ width: '160px' }}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Dashboard;
