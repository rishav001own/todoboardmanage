import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from './Copyright';
import useStyles from '../../utils/formStyles';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert,register }) => {
    const classes = useStyles();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      password2: '',
    });
    const { name, email, password, password2 } = formData;
    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async (e) => {
      e.preventDefault();
      if (password !== password2) {
        setAlert('Passwords do not match', 'error');
      } else {
        register({ name, email, password });
      }
    };
  
    return (
      <Container component='main' maxWidth='xs' className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete='name'
                  name='name'
                  variant='outlined'
                  required
                  fullWidth
                  id='name'
                  label='Your Name'
                  autoFocus
                  value={name}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password2'
                  label='Confirm Password'
                  type='password'
                  id='password2'
                  value={password2}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify='flex-end'>
              <Grid item>
                <a href='/login' variant='body2'>
                  Already have an account? Sign in
                </a>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  };
  
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert,register })(Register);