import { useContext } from "react";
import { TaskItem } from "./TaskItem";
import { LanguageContext } from "./LanguageContext";

export const TaskList = ({ tasks, onDelete, onToggle, onUpdate }) => {
  const {t} = useContext(LanguageContext);
  if (tasks.length === 0) {
    return <p>{t.noTasks}</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onDelete={onDelete} 
          onToggle={onToggle} 
          onUpdate={onUpdate} 
        />
      ))}
    </div>
  );
};