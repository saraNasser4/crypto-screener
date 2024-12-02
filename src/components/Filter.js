import Search from "./Search"
import Currency from "./Currency"
import Sorting from "./Sorting"

import restImg from '../assets/reset.svg'

export default function Filter() {
    const inputStyle = ` rounded px-2 mx-2 mr-4 bg-gray-200 border focus:border-cyan outline-none`
    return(
        <div className="w-[calc(100%-16px)] lg:h-12 lg:border-2 border-gray-100 rounded-lg flex flex-col lg:flex-row justify-between items-center relative">
            <Search Style={inputStyle} />
            <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center px-4 w-full lg:max-w-[600px] mt-4 lg:mt-0">
                <img src={restImg} alt='reset button' className="absolute w-8 h-8 right-0 lg:right-1"/>
                <Currency Style={inputStyle} />
                <Sorting Style={inputStyle} />
            </div>
        </div>
    )
}