import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import { LinearProgress, Grid, Button, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useStyles } from '../style/myStyle';
require('dotenv').config();

//? AWS CONFIGURATION
const S3_BUCKET = `${process.env.REACT_APP_S3_BUCKET}`;
const REGION = `${process.env.REACT_APP_S3_REGION}`;

AWS.config.update({
  accessKeyId: `${process.env.REACT_APP_AWS_KEY}`,
  secretAccessKey: `${process.env.REACT_APP_AWS_SECRET}`,
});
const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});
const Upload = () => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(
    'Please be kind and upload only MP4 files not larger than 50MB,thank you! 😇'
  );
  const [severity, setSeverity] = useState('info');
  const uploadFile = (e) => {
    setLoading(true);
    setMsg('Uploading file');
    const file = e.target.files[0];
    //? Checking file size
    const fileSize = file.size / (1024 * 1024);
    if (fileSize > 50) {
      setMsg('I told you NOT MORE THAN 50MB! 🤬');
      setSeverity('warning');
    } else {
      //? Upload to S3
      const params = {
        ACL: 'public-read',
        Body: file,
        Bucket: S3_BUCKET,
        Key: file.name,
      };

      myBucket
        .putObject(params)
        .on('httpUploadProgress', (evt) => {
          //? extracting upload progress
          setProgress(Math.round((evt.loaded / evt.total) * 100));
        })
        .send((err) => {
          if (err) {
            console.log(err);
            setMsg('Error while trying to upload to S3 Bucket! 💩');
            setSeverity('error');
            setProgress(0);
          } else {
            setSeverity('success');
            setMsg('Successfully uploaded file to S3 Bucket');
            setProgress(0);
          }
        });
    }
    setLoading(false);
  };
  return (
    <div className={classes.compRoot}>
      <Grid container direction='column' alignContent='center' id='mom'>
        <Grid item xs={12}>
          <Grid container direction='column' alignContent='center'>
            <Grid item xs={12}>
              {' '}
              <Grid container direction='row' alignItems='center'>
                <Grid item xs={12}>
                  <Alert severity={severity} variant='filled' icon={false}>
                    <Typography
                      variant='h4'
                      variantMapping={{ h2: 'h6' }}
                      align='center'>
                      {msg}
                    </Typography>
                  </Alert>
                </Grid>
                {progress !== 0 && (
                  <Grid item xs={12}>
                    <Grid
                      container
                      justifyContent='center'
                      alignItems='center'
                      alignContent='center'>
                      <Grid item xs={10}>
                        <LinearProgress
                          variant='determinate'
                          value={progress}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <Typography
                          variant='body2'
                          color='text.secondary'>{`${Math.round(
                          progress
                        )}%`}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                )}{' '}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent='center'>
          <input
            type='file'
            accept='.mp4'
            onChange={uploadFile}
            style={{ display: 'none' }}
            id='uploadButton'
          />
          <label htmlFor='uploadButton'>
            <Grid item xs={6} style={{ marginTop: 3 }}>
              {' '}
              <Button
                variant='contained'
                color='primary'
                component='span'
                disabled={progress !== 0}>
                <Typography color='secondary'>Upload</Typography>
              </Button>
            </Grid>
          </label>
        </Grid>
      </Grid>
    </div>
    // </Grid>
  );
};

export default Upload;
