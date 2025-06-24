import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // notes will hold an array of note objects
  const [notes, setNotes] = useState([]);

  // Function to add a new note to the notes array
  function addNote(newNote) {
    setNotes(function (previousNotes) {
      // Create a new array with existing notes and the new note
      const updatedNotes = previousNotes.concat(newNote);
      return updatedNotes;
    });
  }

  function editNote(id, newTitle, newContent) {
  setNotes(function (previousNotes) {
    return previousNotes.map(function (noteItem, index) {
      // Check if this is the note we want to edit
      if (index === id) {
        // Replace the note with updated title and content
        return {
          title: newTitle,
          content: newContent
        };
      } else {
        // Keep the note unchanged
        return noteItem;
      }
    });
  });
}



  // Function to delete a note based on its index (id)
  function deleteNote(id) {
    setNotes(function (previousNotes) {
      // Filter out the note at the given index
      const updatedNotes = previousNotes.filter(function (noteItem, index) {
        if (index === id) { 
          return false; // skip this item
        } else {
          return true; // keep this item
        }
      });
      return updatedNotes;
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      <div className="notes-container">
  {notes.map((noteItem, index) => (
    <Note
      key={index}
      id={index}
      title={noteItem.title}
      content={noteItem.content}
      onDelete={deleteNote}
      onEdit={editNote}
    />
  ))}
</div>


      <Footer />
    </div>
  );
}

export default App;
