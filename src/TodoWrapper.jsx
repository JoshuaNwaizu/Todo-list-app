import React, { useState } from "react";
import TodoForm from "./TodoForm";
import EditTodoForm from "./EditTodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import "./TodoWrapper.css";
import { PiNotepadDuotone } from "react-icons/pi";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  function handleTodos(todo) {
    setTodos([
      ...todos,
      {
        task: todo,
        isEditing: false,
        id: uuidv4(),
        completed: false,
      },
    ]);
    console.log(todos);
  }
  const handleOnComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    );
    console.log(todos);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: !todo.isEditing }
          : todo,
      ),
    );
  };
  const handleEditTasks = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: !todo.isEditing, task }
          : todo,
      ),
    );
  };
  const editTodo = (id, value) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: !todo.isEditing, task: value }
          : todo,
      ),
    );
  };
  // A function that renders 👀
  const renderTodos = () => {
    if (todos.length === 0) {
      return (
        <div className="render-container container ">
          <img
            src="/add-tasks.png"
            alt="Add task logo"
            className="render-image"
          />
        <p className="render-text">Add a task!</p>
          <p className="render-icon"><PiNotepadDuotone /></p>
        </div>
      );
    }
    return (
      <div className="todo-tasks container">
        {...todos.map((todo, index) =>
          !todo.isEditing ? (
            <Todo
              task={todo}
              key={index}
              onComplete={handleOnComplete}
              onDelete={handleDelete}
              editTodo={handleEditTodo}
            />
          ) : (
            <EditTodoForm
              task={todo}
              setTodos={setTodos}
              editTodo={editTodo}
            />
          ),
        )}
      </div>
    );
  };
  return (
    <div className="todoWrapper">
      <div>
        <TodoForm addTodo={handleTodos} />
        {renderTodos()}
      </div>
    </div>
  );
};

export default TodoWrapper;
