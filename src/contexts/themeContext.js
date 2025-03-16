import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

// const user = {
//     name: 'sukumar',
//     age: 32
// };

// const {name, age} = user;

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Default theme is light

    // Function to toggle the theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
};