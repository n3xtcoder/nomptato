import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { useStyles } from '../style/myStyle';

export default function NavBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Grid container>
            <Grid item xs>
              <Link color='secondary' component={RouterLink} to='/pics'>
                <Typography
                  variant='h6'
                  align='center'
                  className={classes.title}>
                  Pics
                </Typography>
              </Link>
            </Grid>
            <Grid item xs>
              <Link color='secondary' component={RouterLink} to='/'>
                <Typography
                  variant='h6'
                  className={classes.title}
                  align='center'>
                  Home
                </Typography>
              </Link>
            </Grid>
            <Grid item xs>
              <Link color='secondary' component={RouterLink} to='/upload'>
                <Typography
                  variant='h6'
                  className={classes.title}
                  align='center'>
                  Upload
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
}
