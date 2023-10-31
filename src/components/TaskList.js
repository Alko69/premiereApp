import React from 'react';

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <div key={index}>
            <p>{task}</p>
            <button onClick={() => onDelete(index)}>Delete</button>
            <button onClick={() => onEdit(index)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
