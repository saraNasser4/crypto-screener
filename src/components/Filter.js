import Search from "./Search"
import Currency from "./Currency"
import Sorting from "./Sorting"

import restImg from '../assets/reset.svg'
import { useContext } from "react"
import { GlobalStates } from "../context/GlobalStates"
import { DataContext } from "../context/DataContext"

export default function Filter() {
    const { Styles } = useContext(GlobalStates)
    const { restFunc } = useContext(DataContext)
    
    return(
        <div className="w-[calc(100%-16px)] lg:h-12 lg:border-2 border-gray-100 rounded-lg flex flex-col lg:flex-row justify-between items-center relative">
            <Search Style={Styles.inputStyle} />
            <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center px-4 w-full lg:max-w-[600px] mt-4 lg:mt-0">
                <button className='lg:-mt-6' onClick={restFunc}>
                    <img src={restImg} alt='reset button' className="absolute w-8 h-8 right-0 lg:right-1"/>
                </button>
                <Currency Style={Styles.inputStyle} />
                <Sorting Style={Styles.inputStyle} />
            </div>
        </div>
    )
}