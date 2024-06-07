import React, { useState } from "react";

function App() {
  const [newTask, setNewTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <input onChange={handleChange} value={newTask} />
      <button onClick={addTask}>Add Task</button>
      {todoList.map((task) => {
        return (
          <div key={task.id}>
            <h1>{task.taskName}</h1>
            <button onClick={() => deleteTask(task.id)}>Delete Task</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
