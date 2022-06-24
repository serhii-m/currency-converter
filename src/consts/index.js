const currencies = {
  AUD: 'Australian Dollar',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Renminbi',
  EUR: 'Euro',
  GBP: 'Pound Sterling',
  JPY: 'Japanese Yen',
  NZD: 'New Zealand Dollar',
  PLN: 'Polish Złoty',
  RUB: 'Russian Ruble',
  UAH: 'Ukrainian Hryvnia',
  USD: 'United States Dollar',
};

const amountReg = /[^0-9.]|(?<=\..*)\./g;

export {
  currencies,
  amountReg,
};