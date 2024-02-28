// App.js
import React, { useState } from 'react';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([
    'Tarefa 1',
    'Tarefa 2',
    'Tarefa 3',
  ]);

  return (
    <div className="App">
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
