import React, { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default function AppFunction() {
  // hook your code up here ;)
  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState([]);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setNewTask((prev) => ({
      ...prev,
      [name]: value,
      id: Date.now(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => {
      [...prev, newTask];
    });
    setNewTask({});
  };

  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => {
      prev.filter((task) => task.id !== taskIdToRemove);
    });
  };

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
}
