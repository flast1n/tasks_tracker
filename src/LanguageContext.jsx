import { createContext } from "react";
import { useLocalStorage } from "./UseLocalStorage";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("my_lang", "uk");

  const toggleLang = () => {
    setLang(lang === "uk" ? "en" : "uk");
  };

  const translations = {
    uk: {
      totalTasks: "Всього завдань:",
      taskInput: "Назва завдання...",
      lowPriority: "Низький пріоритет",
      mediumPriority: "Середній пріоритет",
      highPriority: "Високий пріоритет",
      workCategory: "Робота",
      personalCategory: "Особисте",
      studyCategory: "Навчання",
      saveButton: "Зберегти",
      cancelButton: "Скасувати",
      addButton: "Додати завдання",
      noTasks: "Список завдань порожній",
      easyDifficulty: "Низький",
      mediumDifficulty: "Середній",
      hardDifficulty: "Високий",
      searchPlaceholder: "Пошук завдань...",
      filterAll: "Усі",
      filterActive: "Активні",
      filterCompleted: "Виконані",
      filterHigh: "🔥 Важливі",
      sortDefault: "За датою",
      sortAlphabet: "За алфавітом",
      sortPriority: "За пріоритетом",
      progressText: "Прогрес виконання:"
    },
    en: {
      totalTasks: "Total tasks:",
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
      hardDifficulty: "High",
      searchPlaceholder: "Search tasks...",
      filterAll: "All",
      filterActive: "Active",
      filterCompleted: "Completed",
      filterHigh: "🔥 High Priority",
      sortDefault: "By date",
      sortAlphabet: "Alphabetical",
      sortPriority: "By priority",
      progressText: "Completion progress:"
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};