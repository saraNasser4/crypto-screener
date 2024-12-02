import { useState, useEffect, createContext } from "react";

export const GlobalStates = createContext()

const GlobalStatesProvider = ({ children }) => {
    
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(()=> {
        const handleResize = () => setWindowSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);   
    }, [])
    
  return (
    <GlobalStates.Provider value={windowSize}>
        {children}
    </GlobalStates.Provider>
  )
}

export default GlobalStatesProvider