import { useState } from "react";

export let TaskItems = ({task, onDelete, onToggle, onUpdate}) => {
    const [isEditing, setEditing] = useState(false);

    return (
        <div>
            {isEditing === false ? (
            <>
                <input type="checkbox" checked={task.isCompleted} onChange={() => onToggle(task.id)} />
                <span className={task.isCompleted ? "completed" : ""}>{task.title}</span>
                <span className={`badge priority-${task.priority}`}>{task.priority}</span>
                <span className="badge category-tag">{task.category}</span>
                <button type="button" onClick={() => setEditing(true)}>✏️</button>
                <button type="button" onClick={() => onDelete(task.id)}>🗑️</button>
            </>) 
                : (
                    <form className="task-edit-form">
                        
                </form>
            )}
        </div>
        );
};