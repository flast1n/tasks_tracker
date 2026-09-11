import { Children, createContext } from "react";
import { UseLocalStorage } from "./UseLocalStorage";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({children}) => {
    const [lang, setLang] = UseLocalStorage("my_lang", "uk");

    const toggleLang = () => {
        setLang(lang === "uk" ? "en" : "uk")
    }
    
    tranlations = {
            uk: {
                totalTasks: "Всього завдань",
                taskInput: "Назва завдання...",
                lowPriority: "Низький пріорітет",
                mediumPriority: "Середній пріорітет",
                highPriority: "Високий пріорітет",
                workCategory: "Робота",
                personalCategory: "Особисте",
                studyCategory: "Навчання",
                saveButton: "Зберегти",
                cancelButton: "Скасувати",
                addButton: "Додати завдання",
                noTasks: "Список завдань порожній",
                easyDifficulty: "Низький",
                mediumDifficulty: "Середній",
                hardDifficulty: "Складний"
            },
            en: {
                totalTasks: "Total tasks",
                taskInput: "Task name...",
                lowPriority: "Low priority",
                mediumPriority: "Medium priority",
                highPriority: "High priority",
                workCategory: "Work",
                personalCategory: "Personal",
                studyCategory: "Study",
                saveButton: "Save",
                cancelButton: "Cancel",
                addButton: "Add task",
                noTasks: "Task list is empty",
                easyDifficulty: "Low",
                mediumDifficulty: "Medium",
                hardDifficulty: "Hard"
            }
        };

    return (<LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
        {children}
    </LanguageContext.Provider> )
};