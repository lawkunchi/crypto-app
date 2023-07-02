import React, {FC, useState, useEffect} from 'react';
import {BinanceContext, defaultState} from './BinanceContext';
import { Props, IStat, IBalance } from '../@types/binance';
import axios from 'axios'

export const BinanceProvider: FC<Props> = ({ children }) => {
    const [stats, setStats] = useState<IStat[]>([]);
    const [balances, setBalances] = useState<IBalance[]>([]);
    const [loading, setLoading] = useState(defaultState.loading);
    const [error, setError] = useState('');
    const [searchString, setSearchString] = useState('');

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const REACT_APP_SNAPSHOT_API_BASE_URL = process.env.REACT_APP_SNAPSHOT_API_BASE_URL;

    const config = {
        headers: {
            'X-MBX-APIKEY': process.env.REACT_APP_API_KEY
        }
    }
    const getStats = () => {
        setLoading(true);
        
        let symbols = '["BTCUSDT","BNBUSDT","ETHBTC"]';
        if(searchString !== '') {
            symbols = '["'+searchString.toUpperCase()+'"]';
        }
        const url = API_BASE_URL+'/ticker/24hr?symbols='+symbols;
        axios
        .get(url)
        .then(function (response : any ) {
            if(response.data.code && (response.data.code === 200)) {
                setError("CODE:"+response.data.code+" "+response.data.msg);
            }
            else {
                setStats(response.data);
            }
            setTimeout(() => {
                setLoading(false);
            }, 3000);
		})
        .catch(e => {
            setError('Whoops someting went wrong!');
            setLoading(false);
        });
    }

    const accountSnapShot = () => {
        setLoading(true);
        
        const url = REACT_APP_SNAPSHOT_API_BASE_URL+'/accountSnapshot';
        axios
        .get(url, config)
        .then(function (response:any) {
            
            if(response.data.code && (response.data.code === 200)) {
                setError("CODE:"+response.data.code+" "+response.data.msg);
            }
            else {
                setBalances(response.data.snapshotVos.data.balances);
            }

            setTimeout(() => {
                setLoading(false);
            }, 3000);
		})
        .catch(e => {
            setError('Whoops someting went wrong!');
            setLoading(false);
        });
    }

    useEffect(() => {
        getStats()
    }, [])
    
    

    return (
        <div className='container mx-auto px-4'>
            <BinanceContext.Provider value={{
                stats,
                loading,
                error,
                searchString,
                balances,
                getStats,
                setError,
                setSearchString,
                accountSnapShot
            }}>
            {children}
            </BinanceContext.Provider>
        </div>
    );
};
