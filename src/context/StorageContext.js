import { createContext, useContext, useEffect, useState } from "react"
import { DataContext } from "./DataContext";

export const StorageContext = createContext({})

export default function StroageProvider (props){
    const [storageData, setStorageData] = useState(JSON.parse(localStorage.getItem('coins')) || []);
    const [savedData, setSavedData] = useState([]);

    const { currency, sortBy } = useContext(DataContext)
    
    const changeSaved = (coinId)=> {
        if(storageData.includes(coinId)) {
            const newCoins = storageData.filter(el => el !== coinId)
            setStorageData(newCoins)
            localStorage.setItem('coins', JSON.stringify(newCoins))
        } else {
            const newCoins = [...storageData, coinId]
            setStorageData(newCoins)
            localStorage.setItem('coins', JSON.stringify(newCoins))//
        }

    }

    const getSavedData = async ()=> {
        try {
            const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${storageData.join(',')}&order=${sortBy}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
            const savedResponse = await fetch(url)
            if(!savedResponse.ok) throw new Error('Failed to fetch Saved data')
            const savedFetching = await savedResponse.json()
            setSavedData(savedFetching)
            console.log(storageData)
        } catch(err) {
            console.error(err, 'Crypto Data Fetch Saved Data Error')
        }
    }


    useEffect(()=> {
        let initialCoins = JSON.parse(localStorage.getItem('coins')) || [];
        setStorageData(initialCoins)
        getSavedData()
    }, [])

    return(
        <StorageContext.Provider 
            value={{
                storageData,
                changeSaved,
                savedData
            }}
        >
            {props.children}
        </StorageContext.Provider>
    )
}