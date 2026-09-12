import { useState, useContext } from "react";
import { AddTaskForm } from "./AddTaskForm";
import { TaskList } from "./TaskList";
import { useLocalStorage } from "./useLocalStorage";
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { TaskStats } from "./TaskStats";
import { TaskFilters } from "./TaskFilters";

export const App = () => {
  const [tasks, setTasks] = useLocalStorage("smart_tasks", [
    { id: 1, title: "Вивчити React Context", priority: "high", category: "Study", isCompleted: false },
    { id: 2, title: "Вивчити Git", priority: "medium", category: "Study", isCompleted: false }
  ]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("default");
  const { theme } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);

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

  const priorityWeight = { high: 3, medium: 2, low: 1 };

  const filteredTasks = tasks
    .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter(item => {
      if (filter === "active") return !item.isCompleted;
      if (filter === "completed") return item.isCompleted;
      if (filter === "high") return item.priority === "high";
      return true;
    })
    .sort((a, b) => {
      if (sort === "alphabet") return a.title.localeCompare(b.title);
      if (sort === "priority") return priorityWeight[b.priority] - priorityWeight[a.priority];
      return 0;
    });

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <h1 className="color">Smart Task Tracker</h1>
        <div className="header-controls">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>
      <main className="main-layout">
        <div>
          <TaskFilters 
            search={search} 
            onSearchChange={setSearch} 
            filter={filter} 
            onFilterChange={setFilter} 
            sortBy={sort} 
            onSortChange={setSort} 
          />
          <p className="color" style={{ marginBottom: "1rem" }}>{t.totalTasks} {tasks.length}</p>
          <TaskList 
            tasks={filteredTasks} 
            onDelete={handleDeleteTask} 
            onToggle={handleToggleTask} 
            onUpdate={handleUpdateTask} 
          />
          <TaskStats tasks={tasks} />
        </div>
        <aside>
          <AddTaskForm onAdd={handleAddTask} />
        </aside>
      </main>
    </div>
  );
};