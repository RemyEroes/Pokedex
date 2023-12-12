import React, { useState } from 'react';

export const OpenCardContext = React.createContext()

export function OpenCardProvider({ children }) {
    const [openCardValue, setOpenCardValue] = useState('close');

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

    const value = { openCardValue, openingCardValueFunction, openCardValueFunction, closingCardValueFunction, closeCardValueFunction }

    return (
        <OpenCardContext.Provider value={value}>
            {children}
        </OpenCardContext.Provider>
    );
}