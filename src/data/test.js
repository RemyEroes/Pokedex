


var jsonData

// Charger le fichier JSON (remplacez le chemin par le bon chemin de votre fichier)
fetch('pokemon.json')
    .then(response => response.json())
    .then(data => {
        jsonData = (data['data']);
    })

console.log(jsonData)
