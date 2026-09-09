import { useState } from "react";

export const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("Work");

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
        <input type="text" placeholder="Назва завдання..." value={title} onChange={(e) => setTitle(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Низький пріоритет</option>
          <option value="medium">Середній пріоритет</option>
          <option value="high">Високий пріоритет</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Work">Робота</option>
          <option value="Personal">Особисте</option>
          <option value="Study">Навчання</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Додати завдання</button>
    </form>
  );
};