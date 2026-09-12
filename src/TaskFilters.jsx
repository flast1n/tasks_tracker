import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const TaskFilters = ({ search, onSearchChange, filter, onFilterChange, sortBy, onSortChange }) => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="card" style={{ marginBottom: "1.5rem" }}>
      <div className="form-group">
        <input 
          type="text" 
          value={search} 
          onChange={(e) => onSearchChange(e.target.value)} 
          placeholder={t.searchPlaceholder}
        />
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        <button 
          className={`btn ${filter === "all" ? "btn-primary" : "btn-outline"}`}
          onClick={() => onFilterChange("all")}
        >
          {t.filterAll}
        </button>
        <button 
          className={`btn ${filter === "active" ? "btn-primary" : "btn-outline"}`}
          onClick={() => onFilterChange("active")}
        >
          {t.filterActive}
        </button>
        <button 
          className={`btn ${filter === "completed" ? "btn-primary" : "btn-outline"}`}
          onClick={() => onFilterChange("completed")}
        >
          {t.filterCompleted}
        </button>
        <button 
          className={`btn ${filter === "high" ? "btn-primary" : "btn-outline"}`}
          onClick={() => onFilterChange("high")}
        >
          {t.filterHigh}
        </button>
      </div>

      <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
        <option value="default">{t.sortDefault}</option>
        <option value="alphabet">{t.sortAlphabet}</option>
        <option value="priority">{t.sortPriority}</option>
      </select>
    </div>
  );
};