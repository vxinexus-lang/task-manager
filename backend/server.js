const express = require("express");
const cors = require("cors");

const db = require("./database");

const app = express();

app.use(cors());
app.use(express.json());

// Test API
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from my backend! 🚀"
  });
});

// GET all tasks
app.get("/api/tasks", (req, res) => {
  const tasks = db.prepare("SELECT * FROM tasks").all();

  res.json(tasks);
});

// POST - Add a new task
app.post("/api/tasks", (req, res) => {
  const { title } = req.body;

  const result = db
    .prepare("INSERT INTO tasks (title) VALUES (?)")
    .run(title);

  const newTask = db
    .prepare("SELECT * FROM tasks WHERE id = ?")
    .get(result.lastInsertRowid);

  res.json(newTask);
});

// DELETE - Delete a task
app.delete("/api/tasks/:id", (req, res) => {
  const { id } = req.params;

  db.prepare("DELETE FROM tasks WHERE id = ?").run(id);

  res.json({
    message: "Task deleted successfully"
  });
});

// PUT - Update a task
app.put("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  db.prepare(
    "UPDATE tasks SET title = ?, completed = ? WHERE id = ?"
  ).run(title, completed, id);

  const updatedTask = db
    .prepare("SELECT * FROM tasks WHERE id = ?")
    .get(id);

  res.json(updatedTask);
});

// Start server
app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});