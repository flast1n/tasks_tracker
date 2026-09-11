import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";


export const LanguageToggle = () => {
    const {lang, toggleLang} = useContext(LanguageContext);

    return (<div>
        <button className="btn" onClick={toggleLang}>{lang === "uk" ? "🇺🇦" : "🇬🇧"}</button>
    </div>)
}