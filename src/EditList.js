import React from "react";
import { useLocation } from "react-router-dom";

const EditList = ({ addNote, editNote }) => {
  const location =  useLocation();
  const [title, setTitle] = React.useState(location.state ? location.state.note.title : "");
  const [description, setDescription] = React.useState(location.state ? location.state.note.text : "");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleClick = () => {
    if(location.state){
      editNote({ id: location.state.note.id, text: description, title: title })
    } else{
      addNote(title, description)
    }
  }

  return (
    <div>
      <p>Edit List</p>
      <div className="input-container">
        <input className="title" type="text" onChange={handleTitle} value={title} />
        <textarea className="text" type="text" onChange={handleDescription} value={description} />
      </div>
      
      <button className="btn" onClick={handleClick}>save</button>
    </div>
  );
};

export default EditList;
