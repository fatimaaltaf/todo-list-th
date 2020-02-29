import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import TaskList from './components/TaskList'

function App() {

  const [taskList, setTaskList] = useState([
      { text: "Learn about React",
        description: "TEST",
        isCompleted: false
     },
      { text: "Meet friend for lunch",
      description: "",
      isCompleted: false
     },
      { text: "Build really cool todo app",
      description: "",
      isCompleted: false
    }
  ])

  // Allows to add new task
  const addTask = (text, description) => {
    const newTask = [...taskList, {text, description}]
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
        <button onSubmit={clearTaskList}>Clear All Tasks</button>
      </div>
    </div>
  );
}

export default App;
