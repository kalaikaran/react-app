import { createContext, useContext, useEffect, useState } from "react";
import { ChildProp, Todo, TodoContextType } from "./types";

const TodoContext = createContext<TodoContextType | null>(null);
export function TodoProvider({ children }: ChildProp) {
  const [todos, setTodos] = useState<Todo[] | []>(() => {
    let data: Todo[] = [];
    const localTodos: string | null = localStorage.getItem("todos");
    if (localTodos) {
      data = JSON.parse(localTodos);
      return data;
    } else {
      return data;
    }
  });

  useEffect(() => {
    if (todos) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);
  const addTodo = (text: string) => {
    const todo: Todo = {
      id: crypto.randomUUID(),
      task: text,
      isComplete: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([todo, ...todos]);
    console.log();
  };
  const deleteTodo = (id: string) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    console.log(id, newTodo);
    setTodos(newTodo);
  };
  const completeTodo = (todo: Todo) => {
    if (todo.isComplete) return;
    todo = { ...todo, isComplete: true };
    const newTodo = todos.filter((ele) => ele.id !== todo.id);
    setTodos([...newTodo, todo]);
  };
  const contextValue: TodoContextType = {
    todos,
    addTodo,
    deleteTodo,
    completeTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
}

export function useTodoContext() {
  const context = useContext(TodoContext);
  return context;
}

// expory useContext = ()

export default TodoContext;
