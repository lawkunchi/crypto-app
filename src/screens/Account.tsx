
import {FC, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { BinanceContext } from "../context/BinanceContext";
import Skeleton from '../components/Skeleton';
import Nav from '../components/Nav';

const Login: FC = () => {

    const { accountSnapShot, balances, loading } = useContext(BinanceContext);

    useEffect(() => {
        accountSnapShot?.()
    }, [])
    

    return (
        <>
            <div className="mt-8 mb-8 m-5">  
            <Nav/> 
                <h3 className="mb-8 mt-8 font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">Account Snapshot</h3>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">

                {loading? 
                    <div role="status" className="space-y-2.5 animate-pulse w-full p-5">
                        {Array.from(Array(4), (e, i) => {
                        return (
                        <Skeleton key={i}/>
                        )
                    })}

                    <span className="sr-only">Loading...</span>
                </div>:

                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Free</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Locked</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {balances.map((item) => (
                            <tr className="hover:bg-gray-50">
                                
                                <td className="px-6 py-4">{item.asset}</td>
                                <td className="px-6 py-4">${item.free}</td>
                                <td className="px-6 py-4">${item.locked}</td>
                            </tr>
                        ))}
                    </tbody>
                    
                </table> }

            </div>
        </>
      );
  }
  
  export default Login;
  