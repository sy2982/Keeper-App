import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNoteForm from "./AddNoteForm";
import { notes as initialNotes } from "../notes"; // Assuming notes.js exports the 'notes' array

function App() {
  const [notes, setNotes] = useState(initialNotes);

  const addNote = (title, content) => {
    const newNote = {
      key: Date.now(), // Using timestamp as a unique key
      title,
      content,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (key) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.key !== key));
  };

  return (
    <div>
      <Header />
      <AddNoteForm addNote={addNote} />
      {notes.map((note) => {
        return (
          <Note
            key={note.key}
            title={note.title}
            content={note.content}
            onDelete={() => deleteNote(note.key)}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
