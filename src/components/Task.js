import React from "react";
import moment from "moment";

function Task(props) {
  const { task, index, completeTask, deleteTask } = props;

  return (
    <div className="task">
      <section
        style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
      >
        Task: {task.title}
      </section>
      <section>Description: {task.description}</section>
      {!task.isCompleted ? (
        <p className="pending">Pending</p>
      ) : (
        <p className="completed">Complete!</p>
      )}
      <div>
        <section className="dueBy">Due By:</section>
        {moment(task.dueBy).format("MMM Do YY")}
        <button onClick={() => completeTask(index)}>Complete</button>
        <button onClick={() => deleteTask(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
