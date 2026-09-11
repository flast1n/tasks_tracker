import { useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const TaskItem = ({ task, onDelete, onToggle, onUpdate }) => {
  const [isEditing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editPriority, setEditPriority] = useState(task.priority);
  const [editCategory, setEditCategory] = useState(task.category);
  const {t} = useContext(LanguageContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editTitle.trim()) return;
    onUpdate({ ...task, title: editTitle, priority: editPriority, category: editCategory });
    setEditing(false);
  };

  return (
    <div className={`task-item ${task.isCompleted ? "completed" : ""}`}>
      {!isEditing ? (
        <>
          <div className="task-content">
            <input type="checkbox" checked={task.isCompleted} onChange={() => onToggle(task.id)} />
            <div>
              <span className="task-title">{task.title}</span>
              <div className="task-meta">
                <span className={`badge priority-${task.priority}`}>{task.priority}</span>
                <span className="badge category-tag">{task.category}</span>
              </div>
            </div>
          </div>
          <div className="task-actions">
            <button className="btn btn-outline" type="button" onClick={() => setEditing(true)}>✏️</button>
            <button className="btn btn-danger" type="button" onClick={() => onDelete(task.id)}>🗑️</button>
          </div>
        </>
      ) : (
        <form className="task-edit-form" onSubmit={handleSubmit}>
          <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}
          />
          <select value={editPriority} onChange={(e) => setEditPriority(e.target.value)}>
            <option value="low">{t.easyDifficulty}</option>
            <option value="medium">{t.mediumDifficulty}</option>
            <option value="high">{t.hardDifficulty}</option>
          </select>
          <select value={editCategory} onChange={(e) => setEditCategory(e.target.value)}>
            <option value="Work">{t.workCategory}</option>
            <option value="Personal">{t.personalCategory}</option>
            <option value="Study">{t.studyCategory}</option>
          </select>
          <button className="btn btn-primary" type="submit">{t.saveButton}</button>
          <button className="btn btn-outline" type="button" onClick={() => setEditing(false)}>{t.cancelButton}</button>
        </form>
      )}
    </div>
  );
};