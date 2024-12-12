import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { GlobalStates } from "../context/GlobalStates";
import Pagination from "./Pagination";
import SaveBtn from "./SaveBtn"


export default function TableComp (){
    const { cryptoData, currency } = useContext(DataContext)
    let { windowSize}  = useContext(GlobalStates)
    
    const theadData = {
        mobile: ['Asset', 'Price'] ,
        sm: ['Asset', 'Name', 'Price', 'Market Cap Change'],
        md: ['Asset', 'Name', 'Price', 'Total Volume', 'Market Cap Change'],
        lg: ['Asset', 'Name', 'Price', 'Total Volume', 'Market Cap Change', '1H', '24H', '7D'],   
    }

    const theadDataValue = {
        'Asset': 'symbol',
        'Name': 'name',
        'Price': 'current_price',
        'Total Volume': 'total_volume',
        'Market Cap Change': 'price_change_percentage_24h',
        '1H': 'price_change_percentage_1h_in_currency',
        '24H': 'price_change_percentage_24h_in_currency',
        '7D': 'price_change_percentage_7d_in_currency',
    }
    
    
    const screenSize = windowSize <= 630 ? theadData.mobile :
        windowSize <= 820 ? theadData.sm : 
        windowSize < 980 ? theadData.md : theadData.lg;
    
    const requiredData =[]
    for (let item of screenSize) {
        if(theadDataValue[item]) {
            requiredData.push(theadDataValue[item])
        }
    }
    
    return(
        <>
            <table className="relative min-h-52 mt-9 mb-16 border border-gray-100 w-full rounded table-auto">
                {cryptoData ? (
                    <>
                        <thead className="capitalize text-gray-100 text-lg font-medium border-b border-b-gray-100">
                            <tr className="">
                                {screenSize.map((data, index)=> <th key={index} className="py-1" style={{maxWidth: `calc(100% / ${screenSize.length})`}}>{data}</th>)}
                            </tr>
                        </thead>
                        <tbody className="[&>tr]:border-b">
                            {cryptoData?.map((data, index)=> {
                                return(
                                    <tr key={index} className={` hover:bg-gray-200 text-[1.1rem]`}>
                                        {requiredData?.map((d,i)=> {
                                            let value = data[d]
                                            if (typeof value === 'number') {
                                                if (d === 'current_price') {
                                                    value = value.toLocaleString('en-US', {style: 'currency', currency: currency.toUpperCase()})
                                                }else if (d === 'price_change_percentage_24h') {
                                                    value = `${value.toFixed(2)}%`
                                                }else {
                                                    value = value.toFixed(2)
                                                }                   
                                            } else if (d === 'symbol') {
                                                value = value.toUpperCase();
                                            }
                                            
                                            return(
                                                <td key={i} className={`${value > 0 && d !== 'total_volume' ? 'text-green' : value < 0 ? 'text-red' : ''} py-4 text-center`} style={{maxWidth: `calc(100% / ${screenSize.length})`}}>
                                                    {d === 'symbol' ? 
                                                        (
                                                            <div className="flex items-center md:justify-center pl-2 md:pl-0">
                                                                <SaveBtn data={data}/>
                                                                <img className='w-6 h-6 mx-1.5' src={data?.image} alt='currency logo'/>
                                                                <span>{value}</span>
                                                            </div>
                                                        ) : value
                                                    }
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </>
                ) : (
                    <tfoot className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-spin w-8 h-8 border-[3px] border-cyan border-t-gray-300 rounded-full"></div>
                    </tfoot>
                )}
            </table>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center capitalize my-4 w-full">
                <span className="col-span-1">Data provided by <a className='text-green font-semibold' href='https://www.coingecko.com' rel='noopener noreferrer' target='_blank'>CoinGecko</a></span>
                <Pagination />
            </div>
        </>
    )
}