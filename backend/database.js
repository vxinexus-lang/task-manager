const Database = require("better-sqlite3");

const db = new Database("tasks.db");

db.prepare(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed INTEGER DEFAULT 0
  )
`).run();

try {
  db.prepare("ALTER TABLE tasks ADD COLUMN completed INTEGER DEFAULT 0").run();
} catch (error) {
  // Column already exists
}

module.exports = db;