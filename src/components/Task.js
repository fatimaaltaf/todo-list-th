import React from "react";
import moment from "moment";
import "./Task.css";

function Task(props) {
  const { task, index, completeTask, incompleteTask, deleteTask } = props;

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
        <p>Task:&nbsp;{task.title}</p>
        <p>Description:&nbsp;{task.description}</p>
      </div>
      <p
        className="task-category"
        style={{ display: task.category === "none" ? "none" : "block" }}
      >
        {task.category}
      </p>
      <div className="dueBy">
        Due By:&nbsp;
        {moment(task.startDate).format("MMM Do YYYY")}
      </div>
      <div className="complete-delete">
        {!task.isCompleted ? (
          <button className="complete" onClick={() => completeTask(index)}>
            Complete
          </button>
        ) : (
          <button className="complete" onClick={() => incompleteTask(index)}>
            Incomplete
          </button>
        )}
        <button className="delete" onClick={() => deleteTask(index)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
