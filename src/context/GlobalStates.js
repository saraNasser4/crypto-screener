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
    
  return (
    <GlobalStates.Provider value={{ windowSize, Styles }}>
        {children}
    </GlobalStates.Provider>
  )
}

export default GlobalStatesProvider