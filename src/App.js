import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import TaskList from './components/TaskList'

function App() {

  const [taskList, setTaskList] = useState([
      { text: "Learn about React",
        description: "",
        isCompleted: false
     },
      { text: "Meet friend for lunch",
      isCompleted: false
     },
      { text: "Build really cool todo app",
      isCompleted: false
    }
  ])

  // Allows to add new task
  const addTask = (text) => {
    const newTask = [...taskList, {text}]
    setTaskList(newTask)
  }

  // Allows to select task as completed
  const completedTask = index => {
    const newTask = [...taskList]
    newTask[index].isCompleted = true;
    setTaskList(newTask)
  }

  // Allows to remove/delete task
  const deleteTask = index => {
    const newTask = [...taskList];
    newTask.splice(index, 1);
    setTaskList(newTask);
  };

  // Edit Tasks


  // Clear all tasks from list
  const clearTaskList = () => {
    setTaskList([]);
  }

  return (
    <div className="App">
      <div>
      </div>
      <div className="task-list">
        <p>Tasks</p>
        <Form addTask={addTask} />
       {taskList.map((task, index) => (
        <TaskList
          key={index}
          index={index}
          task={task}
          completedTask={completedTask}
          deleteTask={deleteTask}
        />
        ))}
      </div>
    </div>
  );
}

export default App;
