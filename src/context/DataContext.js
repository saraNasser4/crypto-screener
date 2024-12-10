import { createContext, useEffect, useState } from "react"

export const DataContext = createContext({})

export default function DataProvider (props){
    const [cryptoData, setCryptoData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [coinSearch, setCoinSearch] = useState('');
    const [currency, setCurrency] = useState('usd');
    const [sortBy, setSortBy] = useState('market_cap_desc');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(100);
    const [pageNumberToDisplay, setPageNumberToDisplay] = useState(5);
    
    const getCryptoData = async ()=> {
        try {
            const coinsListResponse = await fetch(`https://api.coingecko.com/api/v3/coins/list`)
            if(!coinsListResponse.ok) throw new Error('Failed to fetch coins list')
            const coinsListData = await coinsListResponse.json()
            
            setTotalPages(Math.ceil(coinsListData.length / pageNumberToDisplay))
            console.log(coinsListData.length)
        

            const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency || 'usd'}&ids=${coinSearch}&order=${sortBy}&per_page=${pageNumberToDisplay.toString()}&page=${page.toString()}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
            const marketResponse = await fetch(url)
            if(!marketResponse.ok) throw new Error('Failed to fetch market data')
            const marketData = await marketResponse.json()
            setCryptoData(marketData)
        } catch(err) {
            console.error(err, 'Crypto Data Fetch Error')
        }
    }

    const getSearchResult = async(query)=> {
        if(!query) return
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

    const restFunc = ()=> {
        setPage(1);
        setCoinSearch('')
    }


    useEffect(()=> {
        getCryptoData()
    }, [coinSearch, currency, sortBy, page, totalPages, pageNumberToDisplay])
    return(
        <DataContext.Provider 
            value={{
                cryptoData, 
                getSearchResult, 
                searchData, 
                setCoinSearch,
                currency, setCurrency, 
                sortBy, setSortBy, 
                page, setPage, 
                setPageNumberToDisplay,
                totalPages,
                restFunc
            }}
        >
            {props.children}
        </DataContext.Provider>
    )
}