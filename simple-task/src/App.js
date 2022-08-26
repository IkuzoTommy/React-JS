import './App.css';
import TodoList from './TodoList';
import React, {useState}  from 'react';

function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
    return (
    <>
      <TodoList todos = {todos}/> 
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Complete</button>
      <div>
        0 left todo
      </div>

    </>
  );
}

export default App;
