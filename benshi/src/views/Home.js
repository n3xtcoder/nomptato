import React from 'react';
import { useStyles } from '../style/myStyle';
import { Typography, Grid } from '@material-ui/core';
import nxtLogo from '../nxtLogo.svg';
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.compRoot}>
      {' '}
      <Grid container direction='column' spacing={2} align='center'>
        <Grid item xs={12}>
          <Typography variant='h1' align='center'>
            BENSHI
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h1' align='center'>
            @
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container justifyContent='center'>
            <Grid item xs={7}>
              {' '}
              <img src={nxtLogo} alt='next coder' />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h2'>N3XTCODER</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
