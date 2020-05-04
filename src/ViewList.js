import React from "react";
import {Link} from "react-router-dom";

const ViewList = ({notes, deleteNote, navigateToEditPage}) => {
  return(
    <div>
          <p>Notes list</p>
          <Link to="/new">Add note</Link>
          <ul>
            {notes.map((note) => (
              <div className="list-container"key={note.id}>
                <p>{note.title}</p>
                <div className="buttons-container">
                  <button className="btn" onClick={() => navigateToEditPage(note)}>edit</button>
                  <button className="btn" onClick={() => deleteNote(note.id)}>delete</button>
                </div>
              </div>
            ))}
          </ul>
          
        </div>
  )
}

export default ViewList;