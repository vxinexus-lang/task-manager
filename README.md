📝 Task Manager

«🚀 A simple full-stack Task Manager built to learn and practice modern web development.»

Task Manager is a full-stack web application where users can create, view, update, and delete tasks.
The project combines a React frontend, Node.js + Express backend, and SQLite database.

---

✨ Features

- ➕ Create Tasks — Add new tasks quickly
- 👀 View Tasks — See all your tasks in one place
- ✏️ Update Tasks — Edit existing tasks
- 🗑️ Delete Tasks — Remove tasks you no longer need
- 💾 Persistent Storage — Tasks are stored in a SQLite database
- 🔗 REST API — Frontend communicates with the backend through API endpoints
- ⚡ Fast Development — Built with Vite for a smooth development experience

---

🛠️ Tech Stack

🎨 Frontend

- ⚛️ React
- ⚡ Vite
- 🟨 JavaScript

⚙️ Backend

- 🟢 Node.js
- 🚂 Express.js

🗄️ Database

- 🪶 SQLite
- 🔧 better-sqlite3

---

📂 Project Structure

task-manager/
│
├── 📁 frontend/
│   ├── 📁 src/
│   ├── 📄 package.json
│   └── ...
│
├── 📁 backend/
│   ├── 📄 server.js
│   ├── 📄 package.json
│   └── ...
│
└── 📄 README.md

---

🚀 Getting Started

Follow these steps to run the project locally.

📋 Prerequisites

Make sure you have installed:

- 🟢 Node.js
- 📦 npm
- 🐙 Git

You can check your Node.js and npm versions using:

node --version
npm --version

---

💻 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/vxinexus-lang/task-manager.git

Then move into the project:

cd task-manager

---

2️⃣ Start the Backend ⚙️

Open a terminal and run:

cd backend
npm install
node server.js

The backend should start on:

http://localhost:5000

---

3️⃣ Start the Frontend 🎨

Open a new terminal and run:

cd frontend
npm install
npm run dev

The frontend should be available at:

http://localhost:5173

Open the URL in your browser and you're ready to go! 🎉

---

🔄 How It Works

The application follows a simple full-stack architecture:

        👤 User
          │
          ▼
   🎨 React Frontend
          │
          │ HTTP Requests
          ▼
   ⚙️ Express Backend
          │
          │ SQL Operations
          ▼
     🗄️ SQLite Database

The frontend sends requests to the Express API, which handles the application logic and communicates with the SQLite database.

---

🔌 API Endpoints

Method| Endpoint| Description
🟢 GET| "/api/tasks"| Get all tasks
🔵 POST| "/api/tasks"| Create a new task
🟡 PUT| "/api/tasks/:id"| Update a task
🔴 DELETE| "/api/tasks/:id"| Delete a task

---

📸 Screenshots

«Screenshots can be added here as the project UI evolves.»

🚧 Coming soon...

---

📚 What I Learned

This project was built as a hands-on way to understand how a full-stack application works.

Through this project, I practiced:

- ⚛️ Building interfaces with React
- ⚡ Working with Vite
- 🟢 Creating a backend with Node.js
- 🚂 Building REST APIs using Express
- 🔗 Connecting frontend and backend
- 🗄️ Working with SQLite databases
- 📡 Sending HTTP requests
- 🧩 Understanding CRUD operations
- 🐙 Using Git and GitHub for version control

---

🔮 Future Improvements

Some features I'd like to explore next:

- ☑️ Mark tasks as completed
- 🔍 Search and filter tasks
- 🏷️ Add task categories
- 📅 Add due dates
- 🎨 Improve the UI/UX
- 🔐 Add user authentication
- 📱 Make the application fully responsive

---

🌱 Project Status

🟢 Currently in development

This project is part of my journey of learning full-stack development, and new features and improvements will be added over time.

---

👩‍💻 Author

Vaidehi Narkhede

🎓 Computer Engineering Student
💻 Learning Full-Stack Development

---

⭐ If you found this project interesting, feel free to explore the code and follow along with its development!

Built with 💻 + ☕ + lots of debugging 😭<img width="1907" height="965" alt="Screenshot 2026-09-17 151447" src="https://github.com/user-attachments/assets/1fcf1679-8366-4611-8969-d5810f72e867" />
