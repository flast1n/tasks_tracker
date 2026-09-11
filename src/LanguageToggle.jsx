import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const LanguageToggle = () => {
    const {lang, toggleLang} = useContext(ThemeContext);

    return (<div>
        <button className="btn" onClick={toggleLang}>{lang === "uk" ? "🇺🇦" : "🇬🇧"}</button>
    </div>)
}