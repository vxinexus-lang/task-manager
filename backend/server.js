const express = require("express");
const cors = require("cors");

const db = require("./database");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from my backend! 🚀"
  });
});
app.get("/api/tasks", (req, res) => {
  const tasks = db.prepare("SELECT * FROM tasks").all();

  res.json(tasks);
});

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

/* */ 
app.delete("/api/tasks/:id", (req, res) => {
  const { id } = req.params;

  db.prepare("DELETE FROM tasks WHERE id = ?").run(id);

  res.json({
    message: "Task deleted successfully"
  });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});