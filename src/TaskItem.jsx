import { useState } from "react";

export const TaskItem = ({ task, onDelete, onToggle, onUpdate }) => {
  const [isEditing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editPriority, setEditPriority] = useState(task.priority);
  const [editCategory, setEditCategory] = useState(task.category);

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
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <select value={editCategory} onChange={(e) => setEditCategory(e.target.value)}>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Study">Study</option>
          </select>
          <button className="btn btn-primary" type="submit">Зберегти</button>
          <button className="btn btn-outline" type="button" onClick={() => setEditing(false)}>Скасувати</button>
        </form>
      )}
    </div>
  );
};