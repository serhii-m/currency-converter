import React from 'react';
import PropTypes from 'prop-types';

import { Box, Grid, Typography } from '@mui/material';
import { styles } from '../styles/styles';


export const Header = ({ data }) => {

  return (
    <Box sx={{ mb: 10 }}>
      <Typography variant="h6" sx={styles.text}>
        Exchange rates to UAH
      </Typography>
      <Typography variant="body1" sx={styles.text}>
        (Ukrainian Hryvnia)
      </Typography>
      <Typography variant="body2" sx={styles.text}>
        cash rates from Privatbank
      </Typography>
      <Grid container spacing={1} sx={{ mt: 3 }}>
        <Grid item xs={4}>Currency</Grid>
        <Grid item xs={4}>buy</Grid>
        <Grid item xs={4}>sell</Grid>
        {data && data.map(currency => {
          return (
            <React.Fragment key={currency?.ccy}>
              <Grid item xs={4}>
                {currency?.ccy}
              </Grid>
              <Grid item xs={4}>
                {currency?.buy.slice(0, 5)}
              </Grid>
              <Grid item xs={4}>
                {currency?.sale.slice(0, 5)}
              </Grid>
            </React.Fragment>
          );
        })}
      </Grid>
    </Box>
  );
};

Header.propTypes = {
  data: PropTypes.array.isRequired,
};
