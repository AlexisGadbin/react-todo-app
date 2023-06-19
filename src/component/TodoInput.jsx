import "../styles/TodoInput.css";
import { useState } from "react";

export const TodoInput = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    if (todo !== "") {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <div className="todo-input-div">
      <input
        className="todo-input"
        type="text"
        value={todo}
        onChange={handleChange}
      />
      <button onClick={handleClick} className="todo-button-add">
        Add
      </button>
    </div>
  );
};
