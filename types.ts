import { ReactNode } from "react";
export interface Todo {
  id: string;
  task: string;
  isComplete: boolean;
  createdAt?: string;
}

export interface ChildProp {
  children: ReactNode;
}

export type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  completeTodo: (todo: Todo) => void;
};
