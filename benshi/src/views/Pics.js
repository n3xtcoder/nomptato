import React, { useEffect } from 'react';
import { Grid, Backdrop, CircularProgress, Paper } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { usePics } from '../context/PicsContext';
import { Link } from 'react-router-dom';
const Pics = () => {
  const { pics, loading } = usePics();

  return (
    <div style={{ height: '100%' }}>
      {pics.length > 0 ? (
        <Grid
          container
          justifyContent='center'
          alignContent='space-between'
          // spacing={ }
        >
          {pics.map((pic) => {
            return (
              <Link to={`/pics/${pic.id}`} key={`${pic.albumId}_s${pic.id}`}>
                <Grid
                  item
                  xs={6}
                  md={1}
                  style={{ marginRight: 3, marginLeft: 3 }}>
                  <img src={pic.thumbnailUrl} alt={pic.title} />
                </Grid>
              </Link>
            );
          })}
        </Grid>
      ) : loading ? (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}>
          <CircularProgress color='inherit' />
        </Backdrop>
      ) : (
        <Alert severity='error'>
          Error fetching images from JsonPlaceholder
        </Alert>
      )}
    </div>
  );
};

export default Pics;
