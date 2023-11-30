import './css/app.css';
import Home from './pages/Home'
import Menu from './components/Menu'

// fetch('https://pokedex-api.3rgo.tech/api/pokemon')
//   .then((response) => {
//     return response.json()
//   })
//   .then((result) => {
//     console.log(result)
//   })


function App() {
  return (
    <>
      <Menu />
      <Home />
    </>
  );
}

export default App;
