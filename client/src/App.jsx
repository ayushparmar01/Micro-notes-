import { useState, useEffect } from "react";
import "./App.css";

const API_URL = "http://localhost:5000/api/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch all notes on page load
  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setNotes(data);
      } finally {
        setLoading(false);
      }
    }
    fetchNotes();
  }, []);

  // Add a new note
  const handleAddNote = async () => {
    if (!title.trim()) return; // simple guard so we don't add empty notes

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    const newNote = await response.json();

    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
  };

  // Bonus: delete a note
  const handleDeleteNote = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>MicroNotes</h1>

      <div className="note-form">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <button onClick={handleAddNote} disabled={!title.trim()}>
          Add Note
        </button>
      </div>

      {loading ? (
        <p className="loading-message">Loading notes...</p>
      ) : (
        <ul className="notes-list">
          {notes.map((note) => (
            <li key={note.id} className="note-item">
              <span className="note-text">
                {note.title}: {note.content}
              </span>
              <button
                className="delete-button"
                onClick={() => handleDeleteNote(note.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;