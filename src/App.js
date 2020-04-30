import React from "react";
import EditList from "./EditList";
import "./App.css";

const App = () => {
  const [toggle, setToggle] = React.useState(false);
  const [notes, setNotes] = React.useState([]);

  const toggleEditList = () => {
    setToggle(!toggle);
  };
 
  const addNote = (title, text) => {
    const note = {
      title: title,
      text: text,
    }
    setNotes([...notes, note]);
    setToggle(!toggle);
  }

  const deleteNote = (note) => {
    const newArray = notes.filter((element) => element !== note);
    setNotes(newArray);
  }

  return (
    <div className="App">
      {toggle ? (
        <EditList addNote={addNote} toggleEditList={toggleEditList} />
      ) : (
        <div>
          <p>Notes list</p>
          <button onClick={toggleEditList}>Add note</button>
          <ul>
            {notes.map((note, index) => (
              <div key={index}>
                <ul>{note.title}</ul>
                <button>edit</button>
                <button onClick={() => deleteNote(note)}>delete</button>
              </div>
            ))}
          </ul>
          
        </div>
      )}
    </div>
  );
};

export default App;
