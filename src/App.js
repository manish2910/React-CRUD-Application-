import React from 'react';
import './App.css';
import TodoState from './context/todoState';
import Todo from './components/todo/Todo';

function App() {
  return (
    <TodoState>
      <div className="App">
        <Todo />
      </div>
    </TodoState>
  );
}

export default App;
