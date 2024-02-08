import React from "react";
import { useState } from "react";
import { LuPlusSquare } from "react-icons/lu";
import "./TodoForm.css";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) {
      return;
    }
    addTodo(value);
    setValue("");
  }
  return (
    <div className="formCon">
      <form className="form container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          className="input"
          placeholder="Enter your tasks"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="todo-btn Button">
          <LuPlusSquare />
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
