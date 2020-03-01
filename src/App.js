import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Task from "./components/Task";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [taskList, setTaskList] = useState([
    {
      title: "Meet friend for lunch",
      description: "Coffee at Dark Horse",
      startDate: new Date(),
      isCompleted: false
    }
  ]);

  // Add a new task to array
  const addTask = (title, description, startDate) => {
    const newTask = [...taskList, { title, description, startDate }];
    setTaskList(newTask);
  };

  // Toggle isCompleted status for task
  const completeTask = index => {
    const newTask = [...taskList];
    newTask[index].isCompleted = true;
    setTaskList(newTask);
  };

  // Removes a task for array
  const deleteTask = index => {
    const newTask = [...taskList];
    newTask.splice(index, 1);
    setTaskList(newTask);
  };

  // Clears all tasks from array
  const clearTaskList = () => {
    setTaskList([]);
  };

  return (
    <div className="App">
      <h1 className="todo-title">To Do List</h1>
      <div className="task-list-section">
        <Form addTask={addTask} />
      </div>
      <div className="task-list">
        {taskList.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
      <button className="clear-task" onClick={clearTaskList}>
        Clear All Tasks
      </button>
    </div>
  );
}

export default App;
