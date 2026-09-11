import { createContext } from "react";
import { useLocalStorage } from "./UseLocalStorage";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useLocalStorage("task_theme", "light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (<ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>)
};