import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function TableComp (){
    const { cryptoData } = useContext(DataContext)
    
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const theadData = [
        { mobile: ['Asset', 'Price'] },
        { sm: ['Asset', 'Name', 'Price', 'Market Cap Change'] },
        { md: ['Asset', 'Name', 'Price', 'Total Volume', 'Market Cap Change'] },
        { lg: ['Asset', 'Name', 'Price', 'Total Volume', 'Market Cap Change', '1H', '24H', '7D'] },   
    ]
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
    
    useEffect(()=> {
        window.addEventListener('resize', ()=> setWindowSize(window.innerWidth));
        return () => window.removeEventListener('resize', ()=> setWindowSize(window.innerWidth));   
    }, [windowSize])
    
    const screenSize = windowSize <= 630 ? theadData[0].mobile : windowSize <= 820 ? theadData[1].sm : windowSize < 980 ? theadData[2].md : theadData[3].lg;
    
    const requiredData =[]
    for (let item of screenSize) {
        if(theadDataValue[item]) {
            requiredData.push(theadDataValue[item])
        }
    }
    
    return(
        <table className="mt-9 border border-gray-100 w-full rounded flex flex-col">
            <thead className="capitalize text-gray-100 text-lg font-medium border-b border-b-gray-100">
                <tr className="flex justify-evenly w-full">
                    {screenSize.map((data, index)=> <th key={index} className="py-1">{data}</th>)}
                </tr>
            </thead>
            <tbody className="[&>tr]:border-b ">
                {cryptoData?.map((data, index)=> {
                    return(
                        <tr key={index} className="flex justify-evenly hover:bg-gray-200 w-full">
                            {requiredData.map((d,i)=> <td key={i} className="py-4">{data[d]}</td>)}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}