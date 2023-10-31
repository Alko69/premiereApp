import React, { useRef, useState } from "react";
import TaskList from "./TaskList";
import '../index.css'

const TaskAdd = () => {
  const taskInput = useRef();
  const [taskList, setTaskList] = useState([]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addTask() {
    setTaskList([...taskList, taskInput.current.value]);
    taskInput.current.value = '';
  }

  function deleteTask(index) {
    setSelectedTaskIndex(index);
    setIsModalOpen(true);
  }

  function confirmDelete() {
    if (selectedTaskIndex !== null) {
      const updatedTaskList = [...taskList];
      updatedTaskList.splice(selectedTaskIndex, 1);
      setTaskList(updatedTaskList);
      setSelectedTaskIndex(null);
      setIsModalOpen(false);
    }
  }

  function cancelDelete() {
    setSelectedTaskIndex(null);
    setIsModalOpen(false);
  }

  function editTask(index) {
    const newTaskText = prompt("Edit task:", taskList[index]);
    if (newTaskText !== null) {
      const updatedTaskList = [...taskList];
      updatedTaskList[index] = newTaskText;
      setTaskList(updatedTaskList);
    }
  }

  return (
    <>
      <TaskList tasks={taskList} onDelete={deleteTask} onEdit={editTask} />
      <input type="text" ref={taskInput} />
      <button onClick={addTask}>Add</button>

      {isModalOpen && (
        <div className="modal-container">
          <div className="modal">
            <p>Are you sure you want to delete this task?</p>
            <button onClick={confirmDelete}>Yes</button>
            <button onClick={cancelDelete}>No</button>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskAdd;
