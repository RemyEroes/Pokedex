import React from "react";
import './css/app.css';
import Home from './pages/Home'
import Menu from './components/Menu'
import { PokemonProvider } from './contexts/PokemonContext';
import { OpenCardProvider } from './contexts/OpenCardContext';
import { FilterProvider } from "./contexts/FilterContext";
import { SortProvider } from "./contexts/SortContext";
import { SearchProvider } from "./contexts/SearchContext";
import { PokemonListProvider } from "./contexts/PokemonListContext";


function App() {
  return (
    <OpenCardProvider>
      <PokemonProvider>
        <SearchProvider>
          <FilterProvider>
            <SortProvider>
              <PokemonListProvider>
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
