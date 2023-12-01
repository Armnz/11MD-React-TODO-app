import React, { useState } from 'react';
import './App.css';

interface Task {
  text: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      const updatedTasks = [...tasks, { text: newTask, isCompleted: false }];
      setTasks(updatedTasks);
      setNewTask('');
    }
  };

  const markTaskDone = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isCompleted = true;
    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>To do</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.isCompleted ? 'line-through green 2px' : 'none' }}>
            {task.text}
            <button onClick={() => markTaskDone(index)}>Done</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      
      <div className="input-container">
        <input 
          type="text" 
          placeholder='New task'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
    </div>
  );
}

export default App;
