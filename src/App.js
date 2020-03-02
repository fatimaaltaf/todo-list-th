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
      category: "Social",
      startDate: new Date(),
      isCompleted: false
    }
  ]);

  // Add a new task to array
  const addTask = (title, description, category, startDate) => {
    const newTask = [...taskList, { title, description, category, startDate }];
    setTaskList(newTask);
  };

  // Toggle isCompleted status for task to complete
  const completeTask = index => {
    const newTask = [...taskList];
    newTask[index].isCompleted = true;
    setTaskList(newTask);
  };

  // Toggle isCompleted status for task to incomplete
  const incompleteTask = index => {
    const newTask = [...taskList];
    newTask[index].isCompleted = false;
    setTaskList(newTask);
  };

  // Removes a task from array
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
      <h1 className="todo-title">
        <img
          alt="to do list with heart"
          src="https://img.icons8.com/plasticine/80/000000/wish-list.png"
        ></img>
        To Do List
      </h1>
      <div className="task-list-section">
        <Form addTask={addTask} />
      </div>
      <div className="task-list">
        <h3 className="tasks-card-title">Tasks</h3>
        {taskList.length ? (
          taskList.map((task, index) => (
            <Task
              key={index}
              index={index}
              task={task}
              completeTask={completeTask}
              incompleteTask={incompleteTask}
              deleteTask={deleteTask}
            />
          ))
        ) : (
          <p className="clear-task-message">Please add a task</p>
        )}
      </div>
      <button className="clear-task" onClick={clearTaskList}>
        Clear All Tasks
      </button>
    </div>
  );
}

export default App;
