import React, {useState, useEffect} from "react";
import './css/app.css';
import Home from './pages/Home'
import Menu from './components/Menu'
import Pointer from './components/Pointer'
import { PokemonProvider } from './contexts/PokemonContext';
import { OpenCardProvider } from './contexts/OpenCardContext';
import { FilterProvider } from "./contexts/FilterContext";
import { SortProvider } from "./contexts/SortContext";
import { SearchProvider } from "./contexts/SearchContext";
import { PokemonListProvider } from "./contexts/PokemonListContext";


function App() {
  // check is touch device or not (for pointer)
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchSupport = () => {
      setIsTouchDevice('ontouchstart' in window);
    };
    // Initial check on mount
    checkTouchSupport();
    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", checkTouchSupport);
    };
  }, []);
  return (
    <OpenCardProvider>
      <PokemonProvider>
        <SearchProvider>
          <FilterProvider>
            <SortProvider>
              <PokemonListProvider>
              {!isTouchDevice && <Pointer />}
                <Menu />
                <Home />
              </PokemonListProvider>
            </SortProvider>
          </FilterProvider>
        </SearchProvider>
      </PokemonProvider>
    </OpenCardProvider>

  );
}

export default App;
