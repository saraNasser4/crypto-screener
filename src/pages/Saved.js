import { useContext } from "react"
import { StorageContext } from "../context/StorageContext"
import TableHeader from "../components/TableHeader"
import TableBody from "../components/TableBody"

export default function Saved () {
    const { storageData, savedData } = useContext(StorageContext)
    return(
        <section className="w-[90%] md:w-[80%] md:max-w-[1650px] my-10 lg:my-16">
            {storageData.length > 0 ? 
                (
                    <table className="relative min-h-52 mt-9 mb-16 border border-gray-100 w-full rounded table-auto">
                        <TableHeader />
                        <TableBody data={savedData} />
                    </table>
                ) :
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-cyan capitalize">No saved data</p>
            }
        </section>
    )
}