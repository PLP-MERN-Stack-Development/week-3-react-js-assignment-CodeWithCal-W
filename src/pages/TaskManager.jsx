
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t =>
    filter === "active" ? !t.completed :
    filter === "completed" ? t.completed :
    true
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input className="border p-2 flex-1" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="bg-green-600 text-white px-4 py-2" onClick={addTask}>Add</button>
      </div>
      <div className="flex gap-2 mb-2">
        {["all", "active", "completed"].map(f => (
          <button key={f} onClick={() => setFilter(f)} className="underline capitalize">{f}</button>
        ))}
      </div>
      <ul>
        {filteredTasks.map(t => (
          <li key={t.id} className="flex justify-between items-center mb-2">
            <span className={t.completed ? "line-through text-gray-500" : ""}>{t.text}</span>
            <div>
              <button onClick={() => toggleComplete(t.id)} className="text-sm text-green-600 mr-2">✔</button>
              <button onClick={() => removeTask(t.id)} className="text-sm text-red-600">✖</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
