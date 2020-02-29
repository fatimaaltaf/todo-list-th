import React, {useState} from 'react';
// import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
// import MomentUtils from "@date-io/moment";
// import Calendar from 'react-calendar';
import DatePicker from 'react-date-picker';

export default function Form(props) {

const { addTask } = props; 

  // const [value, setValue] = useState("");

  const [title, setTitle] = useState(props.title || "")
  const [description, setDescription] = useState(props.description || "")
  const [startDate, setStartDate] = useState(new Date());
  const [error, setError] = useState("")
 
  const handleTitle = event => {
    setTitle(event.preventDefault());
  }

  const handleDescription = event => {
    setDescription(event.preventDefault());
  }

  const formHandleSubmit = event => {
    event.preventDefault();
    // if (!value) return;
    // addTask(value);
    // setValue("");

    let task = {
      id: Math.floor(Math.random() * 100),
      title: event.target.title.value,
      description: event.target.description.value,
      isCompleted: false,
      dueBy: startDate
    }

    if (!task) {
      addTask(prevTask => [...prevTask, task])
    }

    if (task.title === "" || task.description === "") {
      setError("Cannot leave title or description blank")
    }

    setTitle("");
    setDescription("");
  };

  return (
    <form className="Form">
      <span>Title:</span>
      <input 
        type="text" 
        value={title} 
        name="Title"
        onChange={handleTitle}
        />
      <span>Description:</span>
      <input 
        type="text" 
        value={description} 
        name="Description"
        onChange={handleDescription}
        />
      <span>Due By:</span>
      <DatePicker
       value={startDate}
       onChange={setStartDate} 
       />
      <button onSubmit={formHandleSubmit}>Add Task</button>
    </form>
  );
}