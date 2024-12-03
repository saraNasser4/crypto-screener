import { createContext, useEffect, useState } from "react"

export const DataContext = createContext({})

export default function DataProvider (props){
    const [cryptoData, setCryptoData] = useState();
    const [searchData, setSearchData] = useState();
    
    const getCryptoData = async ()=> {
        try {
            const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
            const data = await fetch(url)
                            .then(res=> res.json())
                            .then(json=> json)
            setCryptoData(data)
        } catch(err) {
            console.error(err, 'Fetch Error')
        }
    }

    const getSearchResult = async(query)=> {
      try {
        const url= `https://api.coingecko.com/api/v3/search?query=${query}`
        const data = await fetch(url)
                        .then(res=> res.json())
                        .then(json => json)
        setSearchData(data)
      } catch(err) {
        console.log(err, 'Search Error')
      }
    }

    useEffect(()=> {
        getCryptoData()
    }, [])
    return(
        <DataContext.Provider value={{cryptoData, getSearchResult, searchData}}>
            {props.children}
        </DataContext.Provider>
    )
}