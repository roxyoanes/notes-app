import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory 
} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import EditList from "./EditList";
import ViewList from "./ViewList";
import "./App.css";

const App = () => {
  const [notes, setNotes] = React.useState([]);
  const history = useHistory()
 
  const addNote = (title, text) => {
    const note = {
      id: uuidv4(),
      title: title,
      text: text,
    }
    setNotes([...notes, note]);
    history.goBack()
  }

  const deleteNote = (id) => {
    const newArray = notes.filter((note) => note.id !== id);
    setNotes(newArray);
  }

  const editNote = (note) => {
    const newArray = notes.map((element) => element.id === note.id ? note : element);
    setNotes(newArray);
    history.goBack()
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ViewList
            deleteNote={deleteNote}
            notes={notes}
            navigateToEditPage={(note) => history.push("/edit", { note })}
          />
          </Route>
        <Route path="/new"><EditList addNote={addNote} /></Route>
        <Route path="/edit"><EditList addNote={addNote} editNote={editNote} /></Route>
      </Switch>
    </div>
  );
};

export default App;
