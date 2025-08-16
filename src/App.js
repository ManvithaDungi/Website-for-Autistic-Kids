// src/App.js
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Game from './pages/Game';
import Tips from './pages/Tips';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { GameProvider } from './GameContext'; // <-- add this

function App() {
  return (
    <div className="App">
      <Navbar />
      <main id="main-content">
        {/* Wrap all routes inside GameProvider */}
        <GameProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/tips" element={<Tips />} />
          </Routes>
        </GameProvider>
      </main>
    </div>
  );
}

export default App;
