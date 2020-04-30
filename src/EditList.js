import React from "react";

const EditList = ({ addNote}) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <p>Edit List</p>
      <input type="text" onChange={handleTitle} value={title} />
      <textarea type="text" onChange={handleDescription} value={description} />
      <button onClick={() => addNote(title, description)}>save</button>
    </div>
  );
};

export default EditList;
