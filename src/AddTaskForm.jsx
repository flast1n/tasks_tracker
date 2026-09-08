import { useState } from "react"

export let AddTaskForm = ({onAdd}) => {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("medium");
    const [category, setCategory] = useState("work");

    let handleSubmit = () => {
        if (!title.trim()) return;

        onAdd({
            title: title,
            priority: priority,
            category: category
        });
        setTitle("")
    };

    return (<form className="card" onSubmit={handleSubmit}>
        <input type="text" placeholder="Введіть назву товару:" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Низький</option>
            <option value="medium">Середній</option>
            <option value="high">Високий</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="work">Робота</option>
            <option value="personal">Особисте</option>
            <option value="study">Навчання</option>
        </select>
        <button type="submit" className="btn btn-primary">Save</button>
    </form>)
};