import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
const Pics = () => {
  const [pics, setPics] = useState([]);
  const fetchPics = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/albums/1/photos'
      );
      const data = await response.json();
      setPics(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchPics();
  }, []);
  return (
    <div>
      {pics.length > 0 ? (
        <Grid container>
          {pics.map((pic) => {
            <Grid item xs={6} m={1}></Grid>;
          })}
        </Grid>
      ) : (
        <p>no pics</p>
      )}
    </div>
  );
};

export default Pics;
