import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { GlobalStates } from "../context/GlobalStates";
import Pagination from "./Pagination";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";


export default function TableComp (){
    const { cryptoData, currency } = useContext(DataContext)
    
    
    return(
        <>
            <table className="relative min-h-52 mt-9 mb-16 border border-gray-100 w-full rounded table-auto">
                {cryptoData ? (
                    <>
                        <TableHeader />
                        <TableBody data={cryptoData} />
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