import React from 'react';
import moment from 'moment';

function TaskList(props) {

  const { task, index, completeTask, removeTask } = props;

  return (
    <div
      className="task"
      style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
    >
      <section>{task.title}</section>
      <section>{task.description}</section>
      {task.isCompleted ? (
              <p className="pending">PENDING</p>
            ) : (
              <p className="completed">COMPLETED!</p>
            )} }
      <section className="finishBy">Due By:</section>
            {moment(task.dueBy).format("MMM Do YY")}
      <div>
        <button onClick={() => completeTask(index)}>Complete</button>
        <button onClick={() => removeTask(index)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskList;