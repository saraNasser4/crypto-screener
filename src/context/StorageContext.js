import { createContext, useEffect, useState } from "react"

export const StorageContext = createContext({})

export default function StroageProvider (props){
    const [storageData, setStorageData] = useState([]);
    
    const changeSaved = (coinId)=> {
        let oldCoins = JSON.parse(localStorage.getItem('coins'))

        if(oldCoins.includes(coinId)) {
            setStorageData(oldCoins.filter(el => el !== coinId))
            localStorage.removeItem('coins', JSON.stringify(coinId))
        } else {
            setStorageData((prev)=> [...prev, coinId])
            localStorage.setItem('coins', JSON.stringify(storageData))//
        }

    }

    // const removeCoin = (coinId)=> {
    //     let oldCoins = JSON.parse(localStorage.getItem)
    // }


    useEffect(()=> {
        let isCoins = JSON.parse(localStorage.getItem('coins')) || false;
        if(isCoins) {
            let totalCoins = JSON.parse(localStorage.getItem('coins'))
            setStorageData(totalCoins)
         }else {
            localStorage.setItem('coins', JSON.stringify([]))
         }
    }, [])

    return(
        <StorageContext.Provider 
            value={{
                storageData,
                changeSaved,
                // removeCoin
            }}
        >
            {props.children}
        </StorageContext.Provider>
    )
}