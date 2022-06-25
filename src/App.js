import { useEffect, useState } from 'react';

import { Container } from '@mui/material';

import { Header } from './components/Header';
import { Converter } from './components/Converter';

import { fetchData } from './util';
import { CASH_API_URL } from './config';
import { styles } from './styles/styles';


function App () {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const getCashRates = async () => {
      const response = await fetchData(CASH_API_URL);
      setRates(response.data.slice(0, 2));
    };

    getCashRates();
  }, []);

  return (
    <Container maxWidth="sm" sx={styles.container}>
      <Header data={rates} />
      <Converter />
    </Container>
  );
}

export default App;
