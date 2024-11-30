import { useState, useEffect } from "react";

export default function TableComp (){
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const theadData = [
        { mobile: ['Asset', 'Price'] },
        { sm: ['Asset', 'Name', 'Price', 'Market Cap Change'] },
        { md: ['Asset', 'Name', 'Price', 'Total Volume', 'Market Cap Change'] },
        { lg: ['Asset', 'Name', 'Price', 'Total Volume', 'Market Cap Change', '1H', '24H', '7D'] },   
    ]

    useEffect(()=> {
        window.addEventListener('resize', ()=> setWindowSize(window.innerWidth));
        return () => window.removeEventListener('resize', ()=> setWindowSize(window.innerWidth));   
    }, [windowSize])

    const screenSize = windowSize <= 630 ? theadData[0].mobile : windowSize <= 820 ? theadData[1].sm : windowSize < 980 ? theadData[2].md : theadData[3].lg;
    return(
        <table className="mt-9 border border-gray-100 w-full rounded flex flex-col">
            <thead className="capitalize text-gray-100 text-lg font-medium border-b border-b-gray-100">
                <tr className="flex justify-evenly w-full">
                    {screenSize.map((data, index)=> <th key={index} className="py-1">{data}</th>)}
                </tr>
            </thead>
            <tbody className="[&>tr]:border-b ">
                <tr className="flex justify-evenly hover:bg-gray-200 w-full">
                    {screenSize.map((data, index)=> <td key={index} className="py-4">{data}</td>)}
                </tr>
            </tbody>
        </table>
    )
}