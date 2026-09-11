import { useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("Work");
  const {t} = useContext(LanguageContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({
      title,
      priority,
      category,
      isCompleted: false
    });
    setTitle("");
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" placeholder={t.taskInput} value={title} onChange={(e) => setTitle(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">{t.lowPriority}</option>
          <option value="medium">{t.mediumPriority}</option>
          <option value="high">{t.highPriority}</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Work">{t.workCategory}</option>
          <option value="Personal">{t.personalCategory}</option>
          <option value="Study">{t.studyCategory}</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">{t.addButton}</button>
    </form>
  );
};