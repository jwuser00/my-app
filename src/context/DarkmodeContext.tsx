import { createContext, useState } from 'react';

type DarkmodeContextType = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

export const DarkmodeContext = createContext<DarkmodeContextType>({
    darkMode: false,
    toggleDarkMode: () => { }
});

export default function DarkmodeContextProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((prev) => !prev);
    return (
        <DarkmodeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkmodeContext.Provider>
    );
}
