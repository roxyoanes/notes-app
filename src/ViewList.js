import React from "react";
import {Link} from "react-router-dom";

const ViewList = ({notes, deleteNote, navigateToEditPage}) => {
  return(
    <div>
          <p>Notes list</p>
          <Link to="/new">Add note</Link>
          <ul>
            {notes.map((note) => (
              <div key={note.id}>
                <p>{note.title}</p>
                <button onClick={() => navigateToEditPage(note)}>edit</button>
                <button onClick={() => deleteNote(note.id)}>delete</button>
              </div>
            ))}
          </ul>
          
        </div>
  )
}

export default ViewList;