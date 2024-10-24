import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleComplete = (index) => {
    const newTasks = tasks.map((t, i) => {
      if (i === index) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-[#D2B48C] flex items-center justify-center p-5">
      <div className="bg-[#8B4513] w-full max-w-md p-5 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-white mb-5">To-Do List</h1>

        <div className="flex items-center justify-center mb-4">
          <input
            type="text"
            className="p-2 rounded-lg border-none focus:outline-none w-full mr-2 bg-[#F5DEB3] text-[#8B4513]"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="bg-[#A0522D] text-white p-2 rounded-lg hover:bg-[#8B4513] transition duration-300"
            onClick={addTask}
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg bg-[#DEB887] ${
                task.completed ? "line-through opacity-50" : ""
              }`}
            >
              <span
                className="cursor-pointer text-[#8B4513] font-medium"
                onClick={() => toggleComplete(index)}
              >
                {task.text}
              </span>
              <button
                className="bg-[#8B4513] text-white p-1 rounded-lg hover:bg-[#A0522D] transition duration-300"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
