import React from 'react';
import TodoList from "./Todo/TodoList"

function App() {
  const todos = [
    {id: 1, completed: false, title: "купить пива"},
    {id: 2, completed: true, title: "go to Ivanovo"},
    {id: 3, completed: false, title: "купить сыра"},
  ]

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>

      <TodoList todos={todos} />
    </div>
  )
}

export default App;
