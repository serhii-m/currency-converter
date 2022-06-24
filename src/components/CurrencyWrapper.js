import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Zoom
} from '@mui/material';

import { currencies, amountReg } from '../consts';
import { styles } from '../styles/styles';


export const CurrencyWrapper = (props) => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Grid item>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="select-label">Currency</InputLabel>
            <Select
              labelId="select-label"
              id="demo-simple-select"
              value={props.currency}
              label="Currency"
              onChange={e => props.onCurrencyChange(e.target.value)}
            >
              {Object.entries(currencies).map((currency) => (
                  <MenuItem
                    key={currency[0]}
                    value={currency[0]}
                    sx={styles.menuItem}
                  >
                    <Tooltip
                      placement="right"
                      title={currency[1]}
                      arrow
                      TransitionComponent={Zoom}
                    >
                      <span>{currency[0]}</span>
                    </Tooltip>
                  </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          variant="outlined"
          label="Amount"
          value={props.amount}
          onChange={e => props
            .onAmountChange(e.target.value
              .replace(amountReg, '')
            )}
        />
      </Grid>
    </Grid>
  );
};

CurrencyWrapper.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};


