import Home from './pages/Home'
import Crypto from './pages/Crypto'
import Saved from './pages/Saved'
import Trending from './pages/Trending'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<Crypto />} />
          <Route path='/crypto' element={<Crypto />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/saved' element={<Saved />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
