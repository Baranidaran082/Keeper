import React, { useState } from "react";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false); // edit mode on/off
  const [editedTitle, setEditedTitle] = useState(props.title); // edit field title
  const [editedContent, setEditedContent] = useState(props.content); // edit field content

  function handleDeleteClick() {
    props.onDelete(props.id);
  }

  function handleEditClick() {
    setIsEditing(true); // enter edit mode
  }

  function handleSaveClick() {
    props.onEdit(props.id, editedTitle, editedContent); // send updated data to App
    setIsEditing(false); // exit edit mode
  }

  function handleTitleChange(event) {
    setEditedTitle(event.target.value);
  }

  function handleContentChange(event) {
    setEditedContent(event.target.value);
  }

  return (
    <div className="note">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
            placeholder="Edit title"
          />
          <textarea
            rows="3"
            value={editedContent}
            onChange={handleContentChange}
            placeholder="Edit content"
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Note;
