const Database = require("better-sqlite3");

const db = new Database("tasks.db");

db.prepare(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL
  )
`).run();

module.exports = db;