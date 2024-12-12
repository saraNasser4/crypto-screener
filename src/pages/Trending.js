import { useContext } from "react"
import { TrendingContext } from "../context/TrendingContext"

export default function Trending () {
    const { trendData } = useContext(TrendingContext)

    return(
        <section className="w-[90%] md:w-[80%] md:max-w-[1650px] my-10 lg:my-16">
            {trendData && <div className="w-full min-h-[60vh] grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 py-8 sm:pl-3 border border-gray-100 rounded">
                {trendData.map((coinObj)=> {
                
                    return(
                        <div key={coinObj?.item?.id} className="relative w-full max-w-[450px] min-h-[150px] mx-auto p-4 flex items-center justify-between bg-gray-200 hover:bg-gray-100/30 rounded sm:mt-10">
                          <div className="[&>p]:text-gray-100">
                            <p>Name: <span className="text-cyan">{coinObj.item?.name}</span></p>
                            <p>Market Cap Rank: <span className="text-cyan">{coinObj.item?.market_cap_rank}</span></p>
                            <p>Price (In Btc): <span className="text-cyan">{`BTC ${coinObj.item?.price_btc.toFixed(5)}`}</span></p>
                            <p>Score: <span className="text-cyan">{coinObj.item?.score}</span></p>
                          </div>
                          <div className="relative sm:absolute sm:-right-8 sm:-top-8 z-[10]">
                            <img src={coinObj?.item?.thumb} className='w-20 rounded-full' alt='trending logo'/>
                          </div>

                        </div>
                    )
                })}
            </div>}
            
        </section>
    )
}