import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks, onDelete, onToggle, onUpdate }) => {
  if (tasks.length === 0) {
    return <p>Список завдань порожній</p>;
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