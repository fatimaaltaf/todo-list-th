import React, { useState } from "react";
import "./Form.css";
import DatePicker from "react-date-picker";

export default function Form(props) {
  const { addTask } = props;

  const [title, setTitle] = useState(""); //set default title to empty
  const [description, setDescription] = useState(""); //set default desc to empty
  const [startDate, setStartDate] = useState(new Date()); //set default date to today
  const [category, setCategory] = useState();

  //Handles form onSubmit
  const handleSubmit = event => {
    event.preventDefault();

    //Error handling
    if (!title || !description || !startDate) {
      alert("Please fill out all fields");
      return;
    }

    //call prop
    addTask(title, description, category, startDate);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
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
      <div className="form-category">
        <label>
          Pick a category:&nbsp;
          <select
            value={category}
            onChange={event => setCategory(event.target.value)}
          >
            <option value="work">Home</option>
            <option value="social">School</option>
            <option value="home">Social</option>
            <option value="school">Work</option>
            <option value="none">None</option>
          </select>
        </label>
      </div>
      <span>Due By:&nbsp;</span>
      <DatePicker value={startDate} onChange={date => setStartDate(date)} />
      <button className="add-task" type="submit">
        Add Task
      </button>
    </form>
  );
}
