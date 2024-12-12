import { useContext } from "react"
import { GlobalStates } from "../context/GlobalStates"
import SaveBtn from "./SaveBtn"
import { DataContext } from "../context/DataContext"

export default function TableBody({ data }) {
    const { requiredData, screenSize } = useContext(GlobalStates)
    const { currency } = useContext(DataContext)
    return(
        <tbody className="[&>tr]:border-b">
            {data?.map((data, index)=> {
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
    )
}