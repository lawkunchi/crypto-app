import {FC} from 'react';
import { useContext } from "react";
import { BinanceContext } from "../context/BinanceContext";
import Skeleton from "../components/Skeleton";
import Search from "../components/Search";
import Item from "../components/Item";
import Alert from '../components/Alert';

const Home: FC = () => {
    
    const { stats, loading } = useContext(BinanceContext);
    
    return (
        <>

            <Search/>
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
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Latest Price</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Percentage Change</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">24-hour trading volume</th>
                            </tr>
                    </thead>
                
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {stats.map((stat) => (
                            <Item key={stat.symbol} stat={stat} />
                        ))}
                    </tbody>
                </table> }

            </div>

        </>
    );
}
  
export default Home;
  