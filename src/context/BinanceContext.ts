import { createContext } from 'react';
import {IBinanceContext } from '../@types/binance';

export  const defaultState = {
  stats: [],
  balances: [],
  error: '',
  searchString: '',
  loading: false
};


export const BinanceContext = createContext<IBinanceContext>(defaultState);