import { useTodoContext } from "./TodoContext";
import { Todo, TodoContextType } from "./types";

export default function AddTodo() {
  const { todos, deleteTodo, completeTodo } = useTodoContext();
  return (
    <ul>
      {todos.map((todo: Todo, i: number) => (
        <li
          onClick={() => completeTodo(todo)}
          key={i}
          className={todo.isComplete ? "strike" : ""}
        >
          {todo.task}
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteTodo(todo.id);
            }}
          >
            D
          </button>
        </li>
      ))}
    </ul>
  );
}
