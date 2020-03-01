import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Task from "./components/Task";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [taskList, setTaskList] = useState([
    {
      title: "Learn about React",
      description: "TEST",
      startDate: new Date(),
      isCompleted: false
    },
    {
      title: "Meet friend for lunch",
      description: "TEST2",
      startDate: new Date(),
      isCompleted: false
    },
    {
      title: "Build really cool todo app",
      description: "3",
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
      <div className="task-list">
        <Form addTask={addTask} />
        {taskList.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
        <button onClick={clearTaskList}>Clear All Tasks</button>
      </div>
    </div>
  );
}

export default App;
