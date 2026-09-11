import { createContext } from "react";
import { UseLocalStorage } from "./UseLocalStorage";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = UseLocalStorage("task_theme", "light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (<ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>)
};