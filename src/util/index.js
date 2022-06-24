import axios from 'axios';

import { CASH_API_URL, REACT_APP_API_URL } from '../config';

export const fetchData = async () => {

  return await axios.get(CASH_API_URL).catch(function (error) {
    if (error.response) {
      console.log(error.response);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }

    return error;
  });
};


export const formatAmount = (number = 0) => {
  return +number.toFixed(4);
};

export const getRates = async () => {

  return await axios.get(REACT_APP_API_URL).catch(function (error) {
    if (error.response) {
      console.log(error.response);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }

    return error;
  });
};



