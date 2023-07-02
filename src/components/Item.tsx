import {FC} from 'react';
import { IStat } from '../@types/binance';

type Props = {
    stat: IStat
};

const Item: FC<Props> = ({ stat }) => {
    const price = parseFloat(stat.lastPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const percentage = Math.round(parseFloat(stat.priceChangePercent) *100)/100
    const volume = Math.round(parseInt(stat.volume)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (
            
            <tr className="hover:bg-gray-50">
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div className="text-sm">
                        <div className="font-medium text-gray-700">{stat.symbol}</div>
                        <small className="text-gray-400">{stat.symbol}</small>
                    </div>
                </th>
                <td className="px-6 py-4">${price}</td>
                <td className="px-6 py-4">
                  

                    {stat.priceChangePercent.includes('-') ?
                        <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                            {percentage}%
                        </span> :
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                            {percentage}%
                        </span>
                    }

                </td>
                <td className="px-6 py-4">{volume}</td>
                  
            </tr>
      );
  }
  
  export default Item;
  