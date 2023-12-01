import React, { useState, useEffect } from 'react';
import '../css/home.css'
// import GlareCard from '../components/Card'
import Card from '../components/Card'

const URL = 'https://pokedex-api.3rgo.tech/api/pokemon/';

export default function Home() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                const json = await response.json();

                if (mounted) {
                    setJsonData(json['data']);
                }
            } catch (error) {
                console.error('Erreur lors du chargement des données :', error);
            }
        };

        let mounted = true;

        fetchData();

        return () => {
            mounted = false;
        };
    }, []); 

    console.log(jsonData);
    var language= 'fr'

    return (
        <div className="home">
            {jsonData.map(pokemon => (
                <Card key={pokemon.id} language={language} pokemon={pokemon} />
            ))}
        </div>
    );
    // return (
    //     <div className="home">
    //             <Card />
    //     </div>
    // );
}

// export default function Home() {
//     const [jsonData, setJsonData] = useState([]);
  
//     useEffect(() => {
//       fetch('https://pokedex-api.3rgo.tech/api/pokemon')
//         .then(response => response.json())
//         .then(data => setJsonData(data))
//         .catch(error => console.error('Erreur lors du chargement du JSON :', error));
//     }, []);
  
//     return (
//       <div className="home">
//         {jsonData.map((item, index) => (
//           <Card title={index} /* Autres propriétés de carte à partir de l'objet JSON */ />
//         ))}
//       </div>
//     );
//   }



