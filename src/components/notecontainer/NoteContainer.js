import React from "react";
import Note from "../note/Note";
import "./NoteContainer.scss";

const NoteContainer = (props) => {

  const reverseArray = (arr) => {

    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }

    return array;
  };

  const notes = reverseArray(props.notes);

  return (
    <div className="note_container">
      <h2>
        Notes
        <img
          src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-notes-communication-and-media-flatart-icons-outline-flatarticons.png"
          className="note_container_img"
          alt="img"
        />
      </h2>
      <div className="note_container_notes">
        {notes?.length>0?(
          notes.map((item) => (
            <Note key={item.id} note={item} deleteNote={props.deleteNote} updateText={props.updateText} />
            ))
            ):<h3>No notes available . Add some...</h3>
          }
      </div>
    </div>
  );
};

export default NoteContainer;
