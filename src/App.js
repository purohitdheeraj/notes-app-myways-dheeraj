import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [notes, setNotes] = useState([]);

  const [note, setNote] = useState({
    id: "",
    title: "",
    description: ""
  });

  const addNewNote = () => {
    setNotes((prevNotes) => [...prevNotes, note]);
    setNote({
      id: "",
      title: "",
      description: ""
    });
  };

  console.log(notes);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNote((oldNote) => {
      return {
        ...oldNote,
        id: notes.length + 1,
        [name]: value
      };
    });
  };

  const notesEl = notes.map((note) => {
    return (
      <div key={note.id} className="note">
        <h4> Title: {note.title}</h4>
        <p>
          <strong>Description:</strong> {note.description}
        </p>
      </div>
    );
  });

  const newNoteEl = (
    <div>
      Note Title:
      <input
        name="title"
        type="text"
        value={note.title}
        placeholder="note title"
        onChange={handleInput}
      />
      <br />
      Note Description:
      <textarea
        name="description"
        type="text"
        value={note.description}
        placeholder="note description"
        onChange={handleInput}
      />
      <button onClick={addNewNote}>Add a Note</button>
    </div>
  );

  return (
    <div className="App">
      <h2>Notes App</h2>

      <div className="create-note">{newNoteEl}</div>

      <section className="notes-wrapper">
        <h3>Your Notes</h3>
        <div className="notes">
          {notes.length > 0 ? <>{notesEl}</> : <p>Add Some Notes</p>}
        </div>
      </section>
    </div>
  );
}
