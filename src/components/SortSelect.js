import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SortSelect() {
    var language = useTranslation().i18n.language;


    var sort_options = {};
    var sort_type = {};
    if (language === 'fr') {
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
    } else if (language === 'en') {
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
    else if (language === 'ja') {
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
    else if (language === 'zh') {
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
    
    const sortOptions = [];
    var sort_number = 1;

    Object.entries(sort_options).forEach(([keyO, emojiO]) => {
        Object.entries(sort_type).forEach(([keyT, emojiT]) => {
            var currentSortNumber = sort_number++;

            sortOptions.push(
                <option key={keyO + keyT} value={currentSortNumber}>
                    {emojiO} {keyO} : {emojiT}
                </option>
            );
        });
    });

    return <>{sortOptions}</>;
}
