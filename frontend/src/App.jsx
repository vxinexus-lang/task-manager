import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const getTasks = () => {
    fetch("http://localhost:5000/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      });
  };

  useEffect(() => {
    getTasks();
  }, []);

  const addTask = () => {
    if (title.trim() === "") return;

    fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setTitle("");
        getTasks();
      });
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        getTasks();
      });
  };

const updateTask = (id) => {
  const task = tasks.find((task) => task.id === id);

  const newTitle = prompt("Enter new task name:", task.title);

  if (!newTitle || newTitle.trim() === "") return;

  fetch(`http://localhost:5000/api/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: newTitle,
      completed: task.completed,
    }),
  })
    .then((response) => response.json())
    .then(() => {
      getTasks();
    });
};
const toggleTask = (id) => {
  const task = tasks.find((task) => task.id === id);

  fetch(`http://localhost:5000/api/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: task.title,
      completed: task.completed === 1 ? 0 : 1,
    }),
  })
    .then((response) => response.json())
    .then(() => {
      getTasks();
    });
};

  return (
    <div className="app">
      <h1>Task Manager</h1>

      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a task"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <h2>My Tasks</h2>

      <ul className="task-list">
        {tasks.map((task) => (
          <li className="task-item" key={task.id}>

            <div>
  <input
    type="checkbox"
    checked={task.completed === 1}
    onChange={() => toggleTask(task.id)}
  />

  <span
  style={{
    textDecoration: task.completed === 1 ? "line-through" : "none",
  }}
>
  {task.title}
</span>

</div>

            <div className="task-buttons">
              <button onClick={() => updateTask(task.id)}>
                Edit
              </button>

              <button onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;