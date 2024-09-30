import React, { FormEvent, useState } from "react";
import { useTodoContext } from "./TodoContext";

export default function () {
  const [text, setText] = useState("");
  const { addTodo } = useTodoContext();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (addTodo && text) {
      addTodo(text);
    }
    setText("");
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit"> Add </button>
      </form>
    </section>
  );
}
