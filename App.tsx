import React, { useState } from "react";
import "./App.css";
import { TodoProvider } from "./TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <TodoProvider>
          <AddTodo />
          <TodoList />
        </TodoProvider>
      </div>
    </>
  );
}

export default App;
