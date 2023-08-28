import React, { createContext, useContext, useState } from 'react';

const LangContext = createContext();

export function LangProvider({ children }) {
    const [currentLanguage, setCurrentLanguage] = useState('fr');

    return (
        <LangContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLang() {
    return useContext(LangContext);
}
