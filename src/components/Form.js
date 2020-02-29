import React, { useState } from "react";
import "./Form.css";
import DatePicker from "react-date-picker";

export default function Form(props) {
  const { addTask } = props;

  const [title, setTitle] = useState(""); //set default title to empty
  const [description, setDescription] = useState(""); //set default desc to empty
  const [startDate, setStartDate] = useState(new Date()); //set default date to today

  const handleSubmit = event => {
    event.preventDefault();

    //validayion fnanfnao
    if (!title || !description || !startDate) {
      alert("Please fill out all fields");
      return;
    } 

    //call prop
    addTask(title, description, startDate);
    
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <span>Title:</span>
      <input
        type="text"
        value={title}
        name="Title"
        onChange={event => setTitle(event.target.value)}
      />
      <span>Description:</span>
      <input
        type="text"
        value={description}
        name="Description"
        onChange={event => setDescription(event.target.value)}
      />
      <span>Due By:</span>
      <DatePicker value={startDate} onChange={date => setStartDate(date)} />
      <button type="submit">Add Task</button>
    </form>
  );
}
