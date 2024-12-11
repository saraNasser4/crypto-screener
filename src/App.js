import NavBar from './components/NavBar'
import Logo from './components/Logo'
import Crypto from './pages/Crypto'
import Saved from './pages/Saved'
import Trending from './pages/Trending'
import { Routes, Route } from "react-router-dom";
import DataProvider from './context/DataContext';
import TrendingProvider from './context/TrendingContext'
function App() {
  return (
    <DataProvider>
      <TrendingProvider>
        <div className='w-full h-full flex items-center flex-col font-nunito text-white relative'>
          <div className="w-screen h-screen bg-gray-300 fixed -z-10" />
          <Logo />
          <NavBar />
            
          <Routes>
              <Route path='/' element={<Crypto />} />
              <Route path='/trending' element={<Trending />} />
              <Route path='/saved' element={<Saved />} />
          </Routes>
        </div>
      </TrendingProvider>
    </DataProvider>
      
  );
}

export default App;
