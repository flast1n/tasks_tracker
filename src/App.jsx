import { useState, useContext } from "react";
import { AddTaskForm } from "./AddTaskForm";
import { TaskList } from "./TaskList";
import { UseLocalStorage } from "./UseLocalStorage";
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

export const App = () => {
  const [tasks, setTasks] = UseLocalStorage("my_tasks", initialTasks);
  const {theme} = useContext(ThemeContext);
  const {t} = useContext(LanguageContext);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), ...newTask }]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(item => item.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map(item => { 
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      } 
      return item;
    }));
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map(item => 
      item.id === updatedTask.id ? updatedTask : item
    ));
  };

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <LanguageToggle />
        <ThemeToggle />
      </header>
      <main className="main-layout">
        <div>
          <p style={{ marginBottom: "1rem" }}>{t.totalTasks} {tasks.length}</p>
          <TaskList 
            tasks={tasks} 
            onDelete={handleDeleteTask} 
            onToggle={handleToggleTask} 
            onUpdate={handleUpdateTask} 
          />
        </div>
        <aside>
          <AddTaskForm onAdd={handleAddTask} />
        </aside>
      </main>
    </div>
  );
};