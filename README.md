# MicroNotes

A very small full-stack notes app. Type a note, click "Add Note," and it
appears in a list on the page — stored on the server in memory while it's
running.

Built with:
- **Frontend:** React (Vite)
- **Backend:** Node.js + Express
- **Storage:** Plain in-memory array (no database — notes reset when the
  server restarts, which is expected for this assignment)

## What it does

- Shows a text box (title + content) and an "Add Note" button
- Displays a list of all notes below the form
- Talks to a small REST API with two endpoints:
  - `GET /api/notes` — returns all notes
  - `POST /api/notes` — adds a new note and returns it

## Project Structure

```
micronotes/
├── client/          # React app (Vite)
│   └── src/
│       ├── App.jsx
│       └── main.jsx
├── server/          # Express app
│   ├── server.js
│   └── package.json
├── warmup.js        # Part A JavaScript warm-up exercises
├── .gitignore
└── README.md
```

## How to Run

### 1. Run the warm-up exercises (Part A)

```bash
node warmup.js
```

### 2. Start the backend server

```bash
cd server
npm install
npm run dev
```

The server starts on **http://localhost:5000**.

### 3. Start the frontend

In a separate terminal:

```bash
cd client
npm install
npm run dev
```

Vite will print a local URL (usually **http://localhost:5173**) — open it
in your browser.

### 4. Try it out

Type a title and content, click **Add Note**, and watch it show up in the
list. Refresh the page and the notes will still be there — until you
restart the server, at which point the in-memory list resets.

## Screenshot

<img width="1917" height="875" alt="image" src="https://github.com/user-attachments/assets/15a941e0-f172-41c8-97e3-f21e807ce014" />





- Update and Delete are intentionally left out — this assignment only
  requires Create and Read.
- All server-side data lives in a plain JavaScript array in `server.js`,
  so it does not persist across server restarts.
