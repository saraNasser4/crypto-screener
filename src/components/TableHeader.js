import { useContext } from "react"
import { GlobalStates } from "../context/GlobalStates"

export default function TableHeader(props) {
    const { screenSize } = useContext(GlobalStates)
    return(
        <thead className="capitalize text-gray-100 text-lg font-medium border-b border-b-gray-100">
            <tr>
                {screenSize.map((data, index)=> <th key={index} className="py-1" style={{maxWidth: `calc(100% / ${screenSize.length})`}}>{data}</th>)}
            </tr>
        </thead>
    )
}