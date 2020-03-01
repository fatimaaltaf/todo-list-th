import React from "react";
import moment from "moment";
import "./Task.css";

function Task(props) {
  const { task, index, completeTask, deleteTask } = props;

  return (
    <div className="task">
      <div className="pending-complete">
        {!task.isCompleted ? (
          <p className="pending">
            <img
              alt="high-importance-icon"
              src="https://img.icons8.com/officel/35/000000/high-importance.png"
            ></img>
          </p>
        ) : (
          <p className="completed">
            <img
              alt="checkmark-icon"
              src="https://img.icons8.com/cotton/35/000000/checkmark.png"
            ></img>
          </p>
        )}
      </div>
      <div
        className="task-title-desc"
        style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
      >
        <p>Task: {task.title}</p>
        <p>Description: {task.description}</p>
      </div>
      <div className="dueBy">
        Due By:
        {moment(task.startDate).format("MMM Do YYYY")}
      </div>
      <div className="complete-delete">
        <button onClick={() => completeTask(index)}>Complete</button>
        <button onClick={() => deleteTask(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
