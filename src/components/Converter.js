import React, { useEffect, useState } from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';

import { CurrencyWrapper } from './CurrencyWrapper';
import { formatAmount, fetchData } from '../util';
import { REACT_APP_API_URL } from '../config';
import { styles } from '../styles/styles';


export const Converter = () => {
  const [firstAmount, setFirstAmount] = useState(0);
  const [secondAmount, setSecondAmount] = useState(0);
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('UAH');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const getExchangeRates = async () => {
      const response = await fetchData(REACT_APP_API_URL);
      setRates(response.data['conversion_rates']);
    };

    getExchangeRates();
  }, []);


  const handleChangeFirstAmount = (firstAmount) => {
    setSecondAmount(formatAmount(firstAmount * rates[secondCurrency] / rates[firstCurrency]));
    setFirstAmount(firstAmount);
  };

  const handleChangeFirstCurrency = (firstCurrency) => {
    setSecondAmount(formatAmount(firstAmount * rates[secondCurrency] / rates[firstCurrency]));
    setFirstCurrency(firstCurrency);
  };

  const handleChangeSecondAmount = (secondAmount) => {
    setFirstAmount(formatAmount(secondAmount * rates[firstCurrency] / rates[secondCurrency]));
    setSecondAmount(secondAmount);
  };

  const handleChangeSecondCurrency = (secondCurrency) => {
    setFirstAmount(formatAmount(secondAmount * rates[firstCurrency] / rates[secondCurrency]));
    setSecondCurrency(secondCurrency);
  };

  const changeCurrencies = () => {
    setFirstAmount(secondAmount);
    setSecondAmount(firstAmount);
    setFirstCurrency(secondCurrency);
    setSecondCurrency(firstCurrency);
  };


  return (
    <Box>
      <Typography variant="h4" sx={styles.title}>
        Currency Converter
      </Typography>
      <Grid
        container
        sx={styles.root}
      >
        <Grid item xs={4}>
          <Typography variant="body1">From</Typography>
          <CurrencyWrapper
            amount={firstAmount}
            currency={firstCurrency}
            onAmountChange={handleChangeFirstAmount}
            onCurrencyChange={handleChangeFirstCurrency}
          />
        </Grid>
        <Grid item xs={2} sx={styles.button}>
          <Button
            variant="contained"
            onClick={changeCurrencies}
          >
            <AutorenewIcon />
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">To</Typography>
          <CurrencyWrapper
            amount={secondAmount}
            currency={secondCurrency}
            onAmountChange={handleChangeSecondAmount}
            onCurrencyChange={handleChangeSecondCurrency}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
