import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
function App() {
  const [todos, setTodos] = useState(['Tod 1', 'Todo 2'])
  const todoNameRef = useRef()
  
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
  }
  
  return (
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef}type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Complete</button>
      <div> 0 left to do</div>
      
    </>
  )
}

export default App;
