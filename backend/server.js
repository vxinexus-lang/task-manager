const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from my backend! 🚀"
  });
});
/*new2*/ 
app.post("/api/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title
  };

  tasks.push(newTask);

  res.json(newTask);
});


/*new1*/ 
let tasks = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Build Backend" },
  { id: 3, title: "Connect API" }
];

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});