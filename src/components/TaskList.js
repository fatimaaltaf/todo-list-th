import React from 'react';

function TaskList(props) {

  const { task, index, completeTask, removeTask } = props;

  return (
    <div
      className="task"
      style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
    >
      {task.text}
      <div>
        <button onClick={() => completeTask(index)}>Complete</button>
        <button onClick={() => removeTask(index)}>x</button>
      </div>
    </div>
  );
}

export default TaskList;