import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Link,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Link color='secondary' component={RouterLink} to='/pics'>
            <Typography variant='h6' className={classes.title}>
              Pics
            </Typography>
          </Link>
          <Link color='secondary' component={RouterLink} to='/upload'>
            <Typography variant='h6' className={classes.title}>
              Upload
            </Typography>
          </Link>
          <Link color='secondary' component={RouterLink} to='/'>
            <Typography variant='h6' className={classes.title}>
              Home
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
