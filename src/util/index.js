import axios from 'axios';


export const fetchData = async (url = '') => {

  return await axios.get(url).catch(function (error) {
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



