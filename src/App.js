// src/App.js
// Creating Components using Props: Navbar, Home, Game, Tips, and PetCompanion are custom components being imported and used.
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Game from './pages/Game';
import Tips from './pages/Tips';
import PetCompanion from "./components/PetCompanion";

import './App.css';
// Routing: Routes, Route, and useLocation are imported from react-router-dom to handle client-side routing.
import { Routes, Route, useLocation } from 'react-router-dom';
// State Management API: The GameProvider component is imported to provide context to its children.
import { GameProvider } from "./GameContext";

function App() {
  // Hooks: The useLocation hook is used to get the current URL location.
  const location = useLocation();

  return (
    // Layout: The JSX structure with divs and a main element defines the overall application layout.
    <div className="App">
      <Navbar />
      <main id="main-content">
        {/* State Management API: GameProvider wraps the part of the app that needs access to the shared game state. */}
        <GameProvider>
          {/* Conditional Rendering: The PetCompanion component is only rendered if the current path is the '/game' page. */}
          {location.pathname === '/game' && <PetCompanion />}
          
          {/* Routing: The Routes component defines the different navigation paths in the application. */}
          <Routes>
            {/* Routing / Props: Each Route component maps a URL path to a specific component, which is passed via the 'element' prop. */}
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
