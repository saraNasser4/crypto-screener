import Home from './pages/Home'
import Crypto from './pages/Crypto'
import Saved from './pages/Saved'
import Trending from './pages/Trending'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>MY REACT ROUTER APP</h1>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/crypto'>Crypto</Link></li>
          <li><Link to='/trending'>Trending</Link></li>
          <li><Link to='/saved'>Saved</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/crypto' element={<Crypto />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/saved' element={<Saved />} />
      </Routes>
    </div>
  );
}

export default App;
