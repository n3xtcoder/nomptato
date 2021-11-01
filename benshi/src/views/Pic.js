import React, { useEffect, useState } from 'react';
import { usePics } from '../context/PicsContext';
import { Grid, Backdrop, CircularProgress, Fab } from '@material-ui/core';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useStyles } from '../style/myStyle';
import { Link, useParams } from 'react-router-dom';

const Pic = () => {
  let { id } = useParams();
  const classes = useStyles();
  const { pics, fetchPics, loading } = usePics();
  const [pic, setPic] = useState(null);
  const [picIndex, setPicIndex] = useState(null);
  const [nxtPic, setNxtPic] = useState(null);
  const [prvPic, setPrvPic] = useState(null);
  useEffect(() => {
    if (pics.length === 0) {
      (async () => {
        await fetchPics();
      })();
    }
  }, []);
  useEffect(() => {
    if (pics.length !== 0) {
      setPic(pics.find((p) => p.id === parseInt(id)));
      setPicIndex(pics.findIndex((p) => p.id === parseInt(id)));
    }
  }, [pics, id]);

  useEffect(() => {
    if (picIndex || picIndex === 0) {
      picIndex !== 0
        ? setPrvPic(pics[picIndex - 1].id)
        : setPrvPic(pics[pics.length - 1].id);

      setNxtPic(pics[(picIndex + 1) % pics.length].id);
    }
  }, [picIndex]);
  return (
    <div className={classes.compRoot}>
      <Grid container>
        {pic && !loading ? (
          <Grid item xs={12}>
            {' '}
            <Grid container direction='row' style={{ paddingBottom: 15 }}>
              {prvPic && (
                <Grid item xs={6}>
                  <Grid container justifyContent='flex-end'>
                    <Link to={`/pics/${prvPic}`}>
                      <Fab color='primary' aria-label='previous' size='small'>
                        <SkipPreviousIcon />
                      </Fab>
                    </Link>
                  </Grid>
                </Grid>
              )}
              {nxtPic && (
                <Grid item xs={6}>
                  <Grid container justifyContent='flex-start'>
                    <Link to={`/pics/${nxtPic}`}>
                      <Fab color='primary' aria-label='next' size='small'>
                        <SkipNextIcon />
                      </Fab>
                    </Link>
                  </Grid>
                </Grid>
              )}
            </Grid>
            <Grid container direction='column' alignItems='center'>
              <Grid item xs={12}>
                <img src={pic.url} alt={pic.title} style={{ width: '100%' }} />
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}>
            <CircularProgress color='inherit' />
          </Backdrop>
        )}
      </Grid>
    </div>
  );
};

export default Pic;
