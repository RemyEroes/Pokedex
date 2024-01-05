import React, { useState } from 'react';

export const OpenCardContext = React.createContext()

export function OpenCardProvider({ children }) {
    const [openCardValue, setOpenCardValue] = useState('close');
    const [opencardIdValue, setOpencardIdValue] = useState();

    function openingCardValueFunction() {
        setOpenCardValue('opening')
    };

    function openCardValueFunction() {
        setOpenCardValue('open')
    };

    function closingCardValueFunction() {
        setOpenCardValue('closing')
    };

    function closeCardValueFunction() {
        setOpenCardValue('close')
    };

    const value = { openCardValue, openingCardValueFunction, openCardValueFunction, closingCardValueFunction, closeCardValueFunction , opencardIdValue, setOpencardIdValue}

    return (
        <OpenCardContext.Provider value={value}>
            {children}
        </OpenCardContext.Provider>
    );
}