import React, { useState} from 'react';

export const OpenCardContext = React.createContext()

export function OpenCardProvider({ children }) {
    const [openCardValue, setOpenCardValue] = useState('close');
    
    function openCardfunction(){
        setOpenCardValue('open')
    };

    function closeCardfunction(){
        setOpenCardValue('close')
    };
    const value = {openCardValue, openCardfunction, closeCardfunction}

    return (
        <OpenCardContext.Provider value={value}>
            {children}
        </OpenCardContext.Provider>
    );
}