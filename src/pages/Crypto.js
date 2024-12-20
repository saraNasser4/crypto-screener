import { Outlet } from "react-router-dom"
import Filter from "../components/Filter"
import TableComp from "../components/TableComp"

export default function Crypto () {
    return(
        <section className="w-[90%] md:w-[80%] md:max-w-[1650px] my-10 lg:my-16">
            <Filter />
            <TableComp />
            <Outlet />
        </section>
    )
}