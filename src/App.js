import React from "react";
import './css/app.css';
import Home from './pages/Home'
import Menu from './components/Menu'
import { PokemonProvider } from './contexts/PokemonContext';
import { OpenCardProvider } from './contexts/OpenCardContext';
import { FilterProvider } from "./contexts/FilterContext";


// fetch('https://pokedex-api.3rgo.tech/api/pokemon')
//   .then((response) => {
//     return response.json()
//   })
//   .then((result) => {
//     console.log(result)
//   })


function App() {
  return (
    <OpenCardProvider>
      <PokemonProvider>
        <FilterProvider>
          <Menu />
          <Home />
        </FilterProvider>
      </PokemonProvider>
    </OpenCardProvider>

  );
}

export default App;
