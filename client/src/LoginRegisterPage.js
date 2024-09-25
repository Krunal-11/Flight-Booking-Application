import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import Nav from './navbar'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '5rem',
    padding: '2rem',
  },
  formSection: {
    padding: '2rem',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
}));

const LoginRegisterPage = () => {
  const { setUsername } = useUser();
  const classes = useStyles();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

const handleLogin = async () => {
  console.log('handleLogin called', loginData);
  try {
    const response = await fetch('http://localhost:8080/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorText}`);
    }

    const data = await response.json();
    console.log('Login successful:', data);
    setUsername(loginData.username);
    localStorage.setItem('userToken', data.token);
    navigate('/home');
  } catch (error) {
    console.error('Error:', error);
  }
};

const handleLoginWithParams = async (username, password) => {
  console.log('handleLoginWithParams called', { username, password });
  try {
    const response = await fetch('http://localhost:8080/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }), 
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorText}`);
    }

    const data = await response.json();
    console.log('Login successful:', data);

    localStorage.setItem('userToken', data.token);
    navigate('/home');
  } catch (error) {
    console.error('Error:', error);
  }
};

const handleRegister = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorText}`);
    }

    const data = await response.text();
    console.log('Register successful:', data);
    setUsername(registerData.username);

    await handleLoginWithParams(registerData.username, registerData.password);
  } catch (error) {
    console.error('Registration error:', error);
  }
};


  return (
    <Container className={classes.root}>
      <Nav />
      <Grid container spacing={4}>
        {/* Login Section */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.formSection} elevation={3}>
            <Typography variant="h5" gutterBottom>Login</Typography>
            <form className={classes.formContainer} onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
              <TextField
                label="Username"
                variant="outlined"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                fullWidth
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                fullWidth
              />
              <Button variant="contained" color="primary" type="submit">Login</Button>
            </form>
          </Paper>
        </Grid>

        {/* Registration Section */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.formSection} elevation={3}>
            <Typography variant="h5" gutterBottom>Register</Typography>
            <form className={classes.formContainer} onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
              <TextField
                label="Username"
                variant="outlined"
                value={registerData.username}
                onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                fullWidth
              />
              <TextField
                label="Email"
                variant="outlined"
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                fullWidth
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                value={registerData.phone}
                onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                fullWidth
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                fullWidth
              />
              <Button variant="contained" color="secondary" type="submit">Register</Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginRegisterPage;
