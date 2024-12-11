import { createContext, useEffect, useState } from "react"

export const TrendingContext = createContext({})

export default function TrendingProvider (props){
    const [trendData, setTrendData] = useState([]);
    
    const getTrendData = async ()=> {
        try {
            const trendingResponse = await fetch(`https://api.coingecko.com/api/v3/search/trending`) 
            if(!trendingResponse.ok) throw new Error('Failed to fetch Trending data')
            const trendingData = await trendingResponse.json()
            console.log(trendingData?.coins[0].item)
            setTrendData(trendingData)
        } catch(err) {
            console.error(err, 'Trend Data Fetch Error')
        }
    }

    const restTrendingResult = ()=> {
        getTrendData()
    }


    useEffect(()=> {
        getTrendData()
    }, [])
    return(
        <TrendingContext.Provider 
            value={{
                trendData,
                restTrendingResult
            }}
        >
            {props.children}
        </TrendingContext.Provider>
    )
}