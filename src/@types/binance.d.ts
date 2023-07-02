
export interface IBinanceContext {
    stats: IStat[];
    error: string,
    searchString: string,
    loading: boolean,
    getStats?: () => void,
    setSearchString?:(query:string) => void,
    setError?:(error:string) => void,
    accountSnapShot?:() => void,
    balances: IBalance[],
}

export interface IBalance {
    asset: string,
    free: string,
    locked: string,
}

export type Props = {
    children?: React.ReactNode
  };

export interface IStat {
    symbol:string,
    priceChange:string,
    priceChangePercent:string
    weightedAvgPrice:string
    prevClosePrice:string
    lastPrice:string
    lastQty:string
    bidPrice:string
    bidQty:string
    askPrice:string
    askQty:string
    openPrice:string
    highPrice:string
    lowPrice:string 
    volume:string,
    quoteVolume:string,
    openTime:number,
    closeTime:number,
    firstId:number,
    lastId:number,
    count:number
}
