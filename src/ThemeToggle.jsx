import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeToggle = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (<div>
        <button className="btn" onClick={toggleTheme}>{theme === "light" ? "☀️" : "🌙"}</button>
    </div>)
};