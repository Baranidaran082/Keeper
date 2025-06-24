import React, { useState } from "react";

function CreateArea(props) {
  // Separate state for title and content
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  function handleContentChange(event) {
    const newContent = event.target.value;
    setContent(newContent);
  }

  function submitNote(event) {
    // Create a note object with title and content
    const newNote = {
      title: title,
      content: content
    };

    // Pass the new note to parent component
    props.onAdd(newNote);

    // Clear the input fields
    setTitle("");
    setContent("");

    // Prevent form from refreshing the page
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleTitleChange}
          value={title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleContentChange}
          value={content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
