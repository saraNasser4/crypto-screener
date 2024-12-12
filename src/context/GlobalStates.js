import { useState, useEffect, createContext } from "react";

export const GlobalStates = createContext()

const GlobalStatesProvider = ({ children }) => {
  const Styles = {
    'inputStyle': ` rounded px-2 mx-2 mr-4 bg-gray-200 border focus:border-cyan outline-none`,
  }
    
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  useEffect(()=> {
      const handleResize = () => setWindowSize(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);   
  }, [])

  const theadData = {
    mobile: ['Asset', 'Price'] ,
    sm: ['Asset', 'Name', 'Price', 'Market Cap Change'],
    md: ['Asset', 'Name', 'Price', 'Total Volume', 'Market Cap Change'],
    lg: ['Asset', 'Name', 'Price', 'Total Volume', 'Market Cap Change', '1H', '24H', '7D'],   
  }

  const screenSize = windowSize <= 630 ? theadData.mobile :
      windowSize <= 820 ? theadData.sm : 
      windowSize < 980 ? theadData.md : theadData.lg;
  
  const theadDataValue = {
    'Asset': 'symbol',
    'Name': 'name',
    'Price': 'current_price',
    'Total Volume': 'total_volume',
    'Market Cap Change': 'price_change_percentage_24h',
    '1H': 'price_change_percentage_1h_in_currency',
    '24H': 'price_change_percentage_24h_in_currency',
    '7D': 'price_change_percentage_7d_in_currency',
  }
    
    
  const requiredData =[]
  for (let item of screenSize) {
    if(theadDataValue[item]) {
      requiredData.push(theadDataValue[item])
    }
  }
    
  return (
    <GlobalStates.Provider value={{ windowSize, Styles, screenSize, requiredData }}>
        {children}
    </GlobalStates.Provider>
  )
}

export default GlobalStatesProvider