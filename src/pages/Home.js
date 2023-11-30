import React, { useState, useEffect } from 'react';
import '../css/home.css'
// import GlareCard from '../components/Card'
import Card from '../components/Card'


// export default function Home() {
//     var [jsonData, setJsonData] = useState([]);

//     useEffect(() => {
//         // Charger le fichier JSON (remplacez le chemin par le bon chemin de votre fichier)
//         fetch('https://pokedex-api.3rgo.tech/api/pokemon')
//             .then(response => response.json())
//             .then(data => {
//                 setJsonData(data['data']);
//             })
//     }, []);

//     return (
//         <div className="home">
//             {Array.isArray(jsonData) && jsonData.map((item, index) => (
//                 <Card key={index} title={item[index]}/>
//             ))}
//         </div>
//     )
// }

const URL = 'https://pokedex-api.3rgo.tech/api/pokemon/';

export default function Home() {
    var [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            const result = await fetch(URL)
            result.json().then(json=>{
                setJsonData(json['data'])
            })
        }
        fetchData()
    }, []);

    return (
        <div className="home">
            {Array.isArray(jsonData) && jsonData.map((item, index) => (
                <Card key={index} title={item} />
            ))}
        </div>
    )
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