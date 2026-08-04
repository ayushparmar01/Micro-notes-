const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Our "database" for this assignment — just an array in memory.
// It resets every time the server restarts, and that's fine for now.
let notes = [];
let nextId = 1;

// TODO 1: GET /api/notes — send back the notes array
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// TODO 2: POST /api/notes — build a note from req.body, add it to the array, send it back
app.post("/api/notes", (req, res) => {
  const { title, content } = req.body;
  const newNote = {
    id: nextId++,
    title,
    content,
    createdAt: new Date(),
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// Delete notes button
app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const noteExists = notes.some((note) => note.id === id);

  if (!noteExists) {
    return res.status(404).json({ error: "Note not found" });
  }

  notes = notes.filter((note) => note.id !== id);
  res.status(204).end();
});

app.listen(5000, () => console.log("Server running on port 5000"));
