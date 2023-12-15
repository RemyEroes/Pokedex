import React from 'react';

export default function SortSelect() {
    const sort_options = {
        "Numero": "🔢",
        "Alphabetique": "🔡",
        "Poids": "⚖️",
        "Taille": "📏",
    };

    const sort_type = {
        "croissant": "⬆️",
        "decroissant": "⬇️",
    };

    const sortOptions = Object.entries(sort_options).map(([keyO, emojiO]) =>
        Object.entries(sort_type).map(([keyT, emojiT]) => (
            <option key={keyO + keyT} value={keyO + keyT}>
                {emojiO} {keyO} : {emojiT}
            </option>
        ))
    );

    return <>{sortOptions}</>;
}
