import React, { useState, useEffect } from 'react';
import pokeball from './images/pokeball.svg';
import logo from './images/Pokémon_logo.svg.png';
import './css/app.css';
import './Pokeball.css';


function Pokeball() {
  return (
    <>
    <div className="Pokeball">
        <img src={pokeball} className="Pokeball-img" alt="pokeball" />
        
    </div>
    <Logo></Logo>
    </>
  );
}

// function PokeballRolling() {
//   return (
//     <>
//     <div className="Pokeball">
//         <img src={pokeball} className="Pokeball-img-rolling" alt="pokeball" />
        
//     </div>
//     <Logo></Logo>
//     </>
//   );
// }

function PokeballGrowing() {
  return (
    <>
    <div className="Pokeball">
        <img src={pokeball} className="Pokeball-img-growing" alt="pokeball" />
        
    </div>
    <Logo></Logo>
    </>
  );
}


function Logo() {
  return (
    <div className="Logo">
        <img src={logo} className="Logo-img" alt="Pokemon-logo" />
    </div>
  );
}



const PokeballLoader = () => {
 

  // useEffect(() => {
    
    // Simuler une tâche asynchrone (par exemple, une requête API)
    // const fetchData = async () => {
    //   try {
    //     // Ici, vous pouvez mettre la logique de chargement de données
    //     // Attendre quelques secondes (simulons une tâche asynchrone)
    //     await new Promise(resolve => setTimeout(resolve, 3000));

    //     // Terminer le chargement
    //     setLoading(false);
    //   } catch (error) {
    //     console.error('Erreur lors du chargement des données', error);
    //     // Gérer les erreurs ici
    //     setLoading(false);
    //   }
    // };

    // // Appeler la fonction fetchData
    // fetchData();

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000)

    // Nettoyer le timer lors de la suppression du composant
    return () => clearTimeout(timer)
  }, []);

  // Afficher le loader tant que loading est vrai et apres la balle roule
  return loading ? <Pokeball /> :  <PokeballGrowing />;


}

// export default Pokeball;
export default PokeballLoader;




