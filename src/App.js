import './css/app.css';
import Home from './pages/Home'
import Menu from './components/Menu'
import { PokemonProvider } from './contexts/PokemonContext';
import { OpenCardProvider } from './contexts/OpenCardContext';


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
        <Menu />
        <Home />
      </PokemonProvider>
    </OpenCardProvider>

  );
}

export default App;
