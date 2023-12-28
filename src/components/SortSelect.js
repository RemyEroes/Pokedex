import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SortSelect() {
    var language = useTranslation().i18n.language;

    var sort_options = {};
    var sort_type = {};
    if (language==='fr'){
        sort_options = {
            "Numero": "🔢",
            "Alphabetique": "🔡",
            "Poids": "⚖️",
            "Taille": "📏",
        };

        sort_type = {
            "croissant": "⬆️",
            "decroissant": "⬇️",
        };
    }else if (language==='en'){
        sort_options = {
            "Number": "🔢",
            "Alphabetical": "🔡",
            "Weight": "⚖️",
            "Height": "📏",
        };

        sort_type = {
            "ascending": "⬆️",
            "descending": "⬇️",
        };
    }
    else if (language==='ja'){
        sort_options = {
            "番号": "🔢",
            "アルファベット順": "🔡",
            "体重": "⚖️",
            "身長": "📏",
        };

        sort_type = {
            "上昇": "⬆️",
            "降順": "⬇️",
        };
    }
    else if (language==='zh'){
        sort_options = {
            "数字": "🔢",
            "字母顺序": "🔡",
            "重量": "⚖️",
            "高度": "📏",
        };

        sort_type = {
            "升序": "⬆️",
            "降序": "⬇️",
        };
    }
    const sortOptions = Object.entries(sort_options).map(([keyO, emojiO]) =>
        Object.entries(sort_type).map(([keyT, emojiT]) => (
            <option key={keyO + keyT} value={keyO + keyT}>
                {emojiO} {keyO} : {emojiT}
            </option>
        ))
    );

    return <>{sortOptions}</>;
}
